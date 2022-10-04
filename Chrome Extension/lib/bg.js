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
        'changing\x20icon\x20is\x20not\x20supported',
        'send_links',
        'dash_like',
        'setIcon',
        'from',
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
        'set',
        'numberDisplayFormat',
        '889744PTtGiW',
        '/data/icons/',
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
        A16d4d6 = A16d4d6 - 0x125;
        let A496570 = A384428[A16d4d6];
        return A496570;
    }, A16d4(A5d8cd8, A39df7f);
}
(function (A5ce056, A987fa4) {
    const Ae816cc = A16d4, A1d6d32 = A5ce056();
    while (!![]) {
        try {
            const A1a5ee5 = -parseInt(Ae816cc(0x148)) / 0x1 * (-parseInt(Ae816cc(0x129)) / 0x2) + -parseInt(Ae816cc(0x12f)) / 0x3 + parseInt(Ae816cc(0x13e)) / 0x4 + -parseInt(Ae816cc(0x15d)) / 0x5 * (-parseInt(Ae816cc(0x134)) / 0x6) + -parseInt(Ae816cc(0x127)) / 0x7 + parseInt(Ae816cc(0x16c)) / 0x8 * (parseInt(Ae816cc(0x138)) / 0x9) + parseInt(Ae816cc(0x17c)) / 0xa * (parseInt(Ae816cc(0x152)) / 0xb);
            if (A1a5ee5 === A987fa4)
                break;
            else
                A1d6d32['push'](A1d6d32['shift']());
        } catch (A55899f) {
            A1d6d32['push'](A1d6d32['shift']());
        }
    }
}(A3844, 0xccb2d), ((() => {
    const A1d0be9 = A16d4;
    var A4ed233 = {};
    const A294352 = A1d0be9(0x125), A5ce6aa = A1d0be9(0x13f), A40f0e5 = A1d0be9(0x160);
    let A2868aa, A546370 = {
            'disableVoteSubmission': ![],
            'coloredThumbs': ![],
            'coloredBar': ![],
            'colorTheme': A1d0be9(0x17b),
            'numberDisplayFormat': 'compactShort',
            'numberDisplayReformatLikes': ![]
        };
    if (A57db99())
        A2868aa = chrome;
    else {
        if (A59c415())
            A2868aa = browser;
    }
    A5e542b(), A2868aa[A1d0be9(0x14e)]['onMessage']['addListener']((A990323, A4d0d26, A18f662) => {
        const A79f91b = A1d0be9;
        if (A990323[A79f91b(0x16f)] === A79f91b(0x157))
            chrome['identity'][A79f91b(0x154)]({ 'interactive': !![] }, function (A3d382c) {
                const A5b23f1 = A79f91b;
                console['log'](A3d382c), chrome[A5b23f1(0x140)]['getProfileUserInfo'](function (Aa1d045) {
                    const A4385b2 = A5b23f1;
                    console[A4385b2(0x13c)](JSON[A4385b2(0x12b)](Aa1d045));
                });
            });
        else {
            if (A990323['message'] === A79f91b(0x163)) {
            } else {
                if (A990323['message'] == A79f91b(0x15c)) {
                    let A2acd52 = '';
                    return fetch(A294352 + '/votes?videoId=' + A990323['videoId'] + A79f91b(0x133) + (A990323[A79f91b(0x126)] || ''), {
                        'method': 'GET',
                        'headers': { 'Accept': A79f91b(0x14c) }
                    })['then'](A1c7fa6 => A1c7fa6[A79f91b(0x136)]())[A79f91b(0x17e)](A3bbf06 => {
                        A18f662(A3bbf06);
                    })[A79f91b(0x12c)](), !![];
                } else {
                    if (A990323[A79f91b(0x16f)] == A79f91b(0x165)) {
                        A1e4bc8 = A1e4bc8[A79f91b(0x139)](A990323[A79f91b(0x15a)][A79f91b(0x132)](A18a7cb => !A168d83[A79f91b(0x146)](A18a7cb)));
                        if (A1e4bc8[A79f91b(0x13a)] >= 0x14) {
                            fetch(A294352 + '/votes', {
                                'method': 'POST',
                                'headers': { 'Content-Type': 'application/json' },
                                'body': JSON[A79f91b(0x12b)](A1e4bc8)
                            });
                            for (const A43315 of A1e4bc8) {
                                A168d83[A79f91b(0x15b)](A43315);
                            }
                            A1e4bc8 = [];
                        }
                    } else {
                        if (A990323[A79f91b(0x16f)] == 'register')
                            return Ab90a56(), !![];
                        else {
                            if (A990323['message'] == A79f91b(0x177))
                                return A16a036(A990323[A79f91b(0x14a)], A990323[A79f91b(0x171)]), !![];
                        }
                    }
                }
            }
        }
    }), A2868aa['runtime']['onInstalled'][A1d0be9(0x175)](A1b846a => {
        const A26255d = A1d0be9;
        if (A1b846a[A26255d(0x12e)] === A26255d(0x13d) || A1b846a[A26255d(0x12e)] === A26255d(0x143) || A1b846a[A26255d(0x12e)] === A26255d(0x16e))
            return;
    });
    async function A16a036(A5183aa, A134d0c) {
        const A5a44ae = A1d0be9;
        A2868aa[A5a44ae(0x155)][A5a44ae(0x159)][A5a44ae(0x130)](null, async A3099e5 => {
            const A4fe7a4 = A5a44ae;
            (!A3099e5['userId'] || !A3099e5[A4fe7a4(0x145)]) && await Ab90a56();
            let A523f32 = await fetch(A294352 + A4fe7a4(0x142), {
                'method': A4fe7a4(0x153),
                'headers': { 'Content-Type': A4fe7a4(0x14c) },
                'body': JSON[A4fe7a4(0x12b)]({
                    'userId': A3099e5[A4fe7a4(0x131)],
                    'videoId': A5183aa,
                    'value': A134d0c
                })
            });
            if (A523f32['status'] == 0x191) {
                await Ab90a56(), await A16a036(A5183aa, A134d0c);
                return;
            }
            const A365156 = await A523f32[A4fe7a4(0x136)](), A1093e3 = await A1e5bb6(A365156);
            if (!A1093e3[A4fe7a4(0x17d)]) {
                await A16a036(A5183aa, A134d0c);
                return;
            }
            await fetch(A294352 + A4fe7a4(0x151), {
                'method': A4fe7a4(0x153),
                'headers': { 'Content-Type': A4fe7a4(0x14c) },
                'body': JSON['stringify']({
                    ...A1093e3,
                    'userId': A3099e5[A4fe7a4(0x131)],
                    'videoId': A5183aa
                })
            });
        });
    }
    async function Ab90a56() {
        const A463fec = A1d0be9, A24c4b3 = A1fecae();
        A2868aa[A463fec(0x155)][A463fec(0x159)][A463fec(0x16a)]({ 'userId': A24c4b3 });
        const A147f5f = await fetch(A294352 + A463fec(0x17a) + A24c4b3, {
                'method': A463fec(0x158),
                'headers': { 'Accept': A463fec(0x14c) }
            })[A463fec(0x17e)](A1ee840 => A1ee840['json']()), A210679 = await A1e5bb6(A147f5f);
        if (!A210679['solution']) {
            await Ab90a56();
            return;
        }
        const A1c21e2 = await fetch(A294352 + A463fec(0x17a) + A24c4b3, {
            'method': 'POST',
            'headers': { 'Content-Type': A463fec(0x14c) },
            'body': JSON[A463fec(0x12b)](A210679)
        })[A463fec(0x17e)](A530868 => A530868[A463fec(0x136)]());
        if (A1c21e2 === !![])
            return A2868aa[A463fec(0x155)][A463fec(0x159)][A463fec(0x16a)]({ 'registrationConfirmed': !![] });
    }
    A2868aa[A1d0be9(0x155)][A1d0be9(0x159)][A1d0be9(0x130)](null, async Ab8ed23 => {
        const A450cb3 = A1d0be9;
        (!Ab8ed23 || !Ab8ed23[A450cb3(0x131)] || !Ab8ed23[A450cb3(0x145)]) && await Ab90a56();
    });
    const A168d83 = new Set();
    let A1e4bc8 = [];
    function A2b0497(A29538e, A136f9d) {
        const A27ed56 = A1d0be9;
        let A11a72d = 0x0, A3834a5 = 0x0;
        for (let A4a7078 = 0x0; A4a7078 < A29538e[A27ed56(0x13a)]; A4a7078++) {
            A3834a5 = A29538e[A4a7078];
            if (A3834a5 === 0x0)
                A11a72d += 0x8;
            else {
                let A4ef371 = 0x1;
                A3834a5 >>> 0x4 === 0x0 && (A4ef371 += 0x4, A3834a5 <<= 0x4);
                A3834a5 >>> 0x6 === 0x0 && (A4ef371 += 0x2, A3834a5 <<= 0x2);
                A11a72d += A4ef371 - (A3834a5 >>> 0x7);
                break;
            }
            if (A11a72d >= A136f9d)
                break;
        }
        return A11a72d;
    }
    async function A1e5bb6(A2b2dbd) {
        const Af44a69 = A1d0be9;
        let Ac458a5 = Uint8Array[Af44a69(0x168)](atob(A2b2dbd[Af44a69(0x12d)]), A87b50 => A87b50[Af44a69(0x161)](0x0)), A4f1921 = new ArrayBuffer(0x14), A2912b2 = new Uint8Array(A4f1921), A118044 = new Uint32Array(A4f1921), A139610 = Math[Af44a69(0x128)](0x2, A2b2dbd[Af44a69(0x141)]) * 0x3;
        for (let A57ebe2 = 0x4; A57ebe2 < 0x14; A57ebe2++) {
            A2912b2[A57ebe2] = Ac458a5[A57ebe2 - 0x4];
        }
        for (let A3b0dc3 = 0x0; A3b0dc3 < A139610; A3b0dc3++) {
            A118044[0x0] = A3b0dc3;
            let A4fb32a = await crypto[Af44a69(0x15f)][Af44a69(0x179)](Af44a69(0x172), A4f1921), A200a16 = new Uint8Array(A4fb32a);
            if (A2b0497(A200a16) >= A2b2dbd[Af44a69(0x141)])
                return { 'solution': btoa(String[Af44a69(0x162)][Af44a69(0x178)](null, A2912b2[Af44a69(0x135)](0x0, 0x4))) };
        }
        return {};
    }
    function A1fecae(A46fcdf = 0x24) {
        const A381329 = A1d0be9, A1e1471 = A381329(0x169);
        let A3fa80a = '';
        if (crypto && crypto['getRandomValues']) {
            const A5ef149 = new Uint32Array(A46fcdf);
            crypto[A381329(0x173)](A5ef149);
            for (let A40d137 = 0x0; A40d137 < A46fcdf; A40d137++) {
                A3fa80a += A1e1471[A5ef149[A40d137] % A1e1471[A381329(0x13a)]];
            }
            return A3fa80a;
        } else {
            for (let A10bc99 = 0x0; A10bc99 < A46fcdf; A10bc99++) {
                A3fa80a += A1e1471[Math[A381329(0x150)](Math[A381329(0x14d)]() * A1e1471[A381329(0x13a)])];
            }
            return A3fa80a;
        }
    }
    function A30cb9e(A5ee3c2, A5d7676) {
        const A21aa90 = A1d0be9;
        A5ee3c2['disableVoteSubmission'] !== undefined && A3af3ff(A5ee3c2['disableVoteSubmission']['newValue']), A5ee3c2[A21aa90(0x14f)] !== undefined && A49be4a(A5ee3c2[A21aa90(0x14f)][A21aa90(0x170)]), A5ee3c2[A21aa90(0x13b)] !== undefined && A1f91ac(A5ee3c2[A21aa90(0x13b)][A21aa90(0x170)]), A5ee3c2[A21aa90(0x144)] !== undefined && A375bc2(A5ee3c2[A21aa90(0x144)][A21aa90(0x170)]), A5ee3c2[A21aa90(0x16b)] !== undefined && Af79b6b(A5ee3c2['numberDisplayFormat'][A21aa90(0x170)]), A5ee3c2[A21aa90(0x147)] !== undefined && A292993(A5ee3c2[A21aa90(0x147)][A21aa90(0x170)]), A5ee3c2[A21aa90(0x176)] !== undefined && A25a81f(A5ee3c2[A21aa90(0x176)]['newValue']), A5ee3c2['numberDisplayReformatLikes'] !== undefined && A292993(A5ee3c2[A21aa90(0x147)][A21aa90(0x170)]);
    }
    function A3af3ff(A44b1f3) {
        const A23fd09 = A1d0be9;
        A546370[A23fd09(0x12a)] = A44b1f3, A44b1f3 === !![] ? A3cdd45(A5ce6aa) : A3cdd45(A40f0e5);
    }
    function Af79b6b(A48b569) {
        A546370['numberDisplayFormat'] = A48b569;
    }
    function A25a81f(A4cf30b) {
        const A2a3032 = A1d0be9;
        A546370[A2a3032(0x176)] = A4cf30b;
    }
    function A2a4a8c(A4ab958) {
        const A29443a = A1d0be9;
        !A4ab958 && (A4ab958 = A29443a(0x166)), A546370[A29443a(0x156)] = A4ab958;
    }
    function A3cdd45(A5eca6e) {
        const A1c9f9f = A1d0be9;
        if (A2868aa[A1c9f9f(0x174)] !== undefined)
            A2868aa['action'][A1c9f9f(0x167)]({ 'path': '/data/icons/' + A5eca6e });
        else {
            if (A2868aa[A1c9f9f(0x15e)] !== undefined)
                A2868aa['browserAction'][A1c9f9f(0x167)]({ 'path': A1c9f9f(0x16d) + A5eca6e });
            else
                console[A1c9f9f(0x13c)](A1c9f9f(0x164));
        }
    }
    function A49be4a(A31af22) {
        const A348237 = A1d0be9;
        A546370[A348237(0x14f)] = A31af22;
    }
    function A1f91ac(A60ede5) {
        const A284065 = A1d0be9;
        A546370[A284065(0x13b)] = A60ede5;
    }
    function A375bc2(A9b4da3) {
        const A5c208e = A1d0be9;
        !A9b4da3 && (A9b4da3 = 'classic'), A546370[A5c208e(0x144)] = A9b4da3;
    }
    function A292993(A152b9b) {
        const A1da2f5 = A1d0be9;
        A546370[A1da2f5(0x147)] = A152b9b;
    }
    A2868aa[A1d0be9(0x155)][A1d0be9(0x149)][A1d0be9(0x175)](A30cb9e);
    function A5e542b() {
        A41187d(), A539f19(), A50755c(), A44736b(), A4635d9(), A350bd7(), A31184a(), A403fdf();
    }
    function A41187d() {
        const A554b0d = A1d0be9;
        A2868aa[A554b0d(0x155)][A554b0d(0x159)][A554b0d(0x130)]([A554b0d(0x12a)], A3b9088 => {
            const A4851ba = A554b0d;
            if (A3b9088[A4851ba(0x12a)] === undefined)
                A2868aa[A4851ba(0x155)][A4851ba(0x159)][A4851ba(0x16a)]({ 'disableVoteSubmission': ![] });
            else {
                A546370[A4851ba(0x12a)] = A3b9088[A4851ba(0x12a)];
                if (A3b9088[A4851ba(0x12a)])
                    A3cdd45(A5ce6aa);
            }
        });
    }
    function A539f19() {
        const A3f3aeb = A1d0be9;
        A2868aa['storage'][A3f3aeb(0x159)][A3f3aeb(0x130)]([A3f3aeb(0x14f)], A3db63b => {
            const A5d6fd7 = A3f3aeb;
            A3db63b['coloredThumbs'] === undefined ? A2868aa[A5d6fd7(0x155)][A5d6fd7(0x159)][A5d6fd7(0x16a)]({ 'coloredThumbs': ![] }) : A546370[A5d6fd7(0x14f)] = A3db63b[A5d6fd7(0x14f)];
        });
    }
    function A50755c() {
        const A20def3 = A1d0be9;
        A2868aa[A20def3(0x155)][A20def3(0x159)]['get'](['coloredBar'], A3e9ed5 => {
            const A4c1d86 = A20def3;
            A3e9ed5[A4c1d86(0x13b)] === undefined ? A2868aa['storage'][A4c1d86(0x159)][A4c1d86(0x16a)]({ 'coloredBar': ![] }) : A546370[A4c1d86(0x13b)] = A3e9ed5['coloredBar'];
        });
    }
    function A44736b() {
        const A48e920 = A1d0be9;
        A2868aa[A48e920(0x155)][A48e920(0x159)][A48e920(0x130)]([A48e920(0x144)], A1bedb8 => {
            const A5db09d = A48e920;
            A1bedb8['colorTheme'] === undefined ? A2868aa[A5db09d(0x155)]['sync'][A5db09d(0x16a)]({ 'colorTheme': ![] }) : A546370['colorTheme'] = A1bedb8[A5db09d(0x144)];
        });
    }
    function A4635d9() {
        const Aa8cf21 = A1d0be9;
        A2868aa['storage'][Aa8cf21(0x159)][Aa8cf21(0x130)](['numberDisplayFormat'], A539ecf => {
            const A4c8dd1 = Aa8cf21;
            A539ecf[A4c8dd1(0x16b)] === undefined ? A2868aa['storage']['sync'][A4c8dd1(0x16a)]({ 'numberDisplayFormat': A4c8dd1(0x14b) }) : A546370[A4c8dd1(0x16b)] = A539ecf['numberDisplayFormat'];
        });
    }
    function A31184a() {
        const A2c565d = A1d0be9;
        A2868aa[A2c565d(0x155)][A2c565d(0x159)][A2c565d(0x130)](['showTooltipPercentage'], A59caa1 => {
            const A27d768 = A2c565d;
            A59caa1[A27d768(0x176)] === undefined ? A2868aa[A27d768(0x155)][A27d768(0x159)][A27d768(0x16a)]({ 'showTooltipPercentage': ![] }) : A546370[A27d768(0x176)] = A59caa1[A27d768(0x176)];
        });
    }
    function A403fdf() {
        const A19f554 = A1d0be9;
        A2868aa['storage'][A19f554(0x159)][A19f554(0x130)]([A19f554(0x156)], A35e51f => {
            const A1d626e = A19f554;
            A35e51f[A1d626e(0x156)] === undefined ? A2868aa[A1d626e(0x155)][A1d626e(0x159)]['set']({ 'tooltipPercentageMode': 'dash_like' }) : A546370[A1d626e(0x156)] = A35e51f[A1d626e(0x156)];
        });
    }
    function A350bd7() {
        const A5e1807 = A1d0be9;
        A2868aa['storage'][A5e1807(0x159)][A5e1807(0x130)]([A5e1807(0x147)], A20d504 => {
            const A1af7f8 = A5e1807;
            A20d504['numberDisplayReformatLikes'] === undefined ? A2868aa[A1af7f8(0x155)][A1af7f8(0x159)][A1af7f8(0x16a)]({ 'numberDisplayReformatLikes': ![] }) : A546370[A1af7f8(0x147)] = A20d504[A1af7f8(0x147)];
        });
    }
    function A57db99() {
        const A21aca7 = A1d0be9;
        return typeof chrome !== 'undefined' && typeof chrome[A21aca7(0x14e)] !== A21aca7(0x137);
    }
    function A59c415() {
        const A290d9f = A1d0be9;
        return typeof browser !== A290d9f(0x137) && typeof browser[A290d9f(0x14e)] !== A290d9f(0x137);
    }
})()));