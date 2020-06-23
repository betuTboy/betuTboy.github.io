(function() {

    window.Modules['wordfinder'] = {
        name: 'Wordfinder',
        init: boggle_init,
        init_join: boggle_init_join,
        onmessage: onMessage_boggle,
        redraw: redraw_boggle,
        menu: wordfinder_menu,
        game_message: wordfinder_game_message,
        cleanup: cleanup_boggle,
    };
    
    var colors = {};
    
    //
    // Canvas stuff
    //
    
    var area_size;
    var area_w;
    var area_h;
    var pad_x;
    var pad_y;
    var letter_w;
    var letter_h;
    var corner_r;
    var letter_font_size;
    var next_round_want = 0;
    var next_round_all = 0;
    
    var bgpatt = 0;
    
    var glob = {};
    var roomid;
    var is_spect = 0;
    var w;
    var h;
    var dict;
    var word = [];
    var matrix;
    var s_last = 0;
    var x_start;
    var y_start;
    var x_last;
    var y_last;
    var is_word_selecting = 0;
    var is_word_sending = 0;
    var is_word_sending_timeout;
    var table_rotate = 0;
    var is_paused = 0;
    var timing = {
        table_letter: [],
    };
    
    function boggle_init() {/*{{{*/
    
        $(document).keydown(function(e) {
            // if (e.keyCode == 80 ) {
            //	is_paused = 1 - is_paused;
            // }
    
            if ( 0 ) {
                // space
                if ( e.keyCode == 32 ) {
                    $('#send_vote_y_0').click();
                }
                // enter
                if ( e.keyCode == 13 ) {
                    $('#send_vote_n_0').click();
                }
            }
        });
    }/*}}}*/
    
    function addmsg_room(m) {/*{{{*/
    
        if ( $('#chatroom_' + roomid).length ) {
            addmsg(m, $('#chatroom_' + roomid));
        }
    }/*}}}*/
    
    function addmsgchat_room(m) {/*{{{*/
    
        addmsgchat(m, $('#chatroom_' + roomid));
    }/*}}}*/
    
    function setup_chat_on_enter() {/*{{{*/
    
        addmsgchat_room(T('Find words with mouse or touch!'));
        addmsgchat_room('* ' + T('Game control') + ': *');
        addmsgchat_room(T(''));
    }/*}}}*/
    
    function wordfinder_menu(dst) {/*{{{*/
    
        dst.append('<div id="menu_wf_dictionary" class="menuelement">' + T('Dictionary') + '</div>');
        $("#menu_wf_dictionary").click(function() {
            $("#hall_data").html('<div id="dict_clone" class="info"></div>');
            if ( !server['is_admin'] ) {
                dict_default = 'wordfinder_dict';
                dict_lang = dict_default + '_' + settings['lang'];
    
                if ($('#' + dict_lang).length) {
                    $("#dict_clone").html($('#' + dict_lang).html());
                } else {
                    $("#dict_clone").html($('#' + dict_default).html());
                }
            }
    
            if ( server['is_guest'] ) {
                return;
            }
    
            menu_selected = $(this).attr('id');
            $("#dict_clone").append('<hr/>');
            $("#dict_clone").append('<div id="dict_params" class="toplistparams"></div>');
            $("#dict_clone").append('<hr/>');
            $("#dict_clone").append('<div id="dict_data"></div>');
    
            var dict_params = '';
            dict_params += '<table class="create">';
            dict_params += '<tr><td id="dict_lang_l" class="table_create_r"></td><td id="dict_lang_r" class="table_create_l"></td></tr>';
            dict_params += '<tr><td id="dict_len_l" class="table_create_r"></td><td id="dict_len_r" class="table_create_l"></td></tr>';
            dict_params += '<tr><td id="dict_act_l" class="table_create_r"></td><td id="dict_act_r" class="table_create_l"></td></tr>';
            dict_params += '<tr><td id="dict_vote_l" class="table_create_r"></td><td id="dict_vote_r" class="table_create_l"></td></tr>';
            dict_params += '<tr><td id="dict_word_l" class="table_create_r"></td><td id="dict_word_r" class="table_create_l"></td></tr>';
            dict_params += '<tr><td id="dict_sort_l" class="table_create_r"></td><td id="dict_sort_r" class="table_create_l"></td></tr>';
            dict_params += '<tr><td id="dict_new_l" class="table_create_r"></td><td id="dict_new_r" class="table_create_l"></td></tr>';
            dict_params += '</table>';
            $('#dict_params').append(dict_params);
    
            $("#dict_lang_l").html(T('Dictionary'));
    
            var topfilters_game = topfilters['wordfinder'];
            var key = 'dict_filter';
            var options = topfilters_game[key]['options'];
            show_select($("#dict_lang_r"), '', key, false, 1, options, key, sel);
    
            $("#" + key).change(function() {
                wordfinder_dict_list();
            });
    
            $("#dict_len_l").html(T('Word length'));
            var select_len_id = 'len_filter';
            show_select($("#dict_len_r"), '', select_len_id, false, 1, {"0":T("No filter"), "2":T("_P1_ letters;2"), "3":T("_P1_ letters;3"), "4":T("_P1_ letters;4"), "5":T("_P1_ letters;5"), "6":T("_P1_ letters;6"), "7":T("_P1_ letters;7"), "8":T("_P1_ letters;8"), "9":T("_P1_ letters;9"), "10":T("_P1_ letters;10"), "11":T("_P1_ letters;11"), "12":T("_P1_ letters;12"), "13":T("_P1_ letters;13"), "14":T("_P1_ letters;14"), "15":T("_P1_ letters;15"), "16":T("_P1_ letters;16"), "17":T("_P1_ letters;17"), "18":T("_P1_ letters;18"), "19":T("_P1_ letters;19"), "20":T("_P1_ letters;20"), "21":T("_P1_ letters;21"), "22":T("_P1_ letters;22"), "23":T("_P1_ letters;23"), "24":T("_P1_ letters;24"), "25":T("_P1_ letters;25")}, '', sel);
    
            $("#" + select_len_id).change(function() {
                wordfinder_dict_list();
            });
    
            $("#dict_act_l").html(T('Active'));
            var select_act_id = 'act_filter';
            show_select($("#dict_act_r"), '', select_act_id, false, 1, {"0":T("No filter"), 'y':T("Yes"), 'n':T("No")}, '0', sel);
    
            $("#" + select_act_id).change(function() {
                wordfinder_dict_list();
            });
    
            $("#dict_vote_l").html(T('Vote filter'));
            var select_vote_id = 'vote_filter';
            show_select($("#dict_vote_r"), '', select_vote_id, false, 1, {"0":T("No filter"), 'hnv':T("Words has no votes"), 'hv':T("Words has votes"), 'hdv':T("Words has opposite votes"), 'iv':T("Words I voted"), 'inv':T("Words I not voted")}, 'inv', sel);
    
            $("#" + select_vote_id).change(function() {
                wordfinder_dict_list();
            });
    
            $('#dict_word_l').html(T('Word filter'));
            $('#dict_word_r').append(': <input id="word_filter" type="text" size="32" maxlength="32" value=""/><br/>');
    
            $('#word_filter').keydown(function(e) {
                if ( e.keyCode == 13 ) {
                    $('#current_page').val(1);
                    wordfinder_dict_list();
                }
            });
    
            $("#dict_sort_l").html(T('Words order'));
            var select_vote_id = 'word_sort';
            show_select($("#dict_sort_r"), '', select_vote_id, false, 1, {"1":T("Lexicographical"), '2':T("Most votes"), '3':T("Most yes votes"), '4':T("Most no votes"), '5':T("Word length")}, 'inv', sel);
    
            $("#dict_new_l").html(T('Suggest to add to dictionary'));
            $('#dict_new_r').append(': <input id="new_word" type="text" size="32" maxlength="32" value=""/><br/>');
            $('#new_word').keydown(function(e) {
                if ( e.keyCode == 13 ) {
                    var sel_dict = $('#dict_filter').val();
                    if ( sel_dict ) {
                        WS.send('auth GAME wordfinder VOTE Y ' + sel_dict + ' ' + $('#new_word').val() + ' -');
                        wordfinder_dict_list();
                        $('#new_word').val('');
                    } else {
                        alert(T('Select dictionary!'));
                    }
                }
            });
    
            $("#" + select_vote_id).change(function() {
                wordfinder_dict_list();
            });
    
            // add missing word
        });
    }/*}}}*/
    
    function wordfinder_dict_list() {/*{{{*/
    
        var sel_page = $('#current_page').val() || 1;
        var sel_dict = $('#dict_filter').val() || '0';
        var sel_len = $('#len_filter').val();
        var sel_vote = $('#vote_filter').val();
        var sel_word = $('#word_filter').val();
        var sel_sort = $('#word_sort').val();
        var sel_act = $('#act_filter').val();
    
        WS.send('auth GAME wordfinder DICT ' + sel_page + ' ' + sel_dict + ' ' + sel_len + ' ' + sel_vote + ' "' + sel_word + '" ' + sel_sort + ' ' + sel_act);
    
    //	$('#dict_data').html('<img id="login_loading" src="pics/loading.gif"/>');
    }/*}}}*/
    
    function wordfinder_game_message(data) {/*{{{*/
    
        if ( data == null ) {
            return;
        }
    
        var fx = data['fx'];
    
        if ( fx == 'DICT' ) {
            var words = data['words'];
            var dst = $('#dict_data');
            dst.empty();
            var page = data['page'];
            var onepage_size = data['limit'];
            var all = data['all'];
            var pages = parseInt(all / onepage_size);
            if ( all % onepage_size ) {
                pages++;
            }
            dst.append('<div id="page_dec" style="display: inline-block; user-select:none; font-size: 24px; vertical-align: middle;">&lt;&nbsp;</div><input id="current_page" type="text" size="4" maxlength="12" value="' + page + '"/> / ' + pages + '<div id="page_inc" style="display: inline-block; user-select:none; font-size: 24px; vertical-align: middle;">&nbsp;&gt;</div>');
            $('#current_page').keydown(function(e) {
                if ( e.keyCode == 13 ) {
                    wordfinder_dict_list();
                }
            });
            $('#page_inc').click(function(e) {
                var page_curr = $('#current_page').val();
                page_curr++;
                $('#current_page').val(page_curr);
                wordfinder_dict_list();
            });
            $('#page_dec').click(function(e) {
                var page_curr = $('#current_page').val();
                page_curr--;
                if ( page_curr >= 1 ) {
                    $('#current_page').val(page_curr);
                    wordfinder_dict_list();
                }
            });
    
            dst.append('<hr/>');
            dst.append(T('Words') + ': ' + all);
    
            dst.append('<table id="dict_word_list" class="score toplist_Rounds"><tr><td>' + T('Word') + '</td><td>' + T('Yes') + '</td><td>' + T('No') + '</td><td>' + T('Vote!') + '</td><td>' + T('Active') + '?</td><td>' + T('Search') + '</td></tr></table>');
    
            var sel_dict = $('#dict_filter').val()
            var i = 0;
            words.forEach(function(e) {
                var word = e[0];
                var vote_yes = e[1];
                var vote_no = e[2];
                var vote_my = e[3];
    
                if ( vote_my > 0 ) {
                    vote_yes = '<b>* ' + vote_yes + ' *</b>';
                } else if ( vote_my < 0 ) {
                    vote_no = '<b>* ' + vote_no + ' *</b>';
                }
    
                var is_active = '';
                if ( e[4] ) {
                    is_active = T('Yes');
                    if ( server['is_admin'] ) {
                        is_active += ' - <input id="active_change_' + i + '" type="button" value="' + T('No')+ '!" class="buttonnw">';
                    }
                } else {
                    if ( server['is_admin'] ) {
                        is_active = '<input id="active_change_' + i + '" type="button" value="' + T('Yes')+ '!" class="buttonnw"> - ';
                    }
                    is_active += T('No');
                }
                $('#dict_word_list tr:last').after('<tr><td>' + word + '</td><td>' + vote_yes + '</td><td>' + vote_no + '</td><td id="vote_' + i + '"></td><td>' + is_active + '</td><td><a target="_blank" href="https://www.google.hu/search?q=' + word + '">' + word + '</a></td></tr>');
    
                if ( vote_my <= 0 ) {
                    $('#vote_' + i).append('<img src="pics/wf_dict_in.png" id="send_vote_y_' + i + '"></img>');
                    $('#send_vote_y_' + i).prop('onclick',null).off('click');
                    $('#send_vote_y_' + i).click(function() {
                        WS.send('auth GAME wordfinder VOTE Y ' + sel_dict + ' ' + word + ' -');
                    });
                }
                if ( vote_my >= 0 ) {
                    $('#vote_' + i).append('<img src="pics/wf_dict_out.png" id="send_vote_n_' + i + '"></img>');
                    $('#send_vote_n_' + i).prop('onclick',null).off('click');
                    $('#send_vote_n_' + i).click(function() {
                        WS.send('auth GAME wordfinder VOTE N ' + sel_dict + ' ' + word + ' -');
                    });
                }
    
                $('#active_change_' + i).prop('onclick',null).off('click');
                $('#active_change_' + i).click(function() {
                    WS.send('auth GAME wordfinder ACTIVE_CHANGE ' + sel_dict + ' ' + word);
                });
    
                i++;
            });
            var word_filter = $('#word_filter').val();
            if ( word_filter ) {
                dst.append(T('Word filter') + ': ' + word_filter);
            }
        } else if ( fx == 'VOTE' ) {
            if ( menu_selected == 'menu_wf_dictionary' ) {
                wordfinder_dict_list();
            }
        } else if ( fx == 'ACTIVE_CHANGE' ) {
            wordfinder_dict_list();
        }
    }/*}}}*/
    
    function setup_help() {/*{{{*/
    
        $('#help').empty();
        $('#help').hide();
    }/*}}}*/
    
    function cleanup_boggle() {/*{{{*/
    
        for ( key in timing ) {
            if ( timing[key].length == 0 ) {
                continue;
            }
            var s = timing_stat(timing[key]);
            WS.send('auth GAME wordfinder TIMING ' + key + ' ' + s.count + ' ' + s.min + ' ' + s.max + ' ' + s.avg + ' ' + s.mdev);
        }
    }/*}}}*/
    
    function area_size_set(size) {/*{{{*/
    
        if ( !size ) {
            if ( area_w == 480 ) {
                size = 240;
            } else if ( area_w == 240 ) {
                size = 360;
            } else if ( area_w == 360 ) {
                size = 480;
            }
        }
    
        area_size = size;
        area_resize($("#area"), size, size);
    }/*}}}*/
    
    function area_resize(dst, this_w, this_h) {/*{{{*/
    
        area_w = this_w;
        area_h = this_h;
    
        $("#area").attr({ width: area_w, height: area_h });
        pad_x = area_w / 30;
        pad_y = area_h / 30;
        letter_w = (area_w - pad_x * (w + 1)) / w;
        letter_h = (area_h - pad_y * (h + 1)) / h;
        corner_r = Math.min(letter_w, letter_h) / 6;
        letter_font_size = Math.min(letter_w, letter_h) * 0.7;
    
        boggle_redraw_map();
    }/*}}}*/
    
    function get_area_html() {/*{{{*/
    
        return '<canvas id="area" width="' + area_w + '" height="' + area_h + '"></canvas>';
    }/*}}}*/
    
    function redraw_boggle() {/*{{{*/
    
        boggle_redraw_map();
    }/*}}}*/
    
    function matrix_get_xy(x, y) {/*{{{*/
    
        if ( !matrix ) {
            return '';
        }
    
        var xyr = rotate_coords_mapping(x, y, w, table_rotate);
        var xr = xyr[0];
        var yr = xyr[1];
    
        return matrix[yr][xr];
    }/*}}}*/
    
    function rotate_coords_mapping(x, y, s, r) {/*{{{*/
        //
        // s = size of the table (2 .. 8)
        // r = 0: 0cw, 1: 90cw, 2: 180 cw, 3: 270 cw
        //
    
        var res;
    
        if ( r == 0 ) {
            res = [x, y];
        } else {
            res = rotate_coords_mapping(s - 1 - y, x, s, r - 1);
        }
    
        return res;
    }/*}}}*/
    
    function draw_info(x, y, align, text, size, color) {/*{{{*/
    
        $("canvas").drawText({
            align: align,
            fillStyle: "#" + colors[color],
            x: x, y: y,
            fontSize: size + "pt",
            fontFamily: 'arial',
            text: text,
            fromCenter: true,
            respectAlign: true,
        });
    }/*}}}*/
    
    function is_neighbour(x1, y1, x2, y2) {/*{{{*/
    
        if ( x1 == x2 && Math.abs(y1 - y2) == 1 ) {
            return 1;
        } else if ( y1 == y2 && Math.abs(x1 - x2) == 1 ) {
            return 1;
        } else if ( Math.abs(x1 - x2) == 1 && Math.abs(y1 - y2) == 1 ) {
            return 1;
        }
    
        return 0;
    }/*}}}*/
    
    function get_letter_pos(word, x1, y1) {/*{{{*/
    
        for ( var i = 0 ; i < word.length ; i++ ) {
            if ( word[i][0] == x1 && word[i][1] == y1 ) {
                break;
            }
        }
    
        return i;
    }/*}}}*/
    
    function is_letter_pos(word, x, y) {/*{{{*/
    
        for ( var i = 0 ; i < word.length ; i++ ) {
            if ( word[i][0] == x && word[i][1] == y ) {
                return 1;
            }
        }
    
        return 0;
    }/*}}}*/
    
    function hit_test(x, y) {/*{{{*/
    
        for ( var i = 0 ; i < w ; i++ ) {
            for ( var j = 0 ; j < h ; j++ ) {
                var x1 = pad_x + i * letter_w + (pad_x * i) + letter_w / 2;
                var y1 = pad_y + j * letter_h + (pad_y * j) + letter_h / 2;
    
                var d = distance(x, y, x1, y1);
    
                if ( d < ( ( letter_w + letter_h ) / 2 ) / 2.3 ) {
                    return [i, j, 1];
                }
            }
        }
    
        return [null, null, 0];
    }/*}}}*/
    
    function sj_event(x, y, s, t) {/*{{{*/
        // s == -1 mousedown
        // s ==  1 mouseup
        // s ==  0 mousemove
    
        if ( is_word_sending ) {
            s_last = s;
            return;
        }
    
        //
        // Workaround: somtimes we got two same mousedown or mouseup events
        //
    
        if ( s != 0 && s == s_last ) {
            return;
        }
    
        //
        // ha nem kaptunk x coordinatat, mert pl. jatekmezon kivul van a pointer
        //
    
        if ( !x ) {
            x = x_last;
            y = y_last;
        }
    
        var is_word_selecting_start = is_word_selecting;
    
        //
        // returns with [x, y, 0-1]
        //
    
        r = hit_test(x, y);
        r_last = hit_test(x_last, y_last);
    
        //
        // mouse / touch down
        //
    
        if ( s == -1 ) {
            x_start = x;
            y_start = y;
    
            is_word_selecting = 1 - is_word_selecting;
        }
    
        //
        // mouse / touch up
        //
    
        if ( s == 1 ) {
            var dist = distance(x, y, x_start, y_start);
            if ( dist > 24 ) {
                is_word_selecting = 0;
            }
        }
    
        var word_start = word.slice(0); // copy word to word_start
    
        var letters_to_redraw = [];
    
        if ( is_word_selecting ) {
            if ( r[2] ) {
                if ( word.length == 0 ) {
                    // First selected letter
                    word[0] = [r[0], r[1]];
                    letters_to_redraw.push([r[0], r[1], 1, 1]); // selected and hovered
                } else {
                    lw = word[word.length - 1];
                    is_n = is_neighbour(r[0], r[1], lw[0], lw[1]);
                    if ( is_n ) {
                        var nth = get_letter_pos(word, r[0], r[1]);
    
                        if ( nth >= word.length - 2 ) {
                            for ( var i = nth ; i < word.length ; i++ ) {
                                letters_to_redraw.push([word[i][0], word[i][1], 0, 0]); // lets say clear
                            }
                            if ( nth > 0 ) {
                                var i = nth - 1;
                                letters_to_redraw.push([word[i][0], word[i][1], 1, 0]); // lets say clear
                            }
    
                            word.splice(nth, word.length);
                            word.push([r[0], r[1]]);
                            letters_to_redraw.push([r[0], r[1], 1, 1]); // selected and hovered
                        }
                    }
                }
            }
        } else {
            if ( r[2] && ( r[0] != r_last[0] || r[1] != r_last[1] ) ) {
                letters_to_redraw.push([r[0], r[1], 0, 1]);
            }
            if ( r_last[2] && ( r[0] != r_last[0] || r[1] != r_last[1] ) ) {
                letters_to_redraw.push([r_last[0], r_last[1], 0, 0]);
            }
        }
    
        if ( is_word_selecting_start == 1 && is_word_selecting == 0 ) {
            if ( word.length > 0 ) {
                var coords = '';
                for ( var i = 0 ; i < word.length ; i++ ) {
                    e = word[i];
                    var er = rotate_coords_mapping(e[1], e[0], w, table_rotate);
                    coords += er[1].toString() + er[0].toString();
                }
                if ( word.length > 1 ) {
                    is_word_sending = 1;
                    WSR.send('wordfinder W ' + coords);
                    is_word_sending_timeout = setTimeout(function () {
                        is_word_sending = 0;
                        var word_text = '&nbsp;';
                        $("#selected_word").html(word_text);
                    }, 3000);
                } else {
                    var letters_to_redraw = [];
                    for ( var i = 0 ; i < word.length ; i++ ) {
                        letters_to_redraw.push([word[i][0], word[i][1], 0, 0]); // lets say clear
                    }
                    word = [];
                }
            }
        }
    
        redraw_letters(letters_to_redraw, '');
    
        var word_text = '&nbsp;';
        for ( var i = 0 ; i < word.length ; i++ ) {
            var cx = word[i][0];
            var cy = word[i][1];
            word_text += matrix_get_xy(cy,cx);
        }
    
        $("#selected_word").html(word_text);
    
        s_last = s;
        x_last = x;
        y_last = y;
    }/*}}}*/
    
    function coords_pc(c1, c2, pc) {/*{{{*/
    
        var d = c2 - c1;
        var d2 = (d / 100) * pc;
        var r = c1 + d2;
    
        return r;
    }/*}}}*/
    
    function redraw_letters_by_coords(coords) {/*{{{*/
    
        var coords_arr = coords.match(/.{1,2}/g);
    
        boggle_redraw_map();
    
        for ( var i = 0 ; i < coords_arr.length ; i++ ) {
            var xy = coords_arr[i].split(/(?!$)/u);
    
            var xyr = rotate_coords_mapping(xy[0], xy[1], w, table_rotate);
    
            var pc = i / (coords_arr.length / 100);
            draw_letter(xyr[0], xyr[1], 0, 0, 1, 'pc' + pc);
        }
    
        var xy_last;
        for ( var i = 0 ; i < coords_arr.length ; i++ ) {
            var xy = coords_arr[i].split(/(?!$)/u);
            var xyr = rotate_coords_mapping(xy[0], xy[1], w, table_rotate);
            if ( i > 0 ) {
                var cx1 = pad_x + xyr[0] * letter_w + (pad_x * xyr[0]) + letter_w / 2;
                var cy1 = pad_y + xyr[1] * letter_h + (pad_y * xyr[1]) + letter_h / 2;
                var cx2 = pad_x + xy_last[0] * letter_w + (pad_x * xy_last[0]) + letter_w / 2;
                var cy2 = pad_y + xy_last[1] * letter_h + (pad_y * xy_last[1]) + letter_h / 2;
    
                var cx1_n = coords_pc(cx1, cx2, 35);
                var cy1_n = coords_pc(cy1, cy2, 35);
                var cx2_n = coords_pc(cx1, cx2, 70);
                var cy2_n = coords_pc(cy1, cy2, 70);
                $('canvas').drawLine({
                    strokeStyle: '#000',
                    strokeWidth: (pad_x + pad_y) / 2,
                    rounded: false,
                    endArrow: true,
                    arrowRadius: (letter_w + letter_h) / 20,
                    arrowAngle: 50,
                    x1: cx2_n, y1: cy2_n,
                    x2: cx1_n, y2: cy1_n,
                });
            }
            xy_last = xyr;
        }
    }/*}}}*/
    
    function redraw_letters(letters_to_redraw, spec) {/*{{{*/
    
        for ( var i = 0 ; i < letters_to_redraw.length ; i++ ) {
            var e = letters_to_redraw[i];
            draw_letter(e[0], e[1], e[2], e[3], 0, spec);
        }
    }/*}}}*/
    
    function draw_letters(force) {/*{{{*/
    
        var t0 = new Date().getTime();
    
        var drawn_letters = 0;
        for ( var i = 0 ; i < w ; i++ ) {
            for ( var j = 0 ; j < h ; j++ ) {
                drawn_letters += draw_letter(i, j, 0, 0, force, '');
            }
        }
    
        var t1 = new Date().getTime();
    
        if ( drawn_letters >= w * h ) {
            timing.table_letter.push((t1 - t0) / drawn_letters);
        }
    }/*}}}*/
    
    function draw_letter(x, y, sel, hover, force, spec) {/*{{{*/
    
        // spec: 'ok', 'again', 'fail', 'pc[0-9]{1,2}' = color percent
    
        var c = '';
        if ( matrix && matrix[y] ) {
            c = matrix_get_xy(y, x);
        } else {
            return 0;
        }
    
        var cx = pad_x + x * letter_w + (pad_x * x) + letter_w / 2;
        var cy = pad_y + y * letter_h + (pad_y * y) + letter_h / 2;
        var sx = letter_w;
        var sy = letter_h;
        var cr = corner_r;
        var fs = letter_font_size;
        var sw = (pad_x + pad_y) * 0.1;
    
        var bgcolor = hexc($('body').css('background-color'));
        var letter_border_color = shadeColor(hexc($('body').css('background-color')), -15);
        var letter_bg_color = shadeColor(hexc($('body').css('background-color')), -5);
        var letter_font_color = hexc($('#panel_l').css('color'));
    
        var color_sel;
        if ( sel && hover ) {
            color_sel = '#4070c0'; // #2050b0
            color_letter = '#ffffff'
        } else if ( sel && !hover ) {
            color_sel = '#4070c0';
            color_letter = '#ffffff'
        } else if ( !sel && hover ) {
            color_sel = shadeColor(letter_bg_color, -15);
            color_letter = letter_font_color;
        } else if ( !sel && !hover ) {
            color_sel = letter_bg_color;
            color_letter = letter_font_color;
        }
    
        if ( spec == 'ok' ) {
            color_sel = '#40c040';
            color_letter = '#ffffff';
        } else if ( spec == 'again' ) {
            color_sel = '#c0c040';
            color_letter = '#ffffff';
        } else if ( spec == 'fail' ) {
            color_sel = '#c04040';
            color_letter = '#ffffff';
        } else if ( spec == 'late' ) {
            color_sel = '#4040c0';
            color_letter = '#ffffff';
        } else if ( /^pc/.test(spec) ) {
            var percent = spec.replace(/^pc/, "");
            var percent_0_1 = percent / 100.0;
            var hue = ((percent_0_1) * 120).toString(10);
            var rgb = hsl2rgb(hue, 1, 0.4);
            color_sel = rgbtohex(parseInt(rgb.r), parseInt(rgb.g), parseInt(rgb.b));
            color_letter = '#ffffff';
        }
    
        var linear = $('canvas').createGradient({
            x1: cx - sx / 2, y1: cy - sy / 2,
            x2: cx + sx / 2, y2: cy + sy / 2,
            c1: shadeColor(color_sel, 15),
            c2: shadeColor(color_sel, -15),
        });
    
        var shadowBlur_size = area_w / 60.0;
        var shadowBlur_xy = area_w / 120.0;
    
        if ( force ) {
            $("canvas").drawRect({
                fillStyle: color_sel,
                x: cx,
                y: cy,
                width: sx,
                height: sy,
                shadowColor: '#000',
                shadowBlur: shadowBlur_size,
                shadowX: shadowBlur_xy, shadowY: shadowBlur_xy,
                strokeWidth: sw,
                strokeStyle: letter_border_color,
                cornerRadius: cr,
                fromCenter: true,
            });
        }
    
        $('canvas').drawRect({
            fillStyle: linear,
            x: cx, y: cy,
            width: sx, height: sy,
            cornerRadius: cr,
        });
    
        $('canvas').drawText({
            fillStyle: color_letter,
            strokeStyle: color_letter,
            strokeWidth: 2,
            x: cx, y: cy + (sy * 0.04),
            fontSize: fs,
            fontFamily: 'arial',
            text: c,
        });
    
        return 1;
    }/*}}}*/
    
    function words_all_to_words_toplist(words) {/*{{{*/
    
        var words_toplist = [];
        for ( key in words ) {
            if ( words[key] > 0 ) {
                words_toplist.push([key, words[key]]);
            }
        }
        words_toplist = words_toplist.sort(function(a, b) {
            return b[1] - a[1] || a[0].localeCompare(b[0]);
        });
    
        return words_toplist;
    }/*}}}*/
    
    function show_points_round_det(points_round_det) {/*{{{*/
        var r = '-';
    
        var words_len_hash = points_round_det['words'];
        if ( words_len_hash ) {
            r = '';
            var words_len = [];
            for ( key in words_len_hash ) {
                words_len.push([key, words_len_hash[key]]);
            }
            words_len = words_len.sort(function(a, b) {
                return b.length - a.length;
            });
            for ( var i = 0 ; i < words_len.length ; i++ ) {
                var len = words_len[i][0];
                var det_num = words_len[i][1]['num'];
                var det_points = words_len[i][1]['points'];
                var det_ea = det_points / det_num;
    
                r += '<b>' + T('_P1_ letters: _P2_ x _P3_ = _P4_ points;' + len + ';' + det_num + ';' + det_ea + ';' + det_points) + '</b><br/>';
            }
        }
    
        return r;
    }/*}}}*/
    
    function set_lets_go_next_round_values() {/*{{{*/
    
        if ( next_round_all == 1 ) {
            $('#lets_go_next_round').html(T("Let\'s go next round!<br/>(_P1_ / _P2_ player);" + next_round_want + ";" + next_round_all));
        } else {
            $('#lets_go_next_round').html(T("Let\'s go next round!<br/>(_P1_ / _P2_ players);" + next_round_want + ";" + next_round_all));
        }
    }/*}}}*/
    
    function words_user_missed(words_all, users_results, user_filter) {/*{{{*/
    
        var r = {};
    
        for ( var i = 0 ; i < users_results.length ; i++ ) {
            var username_this = users_results[i][0];
            if ( username_this != user_filter ) {
                continue;
            }
    
            var words_user = users_results[i][1];
            for ( key in words_all ) {
                if ( !words_user[key] ) {
                    r[key] = 0;
                }
            }
    
            break;
        }
    
        return r;
    }/*}}}*/
    
    function show_words(words, is_clickable, is_show_length, count_filter) {/*{{{*/
        var r = '-';
    
        if ( words ) {
            r = '';
            var words_sortable = [];
            for ( key in words ) {
                if ( count_filter == undefined || words[key] == count_filter ) {
                    words_sortable.push(key);
                }
            }
            words_sortable = words_sortable.sort(function(a, b) {
                return a.length - b.length || a.localeCompare(b);
            });
            var len = 0;
            for ( var i = 0 ; i < words_sortable.length ; i++ ) {
                var word = words_sortable[i];
                if ( i == 0 && is_show_length ) {
                    r += '<br/><b>' + T('_P1_ letters;' + word.length) + '</b><center><hr width="80%"/></center>';
                }
                if ( i > 0 && i < words_sortable.length ) {
                    if ( len != word.length ) {
                        r += '<br/>';
                        if ( is_show_length ) {
                            r += '<br/><b>' + T('_P1_ letters;' + word.length) + '</b><center><hr width="80%"/></center>';
                        }
                    } else {
                        r += ', ';
                    }
                }
                if ( is_clickable ) {
                    r += '<a href="#" class="sol">' + word + '</a>';
                } else {
                    r += word;
                }
                len = word.length;
            }
        }
    
        return r;
    }/*}}}*/
    
    function setup_panel_results() {/*{{{*/
        dst = $('#panel_results');
    
        dst.empty();
        dst.append('<a href="#res_round_all" id="res_round_all" class="res"><br/><b style="font-size: 16px;">' + T('All results') + '</b></a><br/><br/><hr/><br/>');
        dst.append('<a href="#res_round_summarized_toplist" class="res">' + T('Summarized toplist') + '</a><br/><br/>');
        dst.append('<a href="#res_round_toplist" class="res">' + T('Round toplist') + '</a><br/><br/>');
        dst.append('<a href="#res_round_missed_words" class="res">' + T('Missed words') + '</a><br/><br/>');
        dst.append('<a href="#res_round_unique_words" class="res">' + T('Unique words') + '</a><br/><br/>');
        dst.append('<a href="#res_round_found_words" class="res">' + T('Found words') + '</a><br/><br/>');
        dst.append('<a href="#res_round_all_words" class="res">' + T('All words') + '</a><br/><br/>');
        dst.append('<a href="#res_round_point_details" class="res">' + T('Point details') + '</a><br/><br/>');
        dst.append('<a href="#res_round_word_toplist" class="res">' + T('Word toplist') + '</a><br/><br/>');
    
        $('.res').prop('onclick',null).off('click').click(function(event) {
            event.preventDefault();
            var link = $(this).attr("href");
            var res_all = {
                '#res_round_point_details': 1,
                '#res_round_toplist': 1,
                '#res_round_missed_words': 1,
                '#res_round_unique_words': 1,
                '#res_round_found_words': 1,
                '#res_round_all_words': 1,
                '#res_round_word_toplist': 1,
                '#res_round_summarized_toplist': 1,
            };
            for ( key in res_all ) {
                if ( key == link || link == '#res_round_all' ) {
                    $(key).show();
                } else {
                    $(key).hide();
                }
            }
        });
    
        $('.next_round').prop('onclick',null).off('click').click(function(event) {
            event.preventDefault();
            WSR.send('wordfinder N');
        });
    }/*}}}*/
    
    function setup_scores() {/*{{{*/
        dst = $('#scores');
    
        dst.empty();
        dst.append('<div id="res_round_summarized_toplist"></div>');
        dst.append('<div id="res_round_toplist"></div>');
        dst.append('<div id="res_round_missed_words"></div>');
        dst.append('<div id="res_round_unique_words"></div>');
        dst.append('<div id="res_round_found_words"></div>');
        dst.append('<div id="res_round_all_words"></div>');
        dst.append('<div id="res_round_point_details"></div>');
        dst.append('<div id="res_round_word_toplist"></div>');
    }/*}}}*/
    
    function boggle_show_scores(scores) {/*{{{*/
    
        var head = scores['head'];
        var head2 = scores['head2'];
        var words_all = scores['words_all'];
        var words_not_found = scores['words_not_found'];
        var users_results = scores['users_results'];
        var users_results_all = scores['users_results_all'];
    
        var letters_all = 0;
        for ( key in words_all ) {
            letters_all += key.length;
        }
    
        boggle_clear_events();
        $("#area").remove();
    
        //
        // Summarized toplist
        //
    
        o = '';
    
        //
        // Next round info
        //
    
        var next_round_soon = scores['next_round_soon'];
        if ( next_round_soon ) {
            o += '<b style="font-size: 24px;"><br/>';
            o += T('The round finished.') + '<br/><br/>';
            o += T('After the announcement of the results, the new round starts immediately!') + '<br/><br/>';
            o += T('You can see the remaining time in the top right corner.') + '<br/><br/>';
            o += '</b>';
        }
    
        //
        // Match winner
        //
    
        if ( scores['head_matchwin'] ) {
            o += '<b style="font-size: 24px;">' + T(scores['head_matchwin']) + '</b><br/><br/>';
        }
    
        //
        // Round winner
        //
    
        if ( scores['head_roundwin'] ) {
            o += '<hr/><br/><b style="font-size: 24px;">' + T(scores['head_roundwin']) + '</b><br/><br/>';
        }
    
        //
        // All or Lastn results
        //
    
        var users_results_all_score_head = scores['users_results_all_score_head'];
        var users_results_all_score_name = scores['users_results_all_score_name'];
    
        var summ_head;
        if ( scores['users_results_all_score_head'] ) {
            summ_head = T(users_results_all_score_head) + ':';
        }
    
        o += '<hr/><br/><b style="font-size: 24px;">' + summ_head + '</b><br/><br/><table class="score toplist_Most_Bonuses_in_one_round">';
        o += '<tr><td class="toppos"><b></b></td><td style="width: 320px;"><b>' + T('Username') + '</b></td><td><b>' + T('Played rounds') + '</b></td><td class="topvalue"><b>' + T(users_results_all_score_name) + '</b></td></tr>';
        for ( var i = 0 ; i < users_results_all.length ; i++ ) {
            var username = users_results_all[i][0];
            var rounds_all = users_results_all[i][1];
            var points_all = users_results_all[i][2];
    
            var highlight = '';
            if ( username == server['username'] ) {
                highlight = 'class="highlight"';
            }
    
            o += '<tr ' + highlight + '><td>' + (i + 1) + '.</td><td>' + username + '</td><td>' + rounds_all + '</td><td>' + points_all + '</td></tr>';
        }
        o += '</table><br/>';
        $('#res_round_summarized_toplist').html(o);
    
        //
        // Round toplist
        //
    
        o = '<hr/><br/><b style="font-size: 20px;">' + T('Round toplist') + ':</b><br/><br/><table class="score toplist_Points">';
        o += '<tr><td class="toppos"><b></b></td><td style="width: 320px;"><b>' + T('Username') + '</b></td><td class="topvalue"><b>' + T('Performance') + '</b></td><td class="topvalue"><b>' + T('Points') + '</b></td></tr>';
        for ( var i = 0 ; i < users_results.length ; i++ ) {
            var username = users_results[i][0];
            var points_round = users_results[i][3];
            var performance = (parseInt(10 * points_round / (letters_all / 100)) / 10.0) || '-';
    
            var highlight = '';
            if ( username == server['username'] ) {
                highlight = 'class="highlight"';
            }
    
            o += '<tr ' + highlight + '><td>' + (i + 1) + '.</td><td>' + username + '</td><td>' + performance + ' %</td><td>' + points_round + '</td></tr>';
        }
        o += '</table><br/>';
        $('#res_round_toplist').html(o);
    
        //
        // Missed words
        //
    
        o = '<hr/>' + get_area_html() + '<br/>';
        o += '<b style="font-size: 20px;">' + T('Words you missed') + ':</b><br/><br/>';
    
        words_you_missed = words_user_missed(words_all, users_results, server['username']);
        o += show_words(words_you_missed, 1, 1, undefined);
        o += '<br/><br/><hr/><br/>';
    
        o += '<b style="font-size: 13px;">' + T('Have you found a word that should not be in the dictionary?<br/>Click on the word and on the left the icon below the menu bar!') + '<img src="pics/wf_dict_out.png"/></b><br/><br/>';
        o += '<b style="font-size: 20px;">' + T('Words everyone missed') + ':</b><br/><br/>';
        o += show_words(words_all, 1, 1, 0);
        o += '<br/><br/>';
        $('#res_round_missed_words').html(o);
        boggle_redraw_map();
    
        //
        // Unique words
        //
    
        o = '<hr/><br/>';
        o += '<b style="font-size: 20px;">' + T('Unique words you found') + ':</b><br/><br/>';
    
        for ( var i = 0 ; i < users_results.length ; i++ ) {
            var username_this = users_results[i][0];
            if ( username_this != server['username'] ) {
                continue;
            }
            var unquie_words = users_results[i][2];
    
            o += show_words(unquie_words, 0, 0, undefined);
            break;
        }
        o += '<br/><br/><hr/><br/>';
    
        o += '<b style="font-size: 20px;">' + T('Unique words') + ':</b><br/><br/>';
        o += '<table class="score toplist_Killed"><tr><td class="toppos"><b></b></td><td style="width: 100px;"><b>' + T('Username') + '</b></td><td style="width: 100%;"><b>' + T('Unique words') + '</b></td></tr>';
        for ( var i = 0 ; i < users_results.length ; i++ ) {
            var username = users_results[i][0];
            var unquie_words = users_results[i][2];
    
            var highlight = '';
            if ( username == server['username'] ) {
                highlight = 'class="highlight"';
            }
    
            if ( unquie_words ) {
                o += '<tr ' + highlight + '><td>' + (i + 1) + '.</td><td>' + username + '</td><td>' + show_words(unquie_words, 0, 0, undefined) + '</td></tr>';
            }
        }
        o += '</table>';
        $('#res_round_unique_words').html(o);
    
        //
        // Found words
        //
    
        o = '<hr/><br/>';
        o += '<b style="font-size: 20px;">' + T('Words you found') + ':</b><br/><br/>';
    
        for ( var i = 0 ; i < users_results.length ; i++ ) {
            var username_this = users_results[i][0];
            if ( username_this != server['username'] ) {
                continue;
            }
            var words = users_results[i][1];
    
            o += show_words(words, 0, 0, undefined);
            break;
        }
        o += '<br/><br/><hr/><br/>';
    
        o += '<b style="font-size: 20px;">' + T('Found words') + ':</b><br/><br/>';
        o += '<table class="score toplist_Most_Bonuses_in_one_round"><tr><td class="toppos"><b></b></td><td style="width: 100px;"><b>' + T('Username') + '</b></td><td style="width: 100%;"><b>' + T('Found words') + '</b></td></tr>';
        for ( var i = 0 ; i < users_results.length ; i++ ) {
            var username = users_results[i][0];
            var words = users_results[i][1];
    
            var highlight = '';
            if ( username == server['username'] ) {
                highlight = 'class="highlight"';
            }
    
            o += '<tr ' + highlight + '><td>' + (i + 1) + '.</td><td>' + username + '</td><td>' + show_words(words, 0, 0, undefined) + '</td></tr>';
        }
        o += '</table><br/>';
        $('#res_round_found_words').html(o);
    
        //
        // All words
        //
    
        o = '<hr/><br/><b style="font-size: 20px;">' + T('All words') + ':</b><br/><br/>';
        o += show_words(words_all, 1, 1, undefined);
        o += '<br/><br/>';
        $('#res_round_all_words').html(o);
    
        //
        // Point details
        //
    
        o = '<hr/><br/><b style="font-size: 20px;">' + T('Point details') + ':</b><br/><br/>';
        o += '<table class="score toplist_Most_Bonuses_in_one_round"><tr><td class="toppos"><b></b></td><td style="width: 100px;"><b>' + T('Username') + '</b></td><td style="width: 100%;"><b>' + T('Point details') + '</b></td></tr>';
        for ( var i = 0 ; i < users_results.length ; i++ ) {
            var username_this = users_results[i][0];
            if ( username_this != server['username'] ) {
                continue;
            }
            var points_round_det = users_results[i][4];
    
            o += '<tr><td>' + (i + 1) + '.</td><td>' + username_this + '</td><td>' + show_points_round_det(points_round_det) + '</td></tr>';
        }
        o += '</table><br/>';
        $('#res_round_point_details').html(o);
    
        //
        // Word toplist
        //
    
        o = '<hr/><br/><b style="font-size: 20px;">' + T('Word toplist') + ':</b><br/><br/>';
        o += '<table class="score toplist_Killed"><tr><td class="toppos"><b></b></td><td style="width: 100px;"><b>' + T('Word') + '</b></td><td style="width: 100%;"><b>' + T('Number of hits') + '</b></td></tr>';
        var word_toplist = words_all_to_words_toplist(words_all);
        for ( var i = 0 ; i < word_toplist.length ; i++ ) {
            var word = word_toplist[i][0];
            var hits = word_toplist[i][1];
            o += '<tr><td>' + (i + 1) + '.</td><td>' + word + '</td><td>' + hits + '</td></tr>';
        }
        o += '</table>';
        $('#res_round_word_toplist').html(o);
    
        $('.sol').prop('onclick',null).off('click').click(function(event) {
            event.preventDefault();
            WSR.send('wordfinder S ' + $(this).text());
        });
    }/*}}}*/
    
    function show_spect_info(dst, data) {/*{{{*/
    
        dst.empty();
    
        dst.append('<br/><b style="font-size: 24px;">' + T('Spectator') + '</b><br/><br/>');
    
        o = '<div id="res_round_toplist"><hr/><br/><b style="font-size: 20px;">' + T('Round toplist') + ':</b><br/><br/><table class="score toplist_Points">';
        o += '<tr><td class="toppos"><b></b></td><td style="width: 320px;"><b>' + T('Username') + '</b></td><td class="topvalue"><b>' + T('Points') + '</b></td></tr>';
        for ( var i = 0 ; i < data.length ; i++ ) {
            var username = data[i]['name'];
            var points = data[i]['points'];
    
            o += '<tr><td>' + (i + 1) + '.</td><td>' + username + '</td><td>' + points + '</td></tr>';
        }
        o += '</table><br/></div>';
        dst.append(o);
    }/*}}}*/
    
    function boggle_clear_events() {/*{{{*/
    
        $('body').on('contextmenu', '#area', function(e) {
            return false;
        });
    
        $('#area').unbind('mousedown');
        $('#area').unbind('mousemove');
        $('#area').unbind('mouseup');
        $('#area').unbind('touchstart');
        $('#area').unbind('touchmove');
        $('#area').unbind('touchend');
    }/*}}}*/
    
    function boggle_setup_events() {/*{{{*/
    
        boggle_clear_events();
    
        in_room = 1;
    
        $("#area").mousedown(function(e){
            var parentOffset = $(this).offset();
            var relX = e.pageX - parentOffset.left;
            var relY = e.pageY - parentOffset.top;
    
            sj_event(relX, relY, -1, 'm');
        });
    
        $("#area").mouseup(function(e){
            var parentOffset = $(this).offset();
            var relX = e.pageX - parentOffset.left;
            var relY = e.pageY - parentOffset.top;
    
            sj_event(relX, relY, 1, 'm');
        });
    
        $("#area").mousemove(function(e){
            var parentOffset = $(this).offset();
            var relX = e.pageX - parentOffset.left;
            var relY = e.pageY - parentOffset.top;
    
            sj_event(relX, relY, 0, 'm');
        });
    
        $('#area').on('touchstart',function(e,data) {
            var parentOffset = $(this).offset();
            var xPos = e.originalEvent.touches[0].pageX - parentOffset.left;
            var yPos = e.originalEvent.touches[0].pageY - parentOffset.top;
    
            sj_event(xPos, yPos, -1, 't');
            e.preventDefault();
        });
    
        $('#area').on('touchend',function(e,data) {
            var parentOffset = $(this).offset();
    
            sj_event(null, null, 1, 't');
            e.preventDefault();
        });
    
        $('#area').on('touchmove',function(e,data) {
            var parentOffset = $(this).offset();
            var xPos = e.originalEvent.touches[0].pageX - parentOffset.left;
            var yPos = e.originalEvent.touches[0].pageY - parentOffset.top;
    
            sj_event(xPos, yPos, 0, 't');
            e.preventDefault();
        });
    
        $(document).on("touchend", function(ev) {
            sj_event(null, null, 1, 't')
        });
    
        $(document).on("mouseup", function(ev) {
            sj_event(null, null, 1, 'm')
        });
    
        boggle_redraw_map();
    }/*}}}*/
    
    function boggle_redraw_map() {/*{{{*/
    
        boggle_clear_area(0, 0, area_w, area_h);
    
        draw_letters(1);
    }/*}}}*/
    
    function boggle_clear_area(x1, y1, x2, y2, e) {/*{{{*/
        var c_x = x1;
        var c_y = y1;
        var s_x = x2 - x1;
        var s_y = y2 - y1;
    
        var c = hexc($('body').css('background-color'));
    
        $("canvas").drawRect({
            fillStyle: c,
            x: c_x,
            y: c_y,
            width: s_x,
            height: s_y,
            fromCenter: false,
        });
    }/*}}}*/
    
    function boggle_init_join() {/*{{{*/
    
        init_join_finished(0);
    }/*}}}*/
    
    function boggle_show_time_left(time_left, time_all, time_left_sec) {/*{{{*/
    
        if ( time_left ) {
            $("#panel_time_left").html(time_left);
            $("#panel_time_left").append('<hr/>');
    
            var percent = time_left_sec / (time_all / 100.0);
            var percent_0_1 = percent / 100.0;
    
            var hue = ((percent_0_1) * 120).toString(10);
            var color = ["hsl(",hue,",100%,40%)"].join("");
    
            $('#time_left').css('width', percent + '%');
            $('#time_left').css('background-color', color);
        } else {
            $("#panel_time_left").html('-:--');
            $("#panel_time_left").append('<hr/>');
            $('#time_left').css('width', '0%');
        }
    }/*}}}*/
    
    function boggle_show_words_found(words_found) {/*{{{*/
    
        $("#panel_found").html(T('Found words') + ':<hr/>');
        $("#panel_found").append(show_words(words_found, 0, 0, undefined));
    }/*}}}*/
    
    function boggle_setup_show_hide(is_ingame) {/*{{{*/
    
        if ( is_ingame == undefined ) {
            if ( matrix ) {
                is_ingame = 1;
            } else {
                is_ingame = 0;
            }
        }
    
        if ( is_ingame && !is_spect ) {
            $("#area").remove();
            $('#game_m').append(get_area_html());
            boggle_redraw_map();
    
            $('#scores').hide();
            $('#panel_results').hide();
    
            $('#panel_found').show();
            $('#selected_word').show();
    
            area_resize($("#area"), area_size, area_size);
            $("#area").show();
            word = [];
            is_word_selecting = 0;
        } else {
            $('#scores').show();
            $('#panel_results').show();
            $('#res_round_all').click();
    
            $('#panel_found').hide();
            $('#selected_word').hide();
    
            area_resize($("#area"), 240, 240);
        }
    
        boggle_show_words_found();
        boggle_setup_events();
    
        $("#selected_word").html('&nbsp;');
        $('#res_round_next_val').html('');
    
        table_rotate = 0;
    }/*}}}*/
    
    function onMessage_boggle(data, elapsed) {/*{{{*/
        var myself = data['__SELF'];
    
        if ( is_paused ) {
            return;
        }
    
        if ( data['fx'] == 'ENTER' ) {
            onmodule_enter(data['d']);
    
            next_round_want = 0;
            area_size = 480;
            is_spect = data['is_spect'];
            if ( is_spect ) {
                area_resize($("#area"), 240, 240);
            }
    
            $('#game').empty();
            $('#game').append('<table align="center" class="cont" style="margin-top: 5px;"><tr><td id="game_l" style="vertical-align: top;"></td><td id="game_m"></td><td id="game_r" style="vertical-align: top;"></td></tr></table>');
    
            $('#game_l').append('<div id="panel_l" class="panel_lr" style="user-select: none;"><table style="width: 100%; height: 100%;"><tr style="vertical-align: top;"><td><div id="panel_found"></div><div id="panel_results"></div></td></tr><tr style="vertical-align: bottom;"><td><div id="vote"></div><br/><hr/><br/><div id="panel_next_round"></div><button id="table_resize_click" style="padding: 6px; margin: 0 8px 0 8px;"><img src="pics/wordfinder_resize.png" id="table_resize"/></button><button id="table_rotate_click" style="padding: 6px; margin: 0 8px 0 8px;"><img src="pics/rotate.png" id="table_rotate"/></button><br/><br/></td></tr></table></div>');
            $('#game_m').append('<div id="spaceholder" style="height: 1px; width: 482px; user-select: none;"></div>');
            $('#game_m').append('<div id="time_left" style="height: 4px; width: 100%; user-select: none;"></div>');
            $('#game_m').append('<div id="selected_word" style="font-size: 36px; user-select: none;"></div>');
            $('#game_m').append('<canvas id="area" width="0" height="0"></canvas>');
            $('#game_m').append('<div id="scores" style="width: 479px;"></div>');
            $('#game_r').append('<div id="panel_r" class="panel_lr" style="user-select: none;"><table style="width: 100%; height: 100%;"><tr style="vertical-align: top;"><td><div id="panel_time_left" style="font-size: 42px"></div><div id="panel_stat"></div><div id="panel_added_points"></div></div></td></tr><tr style="vertical-align: bottom;"><td><div id="rbottom_stat" style="font-size: 18px;"></td></tr></table></div>');
            $('.chatplayers').hide();
            glob = data['d']['pub'];
            dict = data['d']['dict'];
    
            boggle_show_time_left();
    
            $('#table_rotate_click').click(function() {
                if ( matrix ) {
                    table_rotate = (table_rotate + 1) % 4;
                    boggle_redraw_map();
                }
            });
            $('#table_resize_click').click(function() {
                if ( matrix ) {
                    area_size_set();
                }
            });
    
            $('#panel_next_round').append('<a href="#res_round_next" class="next_round"><button id="lets_go_next_round"></button></a><br/><br/>');
            set_lets_go_next_round_values();
    
            w = parseInt(data['d']['w']);
            h = parseInt(data['d']['h']);
            matrix = data['d']['matrix'];
            var color_real = glob['colormapping'][settings['bgc']];
            colors = glob['colors'][color_real];
    
            $('#tooltip').hide();
            server['room'] = {};
            server['room']['game_type'] = data['d']['game_type'];
            server['room']['win_type'] = data['d']['win_type'];
            setup_help();
            roomid = data['roomid'];
            room_enter_done(roomid, 0);
            setup_chat_on_enter();
            setup_panel_results();
            setup_scores();
            boggle_setup_show_hide();
    
            var scores = data['d']['scores'];
            if ( scores ) {
                boggle_setup_show_hide(0);
                boggle_show_scores(scores);
            }
    
        } else if ( !in_room ) {
            return;
        } else if ( data['fx'] == 'PING' ) {
            message_room_ping(data, 'wordfinder');
    
        } else if ( data['fx'] == 'WORD' ) {
            clearTimeout(is_word_sending_timeout);
            var msg_class = '';
            var spec = '';
            if ( data['r'] == 'OK' ) {
                msg_class = 'ok';
                spec = 'ok';
            } else if ( data['r'] == 'AGAIN' ) {
                msg_class = 'warn';
                spec = 'again';
            } else if ( data['r'] == 'LATE' ) {
                msg_class = 'info';
                spec = 'late';
            } else if ( data['r'] == 'FAIL' ) {
                msg_class = 'fail';
                spec = 'fail';
                var failword = data['w'];
                if ( failword ) {
                    $('#vote').dequeue().stop().fadeIn(100).show();
                    $('#vote').html(failword + '<br/>');
                    $('#vote').append('<img src="pics/wf_dict_in.png" id="send_vote" title="' + T('Suggest to add to dictionary: _P1_;' + failword)+ '"></img>');
                    $('#vote').stop(true, true).show();
                    $('#send_vote').click(function() {
                        WS.send('auth GAME wordfinder VOTE Y ' + dict + ' ' + failword + ' -');
                        $('#vote').empty();
                        $('#vote').html(T('Your request was recorded!')).delay(1000).fadeOut(1200)
                    });
                }
            } else {
                msg_class = 'fail';
                spec = 'fail';
            }
    
            addmsg_room('<p class="' + msg_class + '"><span class="time">' + data['t'] + '</span> *' + data['u'] + '* ' + T(data['d']) + '</p>');
    
            var letters_to_redraw = [];
            for ( var i = 0 ; i < word.length ; i++ ) {
                letters_to_redraw.push([word[i][0], word[i][1], 0, 0]); // lets say clear
            }
            word = [];
    
            redraw_letters(letters_to_redraw, spec);
            setTimeout(function () {
                redraw_letters(letters_to_redraw, '');
                is_word_sending = 0;
                var word_text = '&nbsp;';
                $("#selected_word").html(word_text);
            }, 200);
    
        } else if ( data['fx'] == 'SOLUTION' ) {
            redraw_letters_by_coords(data['c']);
            var failword = data['w'];
    
            $('#vote').dequeue().stop().fadeIn(100).show();
            $('#vote').html(failword + '<br/>');
            $('#vote').append('<img src="pics/wf_dict_out.png" id="send_vote" title="' + T('Suggest to remove from dictionary: _P1_;' + failword)+ '"></img>');
            $('#send_vote').click(function() {
                WS.send('auth GAME wordfinder VOTE N ' + dict + ' ' + failword + ' -');
                $('#vote').empty();
                $('#vote').html(T('Your request was recorded!')).delay(1000).fadeOut(1200)
            });
    
        } else if ( data['fx'] == 'STATUS' ) {
    
            boggle_show_time_left(data['d']['time_left'], data['d']['time_all'], data['d']['time_left_sec']);
            var words_found = data['d']['words_found'];
            if ( words_found ) {
                boggle_show_words_found(words_found);
            }
    
            var words_stat = data['d']['words_stat'];
            if ( words_stat ) {
                $("#panel_stat").html(T('Found / All') + ':');
                for ( key in data['d']['words_stat'] ) {
                    var all = data['d']['words_stat'][key]['all'];
                    var found = data['d']['words_stat'][key]['found'];
                    if ( !found ) {
                        found = 0;
                    }
                    $("#panel_stat").append('<center><hr width="70%"/></center>');
                    $("#panel_stat").append(T('_P1_ letters: _P2_;' + key + ';' + found + ' / ' + all));
                }
            }
    
            var position = data['d']['position'];
            if ( position ) {
                var dst = $('#rbottom_stat');
    
                dst.html('<hr/><br/>');
                dst.append(T('Position') + ':<br/>');
                dst.append(position + '. / ' + data['d']['pl_num']);
    
                dst.append('<br/><br/>');
                dst.append(T('Points') + ':<br/>');
                dst.append(data['d']['sc_curr_points'] || '0');
            }
    
            var letters_stat = data['d']['letters_stat'];
            if ( letters_stat ) {
                var dst = $('#rbottom_stat');
    
                var letters_all = letters_stat['all'];
                var letters_found = letters_stat['found'];
                var letters_pc = (parseInt(10 * letters_found / (letters_all / 100)) / 10.0) || '0';
    
                dst.append('<br/><br/>');
                dst.append(T('Performance') + ':<br/>');
                dst.append(letters_pc + ' %' + '<br/><br/>');
            }
    
            var info = data['d']['info'];
            if ( info ) {
                if ( area_w != area_size ) {
                    area_resize($("#area"), area_size, area_size);
                }
                for ( var i = 0 ; i < info.length ; i++ ) {
                    var type = info[i][0];
                    var x = info[i][1];
                    var y = info[i][2];
                    var xs = info[i][3];
                    var ys = info[i][4];
                    var e = info[i][5];
                    var t = info[i][6];
                    var ec = info[i][7];
                    if ( type == 1 ) {
                        if ( e == '' || e == myself ) {
                            draw_info(x, y, ys, T(t), xs, ec);
                        }
                    } else if ( type == 2 ) {
                        boggle_clear_area(x, y, xs, ys, e);
                    }
                }
            }
    
            var matrix_this = data['d']['matrix'];
            if ( matrix_this ) {
                area_resize($("#area"), area_size, area_size);
                boggle_setup_events();
                matrix = matrix_this;
                draw_letters(1);
    
                boggle_setup_show_hide(1);
            }
    
            var panel = data['d']['panel'];
            if ( panel && in_room ) {
                var dstname = 'chatplayersroom';
                $('#' + dstname).empty();
                game_roomplayer_add(dstname, panel['users'], colors);
                mod_room_players(data['d']['pl_num'], data['d']['pl_spect_num']);
            }
    
            var panel_add = data['d']['panel_add'];
            if ( panel_add && in_room ) {
                var dstname = 'chatplayersroom';
                game_roomplayer_add(dstname, panel_add['users'], colors);
                mod_room_players(data['d']['pl_num'], data['d']['pl_spect_num']);
                console.log('panel_add', data['d']);
                next_round_all = data['d']['pl_num'];
                set_lets_go_next_round_values();
            }
    
            var panel_del = data['d']['panel_del'];
            if ( panel_del && in_room ) {
                var dstname = 'chatplayersroom';
                game_roomplayer_del(dstname, panel_del['users']);
                mod_room_players(data['d']['pl_num'], data['d']['pl_spect_num']);
                console.log('panel_del', data['d']);
                next_round_all = data['d']['pl_num'];
                set_lets_go_next_round_values();
            }
    
            var scores = data['d']['scores'];
            if ( scores ) {
                boggle_setup_show_hide(0);
                boggle_show_scores(scores);
            }
    
            var head_info = data['d']['head_info'];
            if ( head_info ) {
                if ( in_room ) {
                    $("#status_head_info").html(T(head_info));
                }
            }
    
        } else if ( data['fx'] == 'SPECT' ) {
            show_spect_info($('#scores'), data['d']);
    
        } else if ( data['fx'] == 'N' ) {
            next_round_all = data['all'];
            next_round_want = data['want'];
            console.log('N ', next_round_all, next_round_want);
            set_lets_go_next_round_values();
        }
    }/*}}}*/
    
    })();