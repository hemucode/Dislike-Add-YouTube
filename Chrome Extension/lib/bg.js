((() => {
    var c = {};
    const d = 'https://returnyoutubedislikeapi.com', e = 'hold.png', f = '128.png';
    let g, h = {
            'disableVoteSubmission': ![],
            'coloredThumbs': ![],
            'coloredBar': ![],
            'colorTheme': 'classic',
            'numberDisplayFormat': 'compactShort',
            'numberDisplayReformatLikes': ![]
        };
    if (I())
        g = chrome;
    else {
        if (J())
            g = browser;
    }
    z(), g['runtime']['onMessage']['addListener']((K, L, M) => {
        function U(c, d) {
            return b(c - 109, d);
        }
        if (K['message'] === 'get_auth_token')
            chrome['identity']['getAuthToken']({ 'interactive': !![] }, function (N) {
                console['log'](N), chrome['identity']['getProfileUserInfo'](function (O) {
                    console['log'](JSON['stringify'](O));
                });
            });
        else {
            if (K['message'] === 'log_off') {
            } else {
                if (K['message'] == 'set_state') {
                    let N = '';
                    return fetch(d + '/votes?videoId=' + K['videoId'] + '&likeCount=' + (K['likeCount'] || ''), {
                        'method': U(109, 109),
                        'headers': { 'Accept': 'application/json' }
                    })['then'](O => O['json']())['then'](O => {
                        M(O);
                    })['catch'](), !![];
                } else {
                    if (K['message'] == 'send_links') {
                        l = l['concat'](K['videoIds']['filter'](O => !k['has'](O)));
                        if (l['length'] >= 20) {
                            fetch(d + '/votes', {
                                'method': 'POST',
                                'headers': { 'Content-Type': 'application/json' },
                                'body': JSON['stringify'](l)
                            });
                            for (const O of l) {
                                k['add'](O);
                            }
                            l = [];
                        }
                    } else {
                        if (K['message'] == 'register')
                            return j(), !![];
                        else {
                            if (K['message'] == 'send_vote')
                                return i(K['videoId'], K['vote']), !![];
                        }
                    }
                }
            }
        }
    }), g['runtime']['onInstalled']['addListener'](K => {
        if (K['reason'] === 'browser_update' || K['reason'] === 'chrome_update' || K['reason'] === 'update')
            return;
    });
    async function i(K, L) {
        g['storage']['sync']['get'](null, async M => {
            (!M['userId'] || !M['registrationConfirmed']) && await j();
            let N = await fetch(d + '/interact/vote', {
                'method': 'POST',
                'headers': { 'Content-Type': 'application/json' },
                'body': JSON['stringify']({
                    'userId': M['userId'],
                    'videoId': K,
                    'value': L
                })
            });
            if (N['status'] == 401) {
                await j(), await i(K, L);
                return;
            }
            const O = await N['json'](), P = await n(O);
            if (!P['solution']) {
                await i(K, L);
                return;
            }
            await fetch(d + '/interact/confirmVote', {
                'method': 'POST',
                'headers': { 'Content-Type': 'application/json' },
                'body': JSON['stringify']({
                    ...P,
                    'userId': M['userId'],
                    'videoId': K
                })
            });
        });
    }
    async function j() {
        const K = o();
        g['storage']['sync']['set']({ 'userId': K });
        const L = await fetch(d + '/puzzle/registration?userId=' + K, {
                'method': 'GET',
                'headers': { 'Accept': 'application/json' }
            })['then'](O => O['json']()), M = await n(L);
        if (!M['solution']) {
            await j();
            return;
        }
        const N = await fetch(d + '/puzzle/registration?userId=' + K, {
            'method': 'POST',
            'headers': { 'Content-Type': 'application/json' },
            'body': JSON['stringify'](M)
        })['then'](O => O['json']());
        if (N === !![])
            return g['storage']['sync']['set']({ 'registrationConfirmed': !![] });
    }
    g['storage']['sync']['get'](null, async K => {
        (!K || !K['userId'] || !K['registrationConfirmed']) && await j();
    });
    const k = new Set();
    let l = [];
    function m(K, L) {
        let M = 0, N = 0;
        for (let O = 0; O < K['length']; O++) {
            N = K[O];
            if (N === 0)
                M += 8;
            else {
                let P = 1;
                N >>> 4 === 0 && (P += 4, N <<= 4);
                N >>> 6 === 0 && (P += 2, N <<= 2);
                M += P - (N >>> 7);
                break;
            }
            if (M >= L)
                break;
        }
        return M;
    }
    async function n(K) {
        let L = Uint8Array['from'](atob(K['challenge']), Q => Q['charCodeAt'](0)), M = new ArrayBuffer(20), N = new Uint8Array(M), O = new Uint32Array(M), P = Math['pow'](2, K['difficulty']) * 3;
        for (let Q = 4; Q < 20; Q++) {
            N[Q] = L[Q - 4];
        }
        for (let R = 0; R < P; R++) {
            O[0] = R;
            let S = await crypto['subtle']['digest']('SHA-512', M), T = new Uint8Array(S);
            if (m(T) >= K['difficulty'])
                return { 'solution': btoa(String['fromCharCode']['apply'](null, N['slice'](0, 4))) };
        }
        return {};
    }
    function o(K = 36) {
        const L = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let M = '';
        if (crypto && crypto['getRandomValues']) {
            const N = new Uint32Array(K);
            crypto['getRandomValues'](N);
            for (let O = 0; O < K; O++) {
                M += L[N[O] % L['length']];
            }
            return M;
        } else {
            for (let P = 0; P < K; P++) {
                M += L[Math['floor'](Math['random']() * L['length'])];
            }
            return M;
        }
    }
    function p(K, L) {
        K[V(268, 266)] !== undefined && q(K['disableVoteSubmission']['newValue']);
        K['coloredThumbs'] !== undefined && v(K['coloredThumbs']['newValue']);
        K['coloredBar'] !== undefined && w(K['coloredBar']['newValue']);
        K['colorTheme'] !== undefined && x(K['colorTheme']['newValue']);
        K['numberDisplayFormat'] !== undefined && r(K['numberDisplayFormat']['newValue']);
        function V(c, d) {
            return b(c - 267, d);
        }
        K['numberDisplayReformatLikes'] !== undefined && y(K['numberDisplayReformatLikes']['newValue']), K['showTooltipPercentage'] !== undefined && s(K['showTooltipPercentage']['newValue']), K['numberDisplayReformatLikes'] !== undefined && y(K['numberDisplayReformatLikes']['newValue']);
    }
    function q(K) {
        h['disableVoteSubmission'] = K, K === !![] ? u(e) : u(f);
    }
    function r(K) {
        h['numberDisplayFormat'] = K;
    }
    function s(K) {
        h['showTooltipPercentage'] = K;
    }
    function t(K) {
        !K && (K = 'dash_like'), h['tooltipPercentageMode'] = K;
    }
    function u(K) {
        if (g['action'] !== undefined)
            g['action']['setIcon']({ 'path': '/data/icons/' + K });
        else {
            if (g['browserAction'] !== undefined)
                g['browserAction']['setIcon']({ 'path': '/data/icons/' + K });
            else
                console['log']('changing icon is not supported');
        }
    }
    function v(K) {
        h['coloredThumbs'] = K;
    }
    function w(K) {
        h['coloredBar'] = K;
    }
    function x(K) {
        !K && (K = 'classic'), h['colorTheme'] = K;
    }
    function y(K) {
        h['numberDisplayReformatLikes'] = K;
    }
    g['storage']['onChanged']['addListener'](p);
    function z() {
        A(), B(), C(), D(), E(), H(), F(), G();
    }
    function A() {
        g['storage']['sync']['get'](['disableVoteSubmission'], K => {
            if (K['disableVoteSubmission'] === undefined)
                g['storage']['sync']['set']({ 'disableVoteSubmission': ![] });
            else {
                h['disableVoteSubmission'] = K['disableVoteSubmission'];
                if (K['disableVoteSubmission'])
                    u(e);
            }
        });
    }
    function B() {
        g['storage']['sync']['get'](['coloredThumbs'], K => {
            K['coloredThumbs'] === undefined ? g['storage']['sync']['set']({ 'coloredThumbs': ![] }) : h['coloredThumbs'] = K['coloredThumbs'];
        });
    }
    function C() {
        g['storage']['sync']['get'](['coloredBar'], K => {
            K['coloredBar'] === undefined ? g['storage']['sync']['set']({ 'coloredBar': ![] }) : h['coloredBar'] = K['coloredBar'];
        });
    }
    function D() {
        g['storage']['sync']['get'](['colorTheme'], K => {
            K['colorTheme'] === undefined ? g['storage']['sync']['set']({ 'colorTheme': ![] }) : h['colorTheme'] = K['colorTheme'];
        });
    }
    function E() {
        g['storage']['sync']['get'](['numberDisplayFormat'], K => {
            function W(c, d) {
                return b(c - -722, d);
            }
            K['numberDisplayFormat'] === undefined ? g['storage']['sync'][W(-720, -719)]({ 'numberDisplayFormat': 'compactShort' }) : h['numberDisplayFormat'] = K['numberDisplayFormat'];
        });
    }
    function F() {
        g['storage']['sync']['get'](['showTooltipPercentage'], K => {
            K['showTooltipPercentage'] === undefined ? g['storage']['sync']['set']({ 'showTooltipPercentage': ![] }) : h['showTooltipPercentage'] = K['showTooltipPercentage'];
        });
    }
    function G() {
        g['storage']['sync']['get'](['tooltipPercentageMode'], K => {
            K['tooltipPercentageMode'] === undefined ? g['storage']['sync']['set']({ 'tooltipPercentageMode': 'dash_like' }) : h['tooltipPercentageMode'] = K['tooltipPercentageMode'];
        });
    }
    function H() {
        g['storage']['sync']['get'](['numberDisplayReformatLikes'], K => {
            K['numberDisplayReformatLikes'] === undefined ? g['storage']['sync']['set']({ 'numberDisplayReformatLikes': ![] }) : h['numberDisplayReformatLikes'] = K['numberDisplayReformatLikes'];
        });
    }
    function I() {
        return typeof chrome !== 'undefined' && typeof chrome['runtime'] !== 'undefined';
    }
    function J() {
        return typeof browser !== 'undefined' && typeof browser['runtime'] !== 'undefined';
    }
})());
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - 0;
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const X = [
        'GET',
        'disableVoteSubmission',
        'set'
    ];
    a = function () {
        return X;
    };
    return a();
}