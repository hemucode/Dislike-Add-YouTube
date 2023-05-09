((() => {
    'use strict';
    var a = {};
    ;
    function b(ab) {
        return c(r['numberDisplayFormat'])['format'](ab);
    }
    function c(ab) {
        let ac;
        if (document['documentElement']['lang'])
            ac = document['documentElement']['lang'];
        else {
            if (navigator['language'])
                ac = navigator['language'];
            else
                try {
                    ac = new URL(Array['from'](document['querySelectorAll']('head > link[rel="search"]'))?.['find'](ag => ag?.['getAttribute']('href')?.['includes']('?locale='))?.['getAttribute']('href'))?.['searchParams']?.['get']('locale');
                } catch {
                    i('Cannot find browser locale. Use en as default for number formatting.'), ac = 'en';
                }
        }
        let ad, ae;
        switch (ab) {
        case 'compactLong':
            ad = 'compact', ae = 'long';
            break;
        case 'standard':
            ad = 'standard', ae = 'short';
            break;
        case 'compactShort':
        default:
            ad = 'compact', ae = 'short';
        }
        const af = Intl['NumberFormat'](ac, {
            'notation': ad,
            'compactDisplay': ae
        });
        return af;
    }
    function d(ab) {
        return chrome['i18n']['getMessage'](ab);
    }
    function e() {
        if (typeof chrome !== 'undefined' && typeof chrome['runtime'] !== 'undefined')
            return chrome;
        else
            return typeof browser !== 'undefined' && typeof browser['runtime'] !== 'undefined' ? browser : (console['log']('browser is not supported'), ![]);
    }
    function f(ab) {
        const ac = new URL(ab), ad = ac['pathname'];
        if (ad['startsWith']('/clip'))
            return document['querySelector']('meta[itemprop="videoId"]')['content'];
        else {
            if (ad['startsWith']('/shorts'))
                return ad['slice'](8);
            return ac['searchParams']['get']('v');
        }
    }
    function g(ab) {
        const ac = ab['getBoundingClientRect'](), ad = innerHeight || document['documentElement']['clientHeight'], ae = innerWidth || document['documentElement']['clientWidth'];
        return !(ac['top'] == 0 && ac['left'] == 0 && ac['bottom'] == 0 && ac['right'] == 0) && ac['top'] >= 0 && ac['left'] >= 0 && ac['bottom'] <= ad && ac['right'] <= ae;
    }
    function h() {
        const ab = f(window['location']['href']);
        return document['querySelector']('ytd-watch-flexy[video-id="' + ab + '"]') !== null || document['querySelector']('#player[loading="false"]:not([hidden])') !== null;
    }
    function i(ab, ac) {
        ab = '[Dislikes in YouTube™]: ' + ab, ac ? ac(ab) : console['log'](ab);
    }
    function j(ab) {
        let ac;
        switch (r['colorTheme']) {
        case 'accessible':
            ab === !![] ? ac = 'dodgerblue' : ac = 'gold';
            break;
        case 'neon':
            ab === !![] ? ac = 'aqua' : ac = 'magenta';
            break;
        case 'classic':
        default:
            ab === !![] ? ac = 'lime' : ac = 'red';
        }
        return ac;
    }
    ;
    function k(ab, ac) {
        if (!y()) {
            let af = document['getElementById']('ryd-bar-container');
            const ag = T()['clientWidth'] + V()['clientWidth'] + (w() ? 0 : 8), ah = ab + ac > 0 ? ab / (ab + ac) * 100 : 50;
            var ad = parseFloat(ah['toFixed'](1));
            const ai = (100 - ad)['toLocaleString']();
            ad = ad['toLocaleString']();
            if (r['showTooltipPercentage']) {
                var ae;
                switch (r['tooltipPercentageMode']) {
                case 'dash_dislike':
                    ae = ab['toLocaleString']() + '&nbsp;/&nbsp;' + ac['toLocaleString']() + '&nbsp;&nbsp;-&nbsp;&nbsp;' + ai + '%';
                    break;
                case 'both':
                    ae = ad + '%&nbsp;/&nbsp;' + ai + '%';
                    break;
                case 'only_like':
                    ae = ad + '%';
                    break;
                case 'only_dislike':
                    ae = ai + '%';
                    break;
                default:
                    ae = ab['toLocaleString']() + '&nbsp;/&nbsp;' + ac['toLocaleString']() + '&nbsp;&nbsp;-&nbsp;&nbsp;' + ad + '%';
                }
            } else
                ae = ab['toLocaleString']() + '&nbsp;/&nbsp;' + ac['toLocaleString']();
            if (!u()) {
                if (!af && !t()) {
                    let aj = '', ak = '';
                    r['coloredBar'] && (aj = '; background-color: ' + j(!![]), ak = '; background-color: ' + j(![]));
                    (document['getElementById'](v() ? 'top-level-buttons-computed' : 'menu-container') || document['querySelector']('ytm-slim-video-action-bar-renderer'))['insertAdjacentHTML']('beforeend', '\n              <div class="ryd-tooltip ryd-tooltip-' + (v() ? 'new' : 'old') + '-design" style="display:none;width: ' + ag + 'px">\n              <div class="ryd-tooltip-bar-container">\n                <div\n                    id="ryd-bar-container"\n                    style="width: 100%; height: 2px;' + ak + '"\n                    >\n                    <div\n                      id="ryd-bar"\n                      style="width: ' + ah + '%; height: 100%' + aj + '"\n                      ></div>\n                </div>\n              </div>\n              <tp-yt-paper-tooltip position="top" id="ryd-dislike-tooltip" class="style-scope ytd-sentiment-bar-renderer" role="tooltip" tabindex="-1">\n                <!--css-build:shady-->' + ae + '\n              </tp-yt-paper-tooltip>\n              </div>\n            ');
                    if (v()) {
                        let al = document['getElementById']('top-row');
                        al['style']['borderBottom'] = '1px solid var(--yt-spec-10-percent-layer)', al['style']['paddingBottom'] = '10px', document['getElementById']('actions-inner')['style']['width'] = 'revert', w() && (document['getElementById']('actions')['style']['flexDirection'] = 'row-reverse');
                    }
                } else
                    document['getElementById']('ryd-bar-container') && (document['getElementById']('ryd-bar-container')['style']['width'] = ag + 'px'), document['getElementById']('ryd-bar') && (document['getElementById']('ryd-bar')['style']['width'] = ah + '%'), document['querySelector']('#ryd-dislike-tooltip > #tooltip') && (document['querySelector']('#ryd-dislike-tooltip > #tooltip')['innerHTML'] = ae), r['coloredBar'] && (document['getElementById']('ryd-bar-container')['style']['backgroundColor'] = j(![]), document['getElementById']('ryd-bar')['style']['backgroundColor'] = j(!![]));
            }
        } else {
            i('removing bar');
            let am = document['getElementById']('ryd-bar-container');
            am && am['parentNode']['removeChild'](am);
        }
    }
    async function l(ab, ac) {
        k(ab, ac), await new Promise(ad => setTimeout(ad, 1000)), k(ab, ac);
    }
    ;
    function m(ab, ac) {
        let ad = document['createElement']('label'), ae = document['createElement']('input');
        ae['setAttribute']('class', 'rating'), ae['setAttribute']('max', '5'), ae['setAttribute']('readonly', ''), ae['setAttribute']('style', '--fill:rgb(255, 215, 0);--value:' + ab['toString']() + ';};background-color: transparent;'), ae['setAttribute']('type', 'range'), ad['appendChild'](ae);
        let af;
        ac ? af = document['querySelector']('#app > div.page-container > ytm-watch > ytm-single-column-watch-next-results-renderer > ytm-slim-video-metadata-section-renderer > ytm-slim-video-action-bar-renderer > div > ytm-slim-metadata-toggle-button-renderer:nth-child(1)') : af = document['querySelector']('#top-level-buttons-computed > ytd-toggle-button-renderer:nth-child(1)');
        af['insertAdjacentElement']('afterend', ad);
        try {
            let ah = document['querySelector']('#ryd-bar-container');
            ah['setAttribute']('style', 'width: 190%; height: 2px;');
        } catch (ai) {
            cLog('RateBar Not Present');
        }
        let ag = '<style>\n\n.rating {\n    --dir: right;\n    --fill: gold;\n    --fillbg: rgba(100, 100, 100, 0.15);\n    --star: url("data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 17.25l-6.188 3.75 1.641-7.031-5.438-4.734 7.172-0.609 2.813-6.609 2.813 6.609 7.172 0.609-5.438 4.734 1.641 7.031z"/></svg>");\n    --stars: 5;\n    --starSize: 2.8rem;\n    --symbol: var(--star);\n    --value: 1;\n    --w: calc(var(--stars) * var(--starSize));\n    --x: calc(100% * (var(--value) / var(--stars)));\n    block-size: var(--starSize);\n    inline-size: var(--w);\n    position: relative;\n    touch-action: manipulation;\n    -webkit-appearance: none;\n}\n\n[dir="rtl"] .rating {\n    --dir: left;\n}\n\n.rating::-moz-range-track {\n    background: linear-gradient(to var(--dir), var(--fill) 0 var(--x), var(--fillbg) 0 var(--x));\n    block-size: 100%;\n    mask: repeat left center/var(--starSize) var(--symbol);\n}\n\n.rating::-webkit-slider-runnable-track {\n    background: linear-gradient(to var(--dir), var(--fill) 0 var(--x), var(--fillbg) 0 var(--x));\n    block-size: 100%;\n    mask: repeat left center/var(--starSize) var(--symbol);\n    -webkit-mask: repeat left center/var(--starSize) var(--symbol);\n}\n\n.rating::-moz-range-thumb {\n    height: var(--starSize);\n    opacity: 0;\n    width: var(--starSize);\n}\n\n.rating::-webkit-slider-thumb {\n    height: var(--starSize);\n    opacity: 0;\n    width: var(--starSize);\n    -webkit-appearance: none;\n}\n\n.rating,\n.rating-label {\n    display: block;\n    font-family: ui-sans-serif, system-ui, sans-serif;\n}\n\n.rating-label {\n    margin-block-end: 1rem;\n}\n\n</style>';
        document['head']['insertAdjacentHTML']('beforeend', ag);
    }
    ;
    const n = 'https://returnyoutubedislikeapi.com', o = 'LIKED_STATE', p = 'DISLIKED_STATE', q = 'NEUTRAL_STATE';
    let r = {
            'disableVoteSubmission': ![],
            'coloredThumbs': ![],
            'coloredBar': ![],
            'colorTheme': 'classic',
            'numberDisplayFormat': 'compactShort',
            'showTooltipPercentage': ![],
            'tooltipPercentageMode': 'dash_like',
            'numberDisplayReformatLikes': ![]
        }, s = {
            'likes': 0,
            'dislikes': 0,
            'previousState': q
        };
    function t() {
        return location['hostname'] == 'm.youtube.com';
    }
    function u() {
        return location['pathname']['startsWith']('/shorts');
    }
    function v() {
        return document['getElementById']('comment-teaser') !== null;
    }
    function w() {
        return document['getElementById']('segmented-like-button') !== null;
    }
    let x = new Object();
    u() && x['exists'] !== !![] && (i('initializing mutation observer'), x['options'] = {
        'childList': ![],
        'attributes': !![],
        'subtree': ![]
    }, x['exists'] = !![], x['observer'] = new MutationObserver(function (ab, ac) {
        ab['forEach'](ad => {
            if (ad['type'] === 'attributes' && ad['target']['nodeName'] === 'TP-YT-PAPER-BUTTON' && ad['target']['id'] === 'button') {
                ad['target']['getAttribute']('aria-pressed') === 'true' ? ad['target']['style']['color'] = ad['target']['parentElement']['parentElement']['id'] === 'like-button' ? j(!![]) : j(![]) : ad['target']['style']['color'] = 'unset';
                return;
            }
            i('unexpected mutation observer event: ' + ad['target'] + ad['type']);
        });
    }));
    function y() {
        if (t())
            return /^\D*$/['test'](S()['querySelector']('.yt-core-attributed-string')['innerText']);
        return /^\D*$/['test'](S()['innerText']);
    }
    function z() {
        if (t())
            return T()['querySelector']('button')['getAttribute']('aria-label') == 'true';
        return T()['classList']['contains']('style-default-active');
    }
    function A() {
        if (t())
            return V()['querySelector']('button')['getAttribute']('aria-label') == 'true';
        return V()['classList']['contains']('style-default-active');
    }
    function B(ab) {
        if (z())
            return {
                'current': o,
                'previous': ab['previousState']
            };
        if (A())
            return {
                'current': p,
                'previous': ab['previousState']
            };
        return {
            'current': q,
            'previous': ab['previousState']
        };
    }
    function C(ab) {
        i('SET likes ' + ab), U()['innerText'] = ab;
    }
    function D(ab) {
        i('SET dislikes ' + ab), W()?.['removeAttribute']('is-empty'), W()?.['removeAttribute']('is-empty');
        if (!y()) {
            if (t()) {
                S()['querySelector']('#text')['innerText'] = ab;
                return;
            }
            W()['innerText'] = ab;
        } else {
            i('likes count disabled by creator');
            if (t()) {
                S()['querySelector']('#text')['innerText'] = d('TextLikesDisabled');
                return;
            }
            W()['innerText'] = d('TextLikesDisabled');
        }
    }
    function E() {
        try {
            if (u())
                return ![];
            let ab = T()['querySelector']('yt-formatted-string#text') ?? T()['querySelector']('button'), ac = ab['getAttribute']('aria-label')['replace'](/\D/g, '');
            return ac['length'] > 0 ? parseInt(ac) : ![];
        } catch {
            return ![];
        }
    }
    function F(ab, ac) {
        const ad = b(ab['dislikes']);
        D(ad);
        if (r['numberDisplayReformatLikes'] === !![]) {
            const ae = E();
            ae !== ![] && C(b(ae));
        }
        ac['dislikes'] = parseInt(ab['dislikes']), ac['likes'] = E() || parseInt(ab['likes']), l(ac['likes'], ac['dislikes']);
        if (r['coloredThumbs'] === !![]) {
            if (u()) {
                let af = T()['querySelector']('tp-yt-paper-button#button'), ag = V()['querySelector']('tp-yt-paper-button#button');
                af['getAttribute']('aria-pressed') === 'true' && (af['style']['color'] = j(!![])), ag['getAttribute']('aria-pressed') === 'true' && (ag['style']['color'] = j(![])), x['observer']['observe'](af, x['options']), x['observer']['observe'](ag, x['options']);
            } else
                T()['style']['color'] = j(!![]), V()['style']['color'] = j(![]);
        }
    }
    function G(ab) {
        W()['innerText'] = d('textTempUnavailable');
    }
    async function H(ab) {
        ab['previousState'] = A() ? p : z() ? o : q;
        let ac = ![], ad = f(window['location']['href']), ae = E() || null, af = await fetch(n + '/votes?videoId=' + ad + '&likeCount=' + (ae || ''), {
                'method': 'GET',
                'headers': { 'Accept': 'application/json' }
            })['then'](ag => {
                if (!ag['ok'])
                    G(ag['error']);
                return ag;
            })['then'](ag => ag['json']())['catch'](G);
        i('response from api:'), i(JSON['stringify'](af)), af !== undefined && !('traceId' in af) && !ac && F(af, ab);
    }
    function I() {
        H(s);
    }
    function J() {
        K(), L(), M(), N(), O(), P(), Q(), R();
    }
    function K() {
        e()['storage']['sync']['get'](['disableVoteSubmission'], ab => {
            ab['disableVoteSubmission'] === undefined ? e()['storage']['sync']['set']({ 'disableVoteSubmission': ![] }) : r['disableVoteSubmission'] = ab['disableVoteSubmission'];
        });
    }
    function L() {
        e()['storage']['sync']['get'](['coloredThumbs'], ab => {
            ab['coloredThumbs'] === undefined ? e()['storage']['sync']['set']({ 'coloredThumbs': ![] }) : r['coloredThumbs'] = ab['coloredThumbs'];
        });
    }
    function M() {
        e()['storage']['sync']['get'](['coloredBar'], ab => {
            ab['coloredBar'] === undefined ? e()['storage']['sync']['set']({ 'coloredBar': ![] }) : r['coloredBar'] = ab['coloredBar'];
        });
    }
    function N() {
        e()['storage']['sync']['get'](['colorTheme'], ab => {
            ab['colorTheme'] === undefined ? e()['storage']['sync']['set']({ 'colorTheme': ![] }) : r['colorTheme'] = ab['colorTheme'];
        });
    }
    function O() {
        e()['storage']['sync']['get'](['numberDisplayFormat'], ab => {
            ab['numberDisplayFormat'] === undefined ? e()['storage']['sync']['set']({ 'numberDisplayFormat': 'compactShort' }) : r['numberDisplayFormat'] = ab['numberDisplayFormat'];
        });
    }
    function P() {
        e()['storage']['sync']['get'](['showTooltipPercentage'], ab => {
            ab['showTooltipPercentage'] === undefined ? e()['storage']['sync']['set']({ 'showTooltipPercentage': ![] }) : r['showTooltipPercentage'] = ab['showTooltipPercentage'];
        });
    }
    function Q() {
        e()['storage']['sync']['get'](['tooltipPercentageMode'], ab => {
            ab['tooltipPercentageMode'] === undefined ? e()['storage']['sync']['set']({ 'tooltipPercentageMode': 'dash_like' }) : r['tooltipPercentageMode'] = ab['tooltipPercentageMode'];
        });
    }
    function R() {
        e()['storage']['sync']['get'](['numberDisplayReformatLikes'], ab => {
            ab['numberDisplayReformatLikes'] === undefined ? e()['storage']['sync']['set']({ 'numberDisplayReformatLikes': ![] }) : r['numberDisplayReformatLikes'] = ab['numberDisplayReformatLikes'];
        });
    }
    ;
    function S() {
        if (u()) {
            let ab = document['querySelectorAll'](t() ? 'ytm-like-button-renderer' : '#like-button > ytd-like-button-renderer');
            for (let ac of ab) {
                if (g(ac))
                    return ac;
            }
        }
        if (t())
            return document['querySelector']('.slim-video-action-bar-actions');
        return document['getElementById']('menu-container')?.['offsetParent'] === null ? document['querySelector']('ytd-menu-renderer.ytd-watch-metadata > div') : document['getElementById']('menu-container')?.['querySelector']('#top-level-buttons-computed');
    }
    function T() {
        return S()['querySelectorAll']('*')[0]['tagName'] === 'YTD-SEGMENTED-LIKE-DISLIKE-BUTTON-RENDERER' ? S()['querySelector']('#segmented-like-button') : S()['querySelectorAll']('ytm-toggle-button-renderer')[0];
    }
    function U() {
        return T()['querySelector']('#text') ?? T()['getElementsByTagName']('yt-formatted-string')[0] ?? T()['querySelector']('span[role="text"]');
    }
    function V() {
        return S()['querySelectorAll']('*')[0]['tagName'] === 'YTD-SEGMENTED-LIKE-DISLIKE-BUTTON-RENDERER' ? S()['querySelector']('#segmented-dislike-button') : S()['querySelectorAll']('ytm-toggle-button-renderer')[1];
    }
    function W() {
        let ab = V()['querySelector']('#text') ?? V()['getElementsByTagName']('yt-formatted-string')[0] ?? V()['querySelector']('span[role="text"]');
        if (ab == null) {
            let ac = document['createElement']('span');
            ac['id'] = 'text', V()['querySelector']('button')['appendChild'](ac), V()['querySelector']('button')['style']['width'] = 'auto', ab = V()['querySelector']('#text');
        }
        return ab;
    }
    function X() {
        return document['querySelector']('a[href^="https://accounts.google.com/ServiceLogin"]') ? !![] : ![];
    }
    ;
    function Y(ab) {
        r['disableVoteSubmission'] !== !![] && e()['runtime']['sendMessage']({
            'message': 'send_vote',
            'vote': ab,
            'videoId': f(window['location']['href'])
        });
    }
    function Z() {
        if (X() === ![]) {
            if (s['previousState'] === p) {
                Y(1);
                if (s['dislikes'] > 0)
                    s['dislikes']--;
                s['likes']++, l(s['likes'], s['dislikes']), D(b(s['dislikes'])), s['previousState'] = o;
            } else {
                if (s['previousState'] === q)
                    Y(1), s['likes']++, l(s['likes'], s['dislikes']), s['previousState'] = o;
                else {
                    if (s['previousState'] = o) {
                        Y(0);
                        if (s['likes'] > 0)
                            s['likes']--;
                        l(s['likes'], s['dislikes']), s['previousState'] = q;
                    }
                }
            }
            if (r['numberDisplayReformatLikes'] === !![]) {
                const ab = E();
                ab !== ![] && C(b(ab));
            }
        }
    }
    function a0() {
        if (X() == ![]) {
            if (s['previousState'] === q)
                Y(-1), s['dislikes']++, D(b(s['dislikes'])), l(s['likes'], s['dislikes']), s['previousState'] = p;
            else {
                if (s['previousState'] === p) {
                    Y(0);
                    if (s['dislikes'] > 0)
                        s['dislikes']--;
                    D(b(s['dislikes'])), l(s['likes'], s['dislikes']), s['previousState'] = q;
                } else {
                    if (s['previousState'] === o) {
                        Y(-1);
                        if (s['likes'] > 0)
                            s['likes']--;
                        s['dislikes']++, D(b(s['dislikes'])), l(s['likes'], s['dislikes']), s['previousState'] = p;
                        if (r['numberDisplayReformatLikes'] === !![]) {
                            const ab = E();
                            ab !== ![] && C(b(ab));
                        }
                    }
                }
            }
        }
    }
    function a1() {
        !window['returnDislikeButtonlistenersSet'] && (T()['addEventListener']('click', Z), V()['addEventListener']('click', a0), T()['addEventListener']('touchstart', Z), T()['addEventListener']('touchstart', a0), window['returnDislikeButtonlistenersSet'] = !![]);
    }
    function a2(ab, ac) {
        ab['disableVoteSubmission'] !== undefined && a3(ab['disableVoteSubmission']['newValue']), ab['coloredThumbs'] !== undefined && a4(ab['coloredThumbs']['newValue']), ab['coloredBar'] !== undefined && a5(ab['coloredBar']['newValue']), ab['colorTheme'] !== undefined && a6(ab['colorTheme']['newValue']), ab['numberDisplayFormat'] !== undefined && a7(ab['numberDisplayFormat']['newValue']), ab['numberDisplayReformatLikes'] !== undefined && a8(ab['numberDisplayReformatLikes']['newValue']);
    }
    function a3(ab) {
        r['disableVoteSubmission'] = ab;
    }
    function a4(ab) {
        r['coloredThumbs'] = ab;
    }
    function a5(ab) {
        r['coloredBar'] = ab;
    }
    function a6(ab) {
        if (!ab)
            ab = 'classic';
        r['colorTheme'] = ab;
    }
    function a7(ab) {
        r['numberDisplayFormat'] = ab;
    }
    function a8(ab) {
        r['numberDisplayReformatLikes'] = ab;
    }
    ;
    J();
    let a9 = null;
    function aa(ab) {
        function ac() {
            (u() || S()?.['offsetParent'] && h()) && (a1(), I(), e()['storage']['onChanged']['addListener'](a2), clearInterval(a9), a9 = null);
        }
        a9 = setInterval(ac, 111);
    }
    aa(), document['addEventListener']('yt-navigate-finish', function (ab) {
        if (a9 !== null)
            clearInterval(a9);
        window['returnDislikeButtonlistenersSet'] = ![], aa();
    });
})());