window._bd_share_main.F.module('view/like_view', function (e, t, n) { e('like.css'); var r = e('base/tangram').T, i = e('base/class').Class, s = e('conf/const'), o = e('view/view_base'), u = e('component/animate'), a = {btn: 'bdlikebutton', innerBtn: 'bdlikebutton-inner', add: 'bdlikebutton-add', text: 'bdlikebutton-text', count: 'bdlikebutton-count'}; t.View = i.create(function (e) { function i () { var n = e.tag || ''; return r('.' + a.btn).each(function (e, i) { (!n || r(i).attr(s.CONFIG_TAG_ATTR) == n) && t._entities.push(i) }), t._entities } function o () { var t = e, r = n[t.type]; return t.likeText = t.likeText ? t.likeText.substr(0, r[0]) : r[1], t.likedText = t.likedText ? t.likedText.substr(0, r[0]) : r[2], t } function f (e) { return r(e).parent().get(0) } var t = this, n = {small: [4, '\u9876', '\u5df2\u9876\u8fc7'], medium: [6, '\u9876', '\u60a8\u5df2\u9876\u8fc7'], large: [10, '\u8be5\u5185\u5bb9\u5bf9\u6211\u6709\u5e2e\u52a9', '\u60a8\u5df2\u9876\u8fc7\uff0c\u8c22\u8c22\uff01']}; t.render = function (e) { var n = i(), s = a.btn, u = o(); t._actBtnSet.className = a.innerBtn, t._actBtnSet.tagName = 'div', t._actBtnSet.maxDomDepth = 1, r(n).each(function (e, n) { var i = u.type, o = []; o.push('<div class="', a.innerBtn, '" ', t._actBtnSet.cmdAttr, '="like">'), o.push('<span class="', a.add, '">+1</span>'), o.push('<div class="', a.count, '">\u52a0\u8f7d\u4e2d</div>'), i != 'small' && o.push('<div class="', a.text, '">', u.likeText, '</div>'), o.push('</div>'), r(n).html(o.join('')).addClass(s + '-' + u.color).addClass(s + '-' + u.type).addClass(s + '-' + u.type + '-' + u.color) }) }, t._init = function () { var n = e, i = n.type; r(t._entities).each(function (e, t) { var s = r('.' + a.innerBtn, t); s.mouseover(function (e) { e = r.event(e || window.event); var o = e.relatedTarget; s.contains(o) || (i == 'small' && r('.' + a.count, t).html(n.likeText), r(t).addClass(a.btn + '-' + n.type + '-' + n.color + '-hover')) }).mouseout(function (e) { e = r.event(e || window.event); var o = e.relatedTarget; s.contains(o) || (i == 'small' ? r('.' + a.count, t).html(n.count) : r('.' + a.text, t).html(n.likeText), r(t).removeClass(a.btn + '-' + n.type + '-' + n.color + '-hover')) }) }) }, t.showDoneState = function (t) { var n = e, i = f(t), s = a.text; n.type == 'small' && (s = a.count), r('.' + s, i).html(n.likedText), r(i).removeClass(i, a.btn + '-' + n.type + '-' + n.color + '-hover') }, t.addOne = function (n, i) { var s = e, o = f(n), l = r('.' + a.add, o); l.show(), u.animate(l.get(0), {top: '-25px', opacity: '0'}, 300, function () { l.hide(), l.css({top: '0px', opacity: 99}) }), t.setNumber(i), r(o).removeClass(a.btn + '-' + s.type + '-' + s.color + '-hover') }, t.setNumber = function (e) { r.type(e) == 'number' && r(t._entities).each(function (t, n) { r('.' + a.count, n).html(e) }) } }, o.ViewBase) })
