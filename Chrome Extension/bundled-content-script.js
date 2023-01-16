function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - 0;
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const av = [
        'top',
        'menu-container',
        'getElementById',
        'style',
        'likes',
        'colorTheme'
    ];
    a = function () {
        return av;
    };
    return a();
}
((() => {
    'use strict';
    var c = {};
    ;
    function d(ad) {
        return e(t['numberDisplayFormat'])['format'](ad);
    }
    function e(ad) {
        let ae;
        if (document['documentElement']['lang'])
            ae = document['documentElement']['lang'];
        else {
            if (navigator['language'])
                ae = navigator['language'];
            else
                try {
                    ae = new URL(Array['from'](document['querySelectorAll']("head > link[rel='search']"))?.['find'](ai => ai?.['getAttribute']('href')?.['includes']('?locale='))?.['getAttribute']('href'))?.['searchParams']?.['get']('locale');
                } catch {
                    k('Cannot find browser locale. Use en as default for number formatting.'), ae = 'en';
                }
        }
        let af, ag;
        switch (ad) {
        case 'compactLong':
            af = 'compact', ag = 'long';
            break;
        case 'standard':
            af = 'standard', ag = 'short';
            break;
        case 'compactShort':
        default:
            af = 'compact', ag = 'short';
        }
        const ah = Intl['NumberFormat'](ae, {
            'notation': af,
            'compactDisplay': ag
        });
        return ah;
    }
    function f(ad) {
        return chrome['i18n']['getMessage'](ad);
    }
    function g() {
        if (typeof chrome !== 'undefined' && typeof chrome['runtime'] !== 'undefined')
            return chrome;
        else
            return typeof browser !== 'undefined' && typeof browser['runtime'] !== 'undefined' ? browser : (console['log']('browser is not supported'), ![]);
    }
    function h(ad) {
        const ae = new URL(ad), af = ae['pathname'];
        if (af['startsWith']('/clip'))
            return document['querySelector']("meta[itemprop='videoId']")['content'];
        else {
            if (af['startsWith']('/shorts'))
                return af['slice'](8);
            return ae['searchParams']['get']('v');
        }
    }
    function i(ad) {
        const ae = ad['getBoundingClientRect'](), af = innerHeight || document['documentElement']['clientHeight'];
        function ap(c, d) {
            return b(c - -545, d);
        }
        const ag = innerWidth || document['documentElement']['clientWidth'];
        return !(ae[ap(-545, -546)] == 0 && ae['left'] == 0 && ae['bottom'] == 0 && ae['right'] == 0) && ae['top'] >= 0 && ae['left'] >= 0 && ae['bottom'] <= af && ae['right'] <= ag;
    }
    function j() {
        const ad = h(window['location']['href']);
        return document['querySelector']("ytd-watch-flexy[video-id='" + ad + "']") !== null || document['querySelector']('#player[loading="false"]:not([hidden])') !== null;
    }
    function k(ad, ae) {
        ad = '[return youtube dislike]: ' + ad, ae ? ae(ad) : console['log'](ad);
    }
    function l(ad) {
        let ae;
        switch (t['colorTheme']) {
        case 'accessible':
            ad === !![] ? ae = 'dodgerblue' : ae = 'gold';
            break;
        case 'neon':
            ad === !![] ? ae = 'aqua' : ae = 'magenta';
            break;
        case 'classic':
        default:
            ad === !![] ? ae = 'lime' : ae = 'red';
        }
        return ae;
    }
    ;
    function m(ad, ae) {
        function aq(c, d) {
            return b(d - 520, c);
        }
        function ar(c, d) {
            return b(d - 845, c);
        }
        function as(c, d) {
            return b(d - -699, c);
        }
        if (!A()) {
            let ah = document['getElementById']('ryd-bar-container');
            const ai = V()['clientWidth'] + X()['clientWidth'] + (y() ? 0 : 8), aj = ad + ae > 0 ? ad / (ad + ae) * 100 : 50;
            var af = parseFloat(aj['toFixed'](1));
            const ak = (100 - af)['toLocaleString']();
            af = af['toLocaleString']();
            if (t['showTooltipPercentage']) {
                var ag;
                switch (t['tooltipPercentageMode']) {
                case 'dash_dislike':
                    ag = ad['toLocaleString']() + '&nbsp;/&nbsp;' + ae['toLocaleString']() + '&nbsp;&nbsp;-&nbsp;&nbsp;' + ak + '%';
                    break;
                case 'both':
                    ag = af + '%&nbsp;/&nbsp;' + ak + '%';
                    break;
                case 'only_like':
                    ag = af + '%';
                    break;
                case 'only_dislike':
                    ag = ak + '%';
                    break;
                default:
                    ag = ad['toLocaleString']() + '&nbsp;/&nbsp;' + ae['toLocaleString']() + '&nbsp;&nbsp;-&nbsp;&nbsp;' + af + '%';
                }
            } else
                ag = ad['toLocaleString']() + '&nbsp;/&nbsp;' + ae['toLocaleString']();
            if (!w()) {
                if (!ah && !v()) {
                    let al = '', am = '';
                    t['coloredBar'] && (al = '; background-color: ' + l(!![]), am = '; background-color: ' + l(![]));
                    (document['getElementById'](x() ? 'top-level-buttons-computed' : aq(519, 521)) || document['querySelector']('ytm-slim-video-action-bar-renderer'))['insertAdjacentHTML']('beforeend', '\n              <div class="ryd-tooltip ryd-tooltip-' + (x() ? 'new' : 'old') + '-design" style="display:none;width: ' + ai + 'px">\n              <div class="ryd-tooltip-bar-container">\n                <div\n                    id="ryd-bar-container"\n                    style="width: 100%; height: 2px;' + am + '"\n                    >\n                    <div\n                      id="ryd-bar"\n                      style="width: ' + aj + '%; height: 100%' + al + '"\n                      ></div>\n                </div>\n              </div>\n              <tp-yt-paper-tooltip position="top" id="ryd-dislike-tooltip" class="style-scope ytd-sentiment-bar-renderer" role="tooltip" tabindex="-1">\n                <!--css-build:shady-->' + ag + '\n              </tp-yt-paper-tooltip>\n              </div>\n            ');
                    if (x()) {
                        let an = document[aq(522, 522)]('top-row');
                        an['style']['borderBottom'] = '1px solid var(--yt-spec-10-percent-layer)', an['style']['paddingBottom'] = '10px', document['getElementById']('actions-inner')['style']['width'] = 'revert', y() && (document['getElementById']('actions')[ar(849, 848)]['flexDirection'] = 'row-reverse');
                    }
                } else
                    document['getElementById']('ryd-bar-container')['style']['width'] = ai + 'px', document['getElementById']('ryd-bar')['style']['width'] = aj + '%', document['querySelector']('#ryd-dislike-tooltip > #tooltip')['innerHTML'] = ag, t['coloredBar'] && (document['getElementById']('ryd-bar-container')['style']['backgroundColor'] = l(![]), document['getElementById']('ryd-bar')['style']['backgroundColor'] = l(!![]));
            }
        } else {
            k('removing bar');
            let ao = document['getElementById']('ryd-bar-container');
            ao && ao['parentNode']['removeChild'](ao);
        }
    }
    async function n(ad, ae) {
        m(ad, ae), await new Promise(af => setTimeout(af, 1000)), m(ad, ae);
    }
    ;
    function o(ad, ae) {
        let af = document['createElement']('label'), ag = document['createElement']('input');
        ag['setAttribute']('class', 'rating'), ag['setAttribute']('max', '5'), ag['setAttribute']('readonly', ''), ag['setAttribute']('style', '--fill:rgb(255, 215, 0);--value:' + ad['toString']() + ';};background-color: transparent;'), ag['setAttribute']('type', 'range'), af['appendChild'](ag);
        let ah;
        ae ? ah = document['querySelector']('#app > div.page-container > ytm-watch > ytm-single-column-watch-next-results-renderer > ytm-slim-video-metadata-section-renderer > ytm-slim-video-action-bar-renderer > div > ytm-slim-metadata-toggle-button-renderer:nth-child(1)') : ah = document['querySelector']('#top-level-buttons-computed > ytd-toggle-button-renderer:nth-child(1)');
        ah['insertAdjacentElement']('afterend', af);
        try {
            let aj = document['querySelector']('#ryd-bar-container');
            aj['setAttribute']('style', 'width: 190%; height: 2px;');
        } catch (ak) {
            cLog('RateBar Not Present');
        }
        let ai = `<style>\n\n.rating {\n    --dir: right;\n    --fill: gold;\n    --fillbg: rgba(100, 100, 100, 0.15);\n    --star: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 17.25l-6.188 3.75 1.641-7.031-5.438-4.734 7.172-0.609 2.813-6.609 2.813 6.609 7.172 0.609-5.438 4.734 1.641 7.031z"/></svg>');\n    --stars: 5;\n    --starSize: 2.8rem;\n    --symbol: var(--star);\n    --value: 1;\n    --w: calc(var(--stars) * var(--starSize));\n    --x: calc(100% * (var(--value) / var(--stars)));\n    block-size: var(--starSize);\n    inline-size: var(--w);\n    position: relative;\n    touch-action: manipulation;\n    -webkit-appearance: none;\n}\n\n[dir="rtl"] .rating {\n    --dir: left;\n}\n\n.rating::-moz-range-track {\n    background: linear-gradient(to var(--dir), var(--fill) 0 var(--x), var(--fillbg) 0 var(--x));\n    block-size: 100%;\n    mask: repeat left center/var(--starSize) var(--symbol);\n}\n\n.rating::-webkit-slider-runnable-track {\n    background: linear-gradient(to var(--dir), var(--fill) 0 var(--x), var(--fillbg) 0 var(--x));\n    block-size: 100%;\n    mask: repeat left center/var(--starSize) var(--symbol);\n    -webkit-mask: repeat left center/var(--starSize) var(--symbol);\n}\n\n.rating::-moz-range-thumb {\n    height: var(--starSize);\n    opacity: 0;\n    width: var(--starSize);\n}\n\n.rating::-webkit-slider-thumb {\n    height: var(--starSize);\n    opacity: 0;\n    width: var(--starSize);\n    -webkit-appearance: none;\n}\n\n.rating,\n.rating-label {\n    display: block;\n    font-family: ui-sans-serif, system-ui, sans-serif;\n}\n\n.rating-label {\n    margin-block-end: 1rem;\n}\n\n</style>`;
        document['head']['insertAdjacentHTML']('beforeend', ai);
    }
    ;
    const p = 'https://returnyoutubedislikeapi.com', q = 'LIKED_STATE', r = 'DISLIKED_STATE', s = 'NEUTRAL_STATE';
    let t = {
            'disableVoteSubmission': ![],
            'coloredThumbs': ![],
            'coloredBar': ![],
            'colorTheme': 'classic',
            'numberDisplayFormat': 'compactShort',
            'showTooltipPercentage': ![],
            'tooltipPercentageMode': 'dash_like',
            'numberDisplayReformatLikes': ![]
        }, u = {
            'likes': 0,
            'dislikes': 0,
            'previousState': s
        };
    function v() {
        return location['hostname'] == 'm.youtube.com';
    }
    function w() {
        return location['pathname']['startsWith']('/shorts');
    }
    function x() {
        return document['getElementById']('comment-teaser') !== null;
    }
    function y() {
        return document['getElementById']('segmented-like-button') !== null;
    }
    let z = new Object();
    w() && z['exists'] !== !![] && (k('initializing mutation observer'), z['options'] = {
        'childList': ![],
        'attributes': !![],
        'subtree': ![]
    }, z['exists'] = !![], z['observer'] = new MutationObserver(function (ad, ae) {
        ad['forEach'](af => {
            if (af['type'] === 'attributes' && af['target']['nodeName'] === 'TP-YT-PAPER-BUTTON' && af['target']['id'] === 'button') {
                af['target']['getAttribute']('aria-pressed') === 'true' ? af['target']['style']['color'] = af['target']['parentElement']['parentElement']['id'] === 'like-button' ? l(!![]) : l(![]) : af['target']['style']['color'] = 'unset';
                return;
            }
            k('unexpected mutation observer event: ' + af['target'] + af['type']);
        });
    }));
    function A() {
        if (v())
            return /^\D*$/['test'](U()['children'][0]['querySelector']('.button-renderer-text')['innerText']);
        return /^\D*$/['test'](U()['children'][0]['innerText']);
    }
    function B() {
        if (v())
            return V()['querySelector']('button')['getAttribute']('aria-label') == 'true';
        return V()['classList']['contains']('style-default-active');
    }
    function C() {
        if (v())
            return X()['querySelector']('button')['getAttribute']('aria-label') == 'true';
        return X()['classList']['contains']('style-default-active');
    }
    function D(ad) {
        if (B())
            return {
                'current': q,
                'previous': ad['previousState']
            };
        if (C())
            return {
                'current': r,
                'previous': ad['previousState']
            };
        return {
            'current': s,
            'previous': ad['previousState']
        };
    }
    function E(ad) {
        k('SET likes ' + ad), W()['innerText'] = ad;
    }
    function F(ad) {
        k('SET dislikes ' + ad), Y()?.['removeAttribute']('is-empty'), Y()?.['removeAttribute']('is-empty');
        if (!A()) {
            if (v()) {
                U()['children'][1]['querySelector']('.button-renderer-text')['innerText'] = ad;
                return;
            }
            Y()['innerText'] = ad;
        } else {
            k('likes count disabled by creator');
            if (v()) {
                U()['children'][1]['querySelector']('.button-renderer-text')['innerText'] = f('TextLikesDisabled');
                return;
            }
            Y()['innerText'] = f('TextLikesDisabled');
        }
    }
    function G() {
        try {
            if (w())
                return ![];
            let ad = V()['querySelector']('yt-formatted-string#text') ?? V()['querySelector']('button'), ae = ad['getAttribute']('aria-label')['replace'](/\D/g, '');
            return ae['length'] > 0 ? parseInt(ae) : ![];
        } catch {
            return ![];
        }
    }
    function H(ad, ae) {
        const af = d(ad['dislikes']);
        F(af);
        if (t['numberDisplayReformatLikes'] === !![]) {
            const ag = G();
            ag !== ![] && E(d(ag));
        }
        function at(c, d) {
            return b(c - -73, d);
        }
        ae['dislikes'] = parseInt(ad['dislikes']), ae[at(-69, -66)] = G() || parseInt(ad['likes']), n(ae['likes'], ae['dislikes']);
        if (t['coloredThumbs'] === !![]) {
            if (w()) {
                let ah = V()['querySelector']('tp-yt-paper-button#button'), ai = X()['querySelector']('tp-yt-paper-button#button');
                ah['getAttribute']('aria-pressed') === 'true' && (ah['style']['color'] = l(!![])), ai['getAttribute']('aria-pressed') === 'true' && (ai['style']['color'] = l(![])), z['observer']['observe'](ah, z['options']), z['observer']['observe'](ai, z['options']);
            } else
                V()['style']['color'] = l(!![]), X()['style']['color'] = l(![]);
        }
    }
    function I(ad) {
        Y()['innerText'] = f('textTempUnavailable');
    }
    async function J(ad) {
        ad['previousState'] = C() ? r : B() ? q : s;
        let ae = ![], af = h(window['location']['href']), ag = G() || null, ah = await fetch(p + '/votes?videoId=' + af + '&likeCount=' + (ag || ''), {
                'method': 'GET',
                'headers': { 'Accept': 'application/json' }
            })['then'](ai => {
                if (!ai['ok'])
                    I(ai['error']);
                return ai;
            })['then'](ai => ai['json']())['catch'](I);
        k('response from api:'), k(JSON['stringify'](ah)), ah !== undefined && !('traceId' in ah) && !ae && H(ah, ad);
    }
    function K() {
        J(u);
    }
    function L() {
        M(), N(), O(), P(), Q(), R(), S(), T();
    }
    function M() {
        g()['storage']['sync']['get'](['disableVoteSubmission'], ad => {
            ad['disableVoteSubmission'] === undefined ? g()['storage']['sync']['set']({ 'disableVoteSubmission': ![] }) : t['disableVoteSubmission'] = ad['disableVoteSubmission'];
        });
    }
    function N() {
        g()['storage']['sync']['get'](['coloredThumbs'], ad => {
            ad['coloredThumbs'] === undefined ? g()['storage']['sync']['set']({ 'coloredThumbs': ![] }) : t['coloredThumbs'] = ad['coloredThumbs'];
        });
    }
    function O() {
        g()['storage']['sync']['get'](['coloredBar'], ad => {
            ad['coloredBar'] === undefined ? g()['storage']['sync']['set']({ 'coloredBar': ![] }) : t['coloredBar'] = ad['coloredBar'];
        });
    }
    function P() {
        g()['storage']['sync']['get'](['colorTheme'], ad => {
            function au(c, d) {
                return b(d - -822, c);
            }
            ad['colorTheme'] === undefined ? g()['storage']['sync']['set']({ 'colorTheme': ![] }) : t['colorTheme'] = ad[au(-818, -817)];
        });
    }
    function Q() {
        g()['storage']['sync']['get'](['numberDisplayFormat'], ad => {
            ad['numberDisplayFormat'] === undefined ? g()['storage']['sync']['set']({ 'numberDisplayFormat': 'compactShort' }) : t['numberDisplayFormat'] = ad['numberDisplayFormat'];
        });
    }
    function R() {
        g()['storage']['sync']['get'](['showTooltipPercentage'], ad => {
            ad['showTooltipPercentage'] === undefined ? g()['storage']['sync']['set']({ 'showTooltipPercentage': ![] }) : t['showTooltipPercentage'] = ad['showTooltipPercentage'];
        });
    }
    function S() {
        g()['storage']['sync']['get'](['tooltipPercentageMode'], ad => {
            ad['tooltipPercentageMode'] === undefined ? g()['storage']['sync']['set']({ 'tooltipPercentageMode': 'dash_like' }) : t['tooltipPercentageMode'] = ad['tooltipPercentageMode'];
        });
    }
    function T() {
        g()['storage']['sync']['get'](['numberDisplayReformatLikes'], ad => {
            ad['numberDisplayReformatLikes'] === undefined ? g()['storage']['sync']['set']({ 'numberDisplayReformatLikes': ![] }) : t['numberDisplayReformatLikes'] = ad['numberDisplayReformatLikes'];
        });
    }
    ;
    function U() {
        if (w()) {
            let ad = document['querySelectorAll'](v() ? 'ytm-like-button-renderer' : '#like-button > ytd-like-button-renderer');
            for (let ae of ad) {
                if (i(ae))
                    return ae;
            }
        }
        if (v())
            return document['querySelector']('.slim-video-action-bar-actions');
        return document['getElementById']('menu-container')?.['offsetParent'] === null ? document['querySelector']('ytd-menu-renderer.ytd-watch-metadata > div') : document['getElementById']('menu-container')?.['querySelector']('#top-level-buttons-computed');
    }
    function V() {
        return U()['children'][0]['tagName'] === 'YTD-SEGMENTED-LIKE-DISLIKE-BUTTON-RENDERER' ? U()['children'][0]['children'][0] : U()['children'][0];
    }
    function W() {
        return V()['querySelector']('#text') ?? V()['getElementsByTagName']('yt-formatted-string')[0] ?? V()['querySelector']("span[role='text']");
    }
    function X() {
        return U()['children'][0]['tagName'] === 'YTD-SEGMENTED-LIKE-DISLIKE-BUTTON-RENDERER' ? U()['children'][0]['children'][1] : U()['children'][1];
    }
    function Y() {
        let ad = X()['querySelector']('#text') ?? X()['getElementsByTagName']('yt-formatted-string')[0] ?? X()['querySelector']("span[role='text']");
        if (ad == null) {
            let ae = document['createElement']('span');
            ae['id'] = 'text', X()['querySelector']('button')['appendChild'](ae), X()['querySelector']('button')['style']['width'] = 'auto', ad = X()['querySelector']('#text');
        }
        return ad;
    }
    function Z() {
        return document['querySelector']("a[href^='https://accounts.google.com/ServiceLogin']") ? !![] : ![];
    }
    ;
    function a0(ad) {
        t['disableVoteSubmission'] !== !![] && g()['runtime']['sendMessage']({
            'message': 'send_vote',
            'vote': ad,
            'videoId': h(window['location']['href'])
        });
    }
    function a1() {
        if (Z() === ![]) {
            if (u['previousState'] === r) {
                a0(1);
                if (u['dislikes'] > 0)
                    u['dislikes']--;
                u['likes']++, n(u['likes'], u['dislikes']), F(d(u['dislikes'])), u['previousState'] = q;
            } else {
                if (u['previousState'] === s)
                    a0(1), u['likes']++, n(u['likes'], u['dislikes']), u['previousState'] = q;
                else {
                    if (u['previousState'] = q) {
                        a0(0);
                        if (u['likes'] > 0)
                            u['likes']--;
                        n(u['likes'], u['dislikes']), u['previousState'] = s;
                    }
                }
            }
            if (t['numberDisplayReformatLikes'] === !![]) {
                const ad = G();
                ad !== ![] && E(d(ad));
            }
        }
    }
    function a2() {
        if (Z() == ![]) {
            if (u['previousState'] === s)
                a0(-1), u['dislikes']++, F(d(u['dislikes'])), n(u['likes'], u['dislikes']), u['previousState'] = r;
            else {
                if (u['previousState'] === r) {
                    a0(0);
                    if (u['dislikes'] > 0)
                        u['dislikes']--;
                    F(d(u['dislikes'])), n(u['likes'], u['dislikes']), u['previousState'] = s;
                } else {
                    if (u['previousState'] === q) {
                        a0(-1);
                        if (u['likes'] > 0)
                            u['likes']--;
                        u['dislikes']++, F(d(u['dislikes'])), n(u['likes'], u['dislikes']), u['previousState'] = r;
                        if (t['numberDisplayReformatLikes'] === !![]) {
                            const ad = G();
                            ad !== ![] && E(d(ad));
                        }
                    }
                }
            }
        }
    }
    function a3() {
        !window['returnDislikeButtonlistenersSet'] && (V()['addEventListener']('click', a1), X()['addEventListener']('click', a2), V()['addEventListener']('touchstart', a1), V()['addEventListener']('touchstart', a2), window['returnDislikeButtonlistenersSet'] = !![]);
    }
    function a4(ad, ae) {
        ad['disableVoteSubmission'] !== undefined && a5(ad['disableVoteSubmission']['newValue']), ad['coloredThumbs'] !== undefined && a6(ad['coloredThumbs']['newValue']), ad['coloredBar'] !== undefined && a7(ad['coloredBar']['newValue']), ad['colorTheme'] !== undefined && a8(ad['colorTheme']['newValue']), ad['numberDisplayFormat'] !== undefined && a9(ad['numberDisplayFormat']['newValue']), ad['numberDisplayReformatLikes'] !== undefined && aa(ad['numberDisplayReformatLikes']['newValue']);
    }
    function a5(ad) {
        t['disableVoteSubmission'] = ad;
    }
    function a6(ad) {
        t['coloredThumbs'] = ad;
    }
    function a7(ad) {
        t['coloredBar'] = ad;
    }
    function a8(ad) {
        if (!ad)
            ad = 'classic';
        t['colorTheme'] = ad;
    }
    function a9(ad) {
        t['numberDisplayFormat'] = ad;
    }
    function aa(ad) {
        t['numberDisplayReformatLikes'] = ad;
    }
    ;
    L();
    let ab = null;
    function ac(ad) {
        function ae() {
            (w() || U()?.['offsetParent'] && j()) && (a3(), K(), g()['storage']['onChanged']['addListener'](a4), clearInterval(ab), ab = null);
        }
        ab = setInterval(ae, 111);
    }
    ac(), document['addEventListener']('yt-navigate-finish', function (ad) {
        if (ab !== null)
            clearInterval(ab);
        window['returnDislikeButtonlistenersSet'] = ![], ac();
    });
})());