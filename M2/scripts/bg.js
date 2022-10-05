function A3844() {
    const A4cb59f = [
        'sync',
        'videoIds',
        'add',
        'set_state',
        '1283045eGRvGF',
        'browserAction',
        'subtle',
        '128.png',
        'charCodeAt',
        'fromCharCode',
        'log_off',
        'changing icon is not supported',
        'send_links',
        'dash_like',
        'setIcon',
        'from',
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
        'set',
        'numberDisplayFormat',
        '889744PTtGiW',
        '/images/',
        'update',
        'message',
        'newValue',
        'vote',
        'SHA-512',
        'getRandomValues',
        'action',
        'addListener',
        'showTooltipPercentage',
        'send_vote',
        'apply',
        'digest',
        '/puzzle/registration?userId=',
        'classic',
        '34330FIYzjN',
        'solution',
        'then',
        'https://returnyoutubedislikeapi.com',
        'likeCount',
        '11514195XIDwTp',
        'pow',
        '102QeOmcX',
        'disableVoteSubmission',
        'stringify',
        'catch',
        'challenge',
        'reason',
        '3306123GHkkPk',
        'get',
        'userId',
        'filter',
        '&likeCount=',
        '6DqNXmR',
        'slice',
        'json',
        'undefined',
        '72OmCjyR',
        'concat',
        'length',
        'coloredBar',
        'log',
        'browser_update',
        '4584624WIvBVl',
        'hold.png',
        'identity',
        'difficulty',
        '/interact/vote',
        'chrome_update',
        'colorTheme',
        'registrationConfirmed',
        'has',
        'numberDisplayReformatLikes',
        '15859VFWcDk',
        'onChanged',
        'videoId',
        'compactShort',
        'application/json',
        'random',
        'runtime',
        'coloredThumbs',
        'floor',
        '/interact/confirmVote',
        '1551pIzXFw',
        'POST',
        'getAuthToken',
        'storage',
        'tooltipPercentageMode',
        'get_auth_token',
        'GET'
    ];
    A3844 = function () {
        return A4cb59f;
    };
    return A3844();
}
function A16d4(A5d8cd8, A39df7f) {
    const A384428 = A3844();
    return A16d4 = function (A16d4d6, A59bd97) {
        A16d4d6 = A16d4d6 - 293;
        let A496570 = A384428[A16d4d6];
        return A496570;
    }, A16d4(A5d8cd8, A39df7f);
}
(function (A5ce056, A987fa4) {
    const Ae816cc = A16d4, A1d6d32 = A5ce056();
    while (!![]) {
        try {
            const A1a5ee5 = -parseInt(Ae816cc(328)) / 1 * (-parseInt(Ae816cc(297)) / 2) + -parseInt(Ae816cc(303)) / 3 + parseInt(Ae816cc(318)) / 4 + -parseInt(Ae816cc(349)) / 5 * (-parseInt(Ae816cc(308)) / 6) + -parseInt(Ae816cc(295)) / 7 + parseInt(Ae816cc(364)) / 8 * (parseInt(Ae816cc(312)) / 9) + parseInt(Ae816cc(380)) / 10 * (parseInt(Ae816cc(338)) / 11);
            if (A1a5ee5 === A987fa4)
                break;
            else
                A1d6d32['push'](A1d6d32['shift']());
        } catch (A55899f) {
            A1d6d32['push'](A1d6d32['shift']());
        }
    }
}(A3844, 838445), ((() => {
    const A1d0be9 = A16d4;
    var A4ed233 = {};
    const A294352 = A1d0be9(293), A5ce6aa = A1d0be9(319), A40f0e5 = A1d0be9(352);
    let A2868aa, A546370 = {
            'disableVoteSubmission': ![],
            'coloredThumbs': ![],
            'coloredBar': ![],
            'colorTheme': A1d0be9(379),
            'numberDisplayFormat': 'compactShort',
            'numberDisplayReformatLikes': ![]
        };
    if (A57db99())
        A2868aa = chrome;
    else {
        if (A59c415())
            A2868aa = browser;
    }
    A5e542b(), A2868aa[A1d0be9(334)]['onMessage']['addListener']((A990323, A4d0d26, A18f662) => {
        const A79f91b = A1d0be9;
        if (A990323[A79f91b(367)] === A79f91b(343))
            chrome['identity'][A79f91b(340)]({ 'interactive': !![] }, function (A3d382c) {
                const A5b23f1 = A79f91b;
                console['log'](A3d382c), chrome[A5b23f1(320)]['getProfileUserInfo'](function (Aa1d045) {
                    const A4385b2 = A5b23f1;
                    console[A4385b2(316)](JSON[A4385b2(299)](Aa1d045));
                });
            });
        else {
            if (A990323['message'] === A79f91b(355)) {
            } else {
                if (A990323['message'] == A79f91b(348)) {
                    let A2acd52 = '';
                    return fetch(A294352 + '/votes?videoId=' + A990323['videoId'] + A79f91b(307) + (A990323[A79f91b(294)] || ''), {
                        'method': 'GET',
                        'headers': { 'Accept': A79f91b(332) }
                    })['then'](A1c7fa6 => A1c7fa6[A79f91b(310)]())[A79f91b(382)](A3bbf06 => {
                        A18f662(A3bbf06);
                    })[A79f91b(300)](), !![];
                } else {
                    if (A990323[A79f91b(367)] == A79f91b(357)) {
                        A1e4bc8 = A1e4bc8[A79f91b(313)](A990323[A79f91b(346)][A79f91b(306)](A18a7cb => !A168d83[A79f91b(326)](A18a7cb)));
                        if (A1e4bc8[A79f91b(314)] >= 20) {
                            fetch(A294352 + '/votes', {
                                'method': 'POST',
                                'headers': { 'Content-Type': 'application/json' },
                                'body': JSON[A79f91b(299)](A1e4bc8)
                            });
                            for (const A43315 of A1e4bc8) {
                                A168d83[A79f91b(347)](A43315);
                            }
                            A1e4bc8 = [];
                        }
                    } else {
                        if (A990323[A79f91b(367)] == 'register')
                            return Ab90a56(), !![];
                        else {
                            if (A990323['message'] == A79f91b(375))
                                return A16a036(A990323[A79f91b(330)], A990323[A79f91b(369)]), !![];
                        }
                    }
                }
            }
        }
    }), A2868aa['runtime']['onInstalled'][A1d0be9(373)](A1b846a => {
        const A26255d = A1d0be9;
        if (A1b846a[A26255d(302)] === A26255d(317) || A1b846a[A26255d(302)] === A26255d(323) || A1b846a[A26255d(302)] === A26255d(366))
            return;
    });
    async function A16a036(A5183aa, A134d0c) {
        const A5a44ae = A1d0be9;
        A2868aa[A5a44ae(341)][A5a44ae(345)][A5a44ae(304)](null, async A3099e5 => {
            const A4fe7a4 = A5a44ae;
            (!A3099e5['userId'] || !A3099e5[A4fe7a4(325)]) && await Ab90a56();
            let A523f32 = await fetch(A294352 + A4fe7a4(322), {
                'method': A4fe7a4(339),
                'headers': { 'Content-Type': A4fe7a4(332) },
                'body': JSON[A4fe7a4(299)]({
                    'userId': A3099e5[A4fe7a4(305)],
                    'videoId': A5183aa,
                    'value': A134d0c
                })
            });
            if (A523f32['status'] == 401) {
                await Ab90a56(), await A16a036(A5183aa, A134d0c);
                return;
            }
            const A365156 = await A523f32[A4fe7a4(310)](), A1093e3 = await A1e5bb6(A365156);
            if (!A1093e3[A4fe7a4(381)]) {
                await A16a036(A5183aa, A134d0c);
                return;
            }
            await fetch(A294352 + A4fe7a4(337), {
                'method': A4fe7a4(339),
                'headers': { 'Content-Type': A4fe7a4(332) },
                'body': JSON['stringify']({
                    ...A1093e3,
                    'userId': A3099e5[A4fe7a4(305)],
                    'videoId': A5183aa
                })
            });
        });
    }
    async function Ab90a56() {
        const A463fec = A1d0be9, A24c4b3 = A1fecae();
        A2868aa[A463fec(341)][A463fec(345)][A463fec(362)]({ 'userId': A24c4b3 });
        const A147f5f = await fetch(A294352 + A463fec(378) + A24c4b3, {
                'method': A463fec(344),
                'headers': { 'Accept': A463fec(332) }
            })[A463fec(382)](A1ee840 => A1ee840['json']()), A210679 = await A1e5bb6(A147f5f);
        if (!A210679['solution']) {
            await Ab90a56();
            return;
        }
        const A1c21e2 = await fetch(A294352 + A463fec(378) + A24c4b3, {
            'method': 'POST',
            'headers': { 'Content-Type': A463fec(332) },
            'body': JSON[A463fec(299)](A210679)
        })[A463fec(382)](A530868 => A530868[A463fec(310)]());
        if (A1c21e2 === !![])
            return A2868aa[A463fec(341)][A463fec(345)][A463fec(362)]({ 'registrationConfirmed': !![] });
    }
    A2868aa[A1d0be9(341)][A1d0be9(345)][A1d0be9(304)](null, async Ab8ed23 => {
        const A450cb3 = A1d0be9;
        (!Ab8ed23 || !Ab8ed23[A450cb3(305)] || !Ab8ed23[A450cb3(325)]) && await Ab90a56();
    });
    const A168d83 = new Set();
    let A1e4bc8 = [];
    function A2b0497(A29538e, A136f9d) {
        const A27ed56 = A1d0be9;
        let A11a72d = 0, A3834a5 = 0;
        for (let A4a7078 = 0; A4a7078 < A29538e[A27ed56(314)]; A4a7078++) {
            A3834a5 = A29538e[A4a7078];
            if (A3834a5 === 0)
                A11a72d += 8;
            else {
                let A4ef371 = 1;
                A3834a5 >>> 4 === 0 && (A4ef371 += 4, A3834a5 <<= 4);
                A3834a5 >>> 6 === 0 && (A4ef371 += 2, A3834a5 <<= 2);
                A11a72d += A4ef371 - (A3834a5 >>> 7);
                break;
            }
            if (A11a72d >= A136f9d)
                break;
        }
        return A11a72d;
    }
    async function A1e5bb6(A2b2dbd) {
        const Af44a69 = A1d0be9;
        let Ac458a5 = Uint8Array[Af44a69(360)](atob(A2b2dbd[Af44a69(301)]), A87b50 => A87b50[Af44a69(353)](0)), A4f1921 = new ArrayBuffer(20), A2912b2 = new Uint8Array(A4f1921), A118044 = new Uint32Array(A4f1921), A139610 = Math[Af44a69(296)](2, A2b2dbd[Af44a69(321)]) * 3;
        for (let A57ebe2 = 4; A57ebe2 < 20; A57ebe2++) {
            A2912b2[A57ebe2] = Ac458a5[A57ebe2 - 4];
        }
        for (let A3b0dc3 = 0; A3b0dc3 < A139610; A3b0dc3++) {
            A118044[0] = A3b0dc3;
            let A4fb32a = await crypto[Af44a69(351)][Af44a69(377)](Af44a69(370), A4f1921), A200a16 = new Uint8Array(A4fb32a);
            if (A2b0497(A200a16) >= A2b2dbd[Af44a69(321)])
                return { 'solution': btoa(String[Af44a69(354)][Af44a69(376)](null, A2912b2[Af44a69(309)](0, 4))) };
        }
        return {};
    }
    function A1fecae(A46fcdf = 36) {
        const A381329 = A1d0be9, A1e1471 = A381329(361);
        let A3fa80a = '';
        if (crypto && crypto['getRandomValues']) {
            const A5ef149 = new Uint32Array(A46fcdf);
            crypto[A381329(371)](A5ef149);
            for (let A40d137 = 0; A40d137 < A46fcdf; A40d137++) {
                A3fa80a += A1e1471[A5ef149[A40d137] % A1e1471[A381329(314)]];
            }
            return A3fa80a;
        } else {
            for (let A10bc99 = 0; A10bc99 < A46fcdf; A10bc99++) {
                A3fa80a += A1e1471[Math[A381329(336)](Math[A381329(333)]() * A1e1471[A381329(314)])];
            }
            return A3fa80a;
        }
    }
    function A30cb9e(A5ee3c2, A5d7676) {
        const A21aa90 = A1d0be9;
        A5ee3c2['disableVoteSubmission'] !== undefined && A3af3ff(A5ee3c2['disableVoteSubmission']['newValue']), A5ee3c2[A21aa90(335)] !== undefined && A49be4a(A5ee3c2[A21aa90(335)][A21aa90(368)]), A5ee3c2[A21aa90(315)] !== undefined && A1f91ac(A5ee3c2[A21aa90(315)][A21aa90(368)]), A5ee3c2[A21aa90(324)] !== undefined && A375bc2(A5ee3c2[A21aa90(324)][A21aa90(368)]), A5ee3c2[A21aa90(363)] !== undefined && Af79b6b(A5ee3c2['numberDisplayFormat'][A21aa90(368)]), A5ee3c2[A21aa90(327)] !== undefined && A292993(A5ee3c2[A21aa90(327)][A21aa90(368)]), A5ee3c2[A21aa90(374)] !== undefined && A25a81f(A5ee3c2[A21aa90(374)]['newValue']), A5ee3c2['numberDisplayReformatLikes'] !== undefined && A292993(A5ee3c2[A21aa90(327)][A21aa90(368)]);
    }
    function A3af3ff(A44b1f3) {
        const A23fd09 = A1d0be9;
        A546370[A23fd09(298)] = A44b1f3, A44b1f3 === !![] ? A3cdd45(A5ce6aa) : A3cdd45(A40f0e5);
    }
    function Af79b6b(A48b569) {
        A546370['numberDisplayFormat'] = A48b569;
    }
    function A25a81f(A4cf30b) {
        const A2a3032 = A1d0be9;
        A546370[A2a3032(374)] = A4cf30b;
    }
    function A2a4a8c(A4ab958) {
        const A29443a = A1d0be9;
        !A4ab958 && (A4ab958 = A29443a(358)), A546370[A29443a(342)] = A4ab958;
    }
    function A3cdd45(A5eca6e) {
        const A1c9f9f = A1d0be9;
        if (A2868aa[A1c9f9f(372)] !== undefined)
            A2868aa['action'][A1c9f9f(359)]({ 'path': '/data/icons/' + A5eca6e });
        else {
            if (A2868aa[A1c9f9f(350)] !== undefined)
                A2868aa['browserAction'][A1c9f9f(359)]({ 'path': A1c9f9f(365) + A5eca6e });
            else
                console[A1c9f9f(316)](A1c9f9f(356));
        }
    }
    function A49be4a(A31af22) {
        const A348237 = A1d0be9;
        A546370[A348237(335)] = A31af22;
    }
    function A1f91ac(A60ede5) {
        const A284065 = A1d0be9;
        A546370[A284065(315)] = A60ede5;
    }
    function A375bc2(A9b4da3) {
        const A5c208e = A1d0be9;
        !A9b4da3 && (A9b4da3 = 'classic'), A546370[A5c208e(324)] = A9b4da3;
    }
    function A292993(A152b9b) {
        const A1da2f5 = A1d0be9;
        A546370[A1da2f5(327)] = A152b9b;
    }
    A2868aa[A1d0be9(341)][A1d0be9(329)][A1d0be9(373)](A30cb9e);
    function A5e542b() {
        A41187d(), A539f19(), A50755c(), A44736b(), A4635d9(), A350bd7(), A31184a(), A403fdf();
    }
    function A41187d() {
        const A554b0d = A1d0be9;
        A2868aa[A554b0d(341)][A554b0d(345)][A554b0d(304)]([A554b0d(298)], A3b9088 => {
            const A4851ba = A554b0d;
            if (A3b9088[A4851ba(298)] === undefined)
                A2868aa[A4851ba(341)][A4851ba(345)][A4851ba(362)]({ 'disableVoteSubmission': ![] });
            else {
                A546370[A4851ba(298)] = A3b9088[A4851ba(298)];
                if (A3b9088[A4851ba(298)])
                    A3cdd45(A5ce6aa);
            }
        });
    }
    function A539f19() {
        const A3f3aeb = A1d0be9;
        A2868aa['storage'][A3f3aeb(345)][A3f3aeb(304)]([A3f3aeb(335)], A3db63b => {
            const A5d6fd7 = A3f3aeb;
            A3db63b['coloredThumbs'] === undefined ? A2868aa[A5d6fd7(341)][A5d6fd7(345)][A5d6fd7(362)]({ 'coloredThumbs': ![] }) : A546370[A5d6fd7(335)] = A3db63b[A5d6fd7(335)];
        });
    }
    function A50755c() {
        const A20def3 = A1d0be9;
        A2868aa[A20def3(341)][A20def3(345)]['get'](['coloredBar'], A3e9ed5 => {
            const A4c1d86 = A20def3;
            A3e9ed5[A4c1d86(315)] === undefined ? A2868aa['storage'][A4c1d86(345)][A4c1d86(362)]({ 'coloredBar': ![] }) : A546370[A4c1d86(315)] = A3e9ed5['coloredBar'];
        });
    }
    function A44736b() {
        const A48e920 = A1d0be9;
        A2868aa[A48e920(341)][A48e920(345)][A48e920(304)]([A48e920(324)], A1bedb8 => {
            const A5db09d = A48e920;
            A1bedb8['colorTheme'] === undefined ? A2868aa[A5db09d(341)]['sync'][A5db09d(362)]({ 'colorTheme': ![] }) : A546370['colorTheme'] = A1bedb8[A5db09d(324)];
        });
    }
    function A4635d9() {
        const Aa8cf21 = A1d0be9;
        A2868aa['storage'][Aa8cf21(345)][Aa8cf21(304)](['numberDisplayFormat'], A539ecf => {
            const A4c8dd1 = Aa8cf21;
            A539ecf[A4c8dd1(363)] === undefined ? A2868aa['storage']['sync'][A4c8dd1(362)]({ 'numberDisplayFormat': A4c8dd1(331) }) : A546370[A4c8dd1(363)] = A539ecf['numberDisplayFormat'];
        });
    }
    function A31184a() {
        const A2c565d = A1d0be9;
        A2868aa[A2c565d(341)][A2c565d(345)][A2c565d(304)](['showTooltipPercentage'], A59caa1 => {
            const A27d768 = A2c565d;
            A59caa1[A27d768(374)] === undefined ? A2868aa[A27d768(341)][A27d768(345)][A27d768(362)]({ 'showTooltipPercentage': ![] }) : A546370[A27d768(374)] = A59caa1[A27d768(374)];
        });
    }
    function A403fdf() {
        const A19f554 = A1d0be9;
        A2868aa['storage'][A19f554(345)][A19f554(304)]([A19f554(342)], A35e51f => {
            const A1d626e = A19f554;
            A35e51f[A1d626e(342)] === undefined ? A2868aa[A1d626e(341)][A1d626e(345)]['set']({ 'tooltipPercentageMode': 'dash_like' }) : A546370[A1d626e(342)] = A35e51f[A1d626e(342)];
        });
    }
    function A350bd7() {
        const A5e1807 = A1d0be9;
        A2868aa['storage'][A5e1807(345)][A5e1807(304)]([A5e1807(327)], A20d504 => {
            const A1af7f8 = A5e1807;
            A20d504['numberDisplayReformatLikes'] === undefined ? A2868aa[A1af7f8(341)][A1af7f8(345)][A1af7f8(362)]({ 'numberDisplayReformatLikes': ![] }) : A546370[A1af7f8(327)] = A20d504[A1af7f8(327)];
        });
    }
    function A57db99() {
        const A21aca7 = A1d0be9;
        return typeof chrome !== 'undefined' && typeof chrome[A21aca7(334)] !== A21aca7(311);
    }
    function A59c415() {
        const A290d9f = A1d0be9;
        return typeof browser !== A290d9f(311) && typeof browser[A290d9f(334)] !== A290d9f(311);
    }
})()));