var page = $(this).attr('data-page');
if (page == undefined || page <= 0 || page == '') {
    XQBL.Bubble.show('操作失败！');
    return false;
}
$.post('/Index/get_hot', { 'page': page },
    function(data) {
        var str = '';
        if (data.success == 1) {
            // console.log(data.data.length);
            if (data.data.length <= 0) { XQBL.Bubble.show('已经到底了...'); return false; } else {
                $.each(data.data, function(i, n) {
                    str = '<li data-game="' +
                        n.live_game +
                        '"><a href="/' +
                        n.live_member_info.member_id +
                        '.html"><h2 data-address="' +
                        n.live_member_info.member_location +
                        '">' +
                        n.live_member_info.basic_info.nickname +
                        '</h2><img src="' +
                        n.live_member_info.basic_info.cover +
                        '?imageView2/1/w/150/h/174" class="pic" alt="星球部落' +
                        n.live_member_info.basic_info.nickname +
                        '"><img src="' +
                        n.live_member_info.basic_info.cover +
                        '?imageView2/1/w/80/h/80" alt="星球部落:' +
                        n.live_member_info.basic_info.nickname +
                        '" class="pic s"></a></li>';
                    $('.main > ul ').find('li:last').after(str);
                });
                page++;
                $('#jRecommend').attr('data-page', page);
            }
        }
    }, 'json');