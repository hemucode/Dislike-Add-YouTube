(function (A337255, A370e72) {
    const A54114b = A7502, A24e710 = A337255();
    while (!![]) {
        try {
            const A39e2fe = -parseInt(A54114b(260)) / 1 * (parseInt(A54114b(265)) / 2) + parseInt(A54114b(132)) / 3 + -parseInt(A54114b(178)) / 4 * (-parseInt(A54114b(139)) / 5) + -parseInt(A54114b(191)) / 6 + -parseInt(A54114b(200)) / 7 * (-parseInt(A54114b(274)) / 8) + -parseInt(A54114b(192)) / 9 * (-parseInt(A54114b(304)) / 10) + parseInt(A54114b(150)) / 11 * (-parseInt(A54114b(252)) / 12);
            if (A39e2fe === A370e72)
                break;
            else
                A24e710['push'](A24e710['shift']());
        } catch (A4998a1) {
            A24e710['push'](A24e710['shift']());
        }
    }
}(A10ef, 649279), ((() => {
    'use strict';
    const A5b01da = A7502;
    var A595d61 = {};
    ;
    function A16feef(A51633f) {
        const A3abdef = A7502;
        return A271fc6(A2dfb75[A3abdef(226)])[A3abdef(155)](A51633f);
    }
    function A271fc6(A54ed69) {
        const Ac45eef = A7502;
        let A51f690;
        if (document[Ac45eef(236)]['lang'])
            A51f690 = document[Ac45eef(236)][Ac45eef(159)];
        else {
            if (navigator[Ac45eef(171)])
                A51f690 = navigator[Ac45eef(171)];
            else
                try {
                    A51f690 = new URL(Array[Ac45eef(157)](document['querySelectorAll'](Ac45eef(244)))?.['find'](A5eb10b => A5eb10b?.[Ac45eef(136)](Ac45eef(268))?.[Ac45eef(160)](Ac45eef(255)))?.[Ac45eef(136)](Ac45eef(268)))?.[Ac45eef(208)]?.['get']('locale');
                } catch {
                    A5ef3e1('Cannot find browser locale. Use en as default for number formatting.'), A51f690 = 'en';
                }
        }
        let A4c93b0, A2b3b79;
        switch (A54ed69) {
        case 'compactLong':
            A4c93b0 = 'compact', A2b3b79 = Ac45eef(197);
            break;
        case Ac45eef(298):
            A4c93b0 = Ac45eef(298), A2b3b79 = 'short';
            break;
        case 'compactShort':
        default:
            A4c93b0 = Ac45eef(246), A2b3b79 = Ac45eef(228);
        }
        const Ac84312 = Intl[Ac45eef(133)](A51f690, {
            'notation': A4c93b0,
            'compactDisplay': A2b3b79
        });
        return Ac84312;
    }
    function A2547ed(A382d83) {
        const A12b0db = A7502;
        return chrome[A12b0db(238)]['getMessage'](A382d83);
    }
    function A3cbb0c() {
        const Acea4d1 = A7502;
        if (typeof chrome !== 'undefined' && typeof chrome['runtime'] !== Acea4d1(231))
            return chrome;
        else
            return typeof browser !== Acea4d1(231) && typeof browser[Acea4d1(153)] !== 'undefined' ? browser : (console[Acea4d1(218)](Acea4d1(130)), ![]);
    }
    function A1792a6(A401847) {
        const Aec30a2 = A7502, A4fe8fd = new URL(A401847), A263d39 = A4fe8fd['pathname'];
        if (A263d39[Aec30a2(187)](Aec30a2(253)))
            return document['querySelector']('meta[itemprop="videoId"]')[Aec30a2(279)];
        else {
            if (A263d39[Aec30a2(187)]('/shorts'))
                return A263d39[Aec30a2(201)](8);
            return A4fe8fd[Aec30a2(208)][Aec30a2(300)]('v');
        }
    }
    function A47b199(A51c025) {
        const A32c0ba = A7502, Ae66ac4 = A51c025[A32c0ba(170)](), A5e77c1 = innerHeight || document[A32c0ba(236)][A32c0ba(311)], A5a5a2c = innerWidth || document[A32c0ba(236)][A32c0ba(249)];
        return !(Ae66ac4[A32c0ba(168)] == 0 && Ae66ac4[A32c0ba(277)] == 0 && Ae66ac4['bottom'] == 0 && Ae66ac4[A32c0ba(293)] == 0) && Ae66ac4['top'] >= 0 && Ae66ac4['left'] >= 0 && Ae66ac4[A32c0ba(221)] <= A5e77c1 && Ae66ac4[A32c0ba(293)] <= A5a5a2c;
    }
    function A160e94() {
        const A21b9bd = A7502, A4fdc9f = A1792a6(window['location'][A21b9bd(268)]);
        return document[A21b9bd(183)](A21b9bd(184) + A4fdc9f + '"]') !== null || document['querySelector']('#player[loading="false"]:not([hidden])') !== null;
    }
    function A5ef3e1(A36bada, A4ddbf8) {
        const A1cd3cc = A7502;
        A36bada = A1cd3cc(209) + A36bada, A4ddbf8 ? A4ddbf8(A36bada) : console[A1cd3cc(218)](A36bada);
    }
    function A26d1cc(A3c7417) {
        const A3c244a = A7502;
        let A4a1394;
        switch (A2dfb75[A3c244a(267)]) {
        case A3c244a(291):
            A3c7417 === !![] ? A4a1394 = 'dodgerblue' : A4a1394 = A3c244a(195);
            break;
        case A3c244a(282):
            A3c7417 === !![] ? A4a1394 = A3c244a(285) : A4a1394 = A3c244a(147);
            break;
        case A3c244a(194):
        default:
            A3c7417 === !![] ? A4a1394 = 'lime' : A4a1394 = A3c244a(263);
        }
        return A4a1394;
    }
    ;
    function A140233(A371041, A274fec) {
        const A2fb87a = A7502;
        if (!A3b39c9()) {
            let A42fcfb = document[A2fb87a(135)](A2fb87a(295));
            const A1374a4 = A2503ad()[A2fb87a(249)] + A54faa1()[A2fb87a(249)] + 8, A2723c4 = A371041 + A274fec > 0 ? A371041 / (A371041 + A274fec) * 100 : 50;
            var A86020b = parseFloat(A2723c4[A2fb87a(205)](1));
            const A5241c1 = (100 - A86020b)['toLocaleString']();
            A86020b = A86020b['toLocaleString']();
            if (A2dfb75[A2fb87a(264)]) {
                var A22bf0a;
                switch (A2dfb75['tooltipPercentageMode']) {
                case A2fb87a(188):
                    A22bf0a = A371041[A2fb87a(175)]() + A2fb87a(234) + A274fec['toLocaleString']() + A2fb87a(174) + A5241c1 + '%';
                    break;
                case A2fb87a(273):
                    A22bf0a = A86020b + '%&nbsp;/&nbsp;' + A5241c1 + '%';
                    break;
                case A2fb87a(206):
                    A22bf0a = A86020b + '%';
                    break;
                case A2fb87a(223):
                    A22bf0a = A5241c1 + '%';
                    break;
                default:
                    A22bf0a = A371041[A2fb87a(175)]() + A2fb87a(234) + A274fec[A2fb87a(175)]() + A2fb87a(174) + A86020b + '%';
                }
            } else
                A22bf0a = A371041[A2fb87a(175)]() + A2fb87a(234) + A274fec['toLocaleString']();
            if (!A4c9e96()) {
                if (!A42fcfb && !A9bd32()) {
                    let A5b18dc = '', A5b3e85 = '';
                    A2dfb75['coloredBar'] && (A5b18dc = '; background-color: ' + A26d1cc(!![]), A5b3e85 = A2fb87a(185) + A26d1cc(![]));
                    (document['getElementById'](A196a35() ? A2fb87a(283) : A2fb87a(214)) || document[A2fb87a(183)](A2fb87a(305)))['insertAdjacentHTML'](A2fb87a(129), '               <div class="ryd-tooltip" style="width: ' + A1374a4 + 'px' + (A196a35() ? A2fb87a(181) : '') + A2fb87a(158) + A5b3e85 + A2fb87a(294) + A2723c4 + '%; height: 100%' + A5b18dc + A2fb87a(286) + A22bf0a + A2fb87a(190));
                    if (A196a35()) {
                        let A2055b0 = document[A2fb87a(135)](A2fb87a(301));
                        A2055b0[A2fb87a(154)][A2fb87a(151)] = A2fb87a(262), A2055b0[A2fb87a(154)][A2fb87a(307)] = '10px';
                    }
                } else
                    document[A2fb87a(135)](A2fb87a(295))[A2fb87a(154)][A2fb87a(296)] = A1374a4 + 'px', document['getElementById'](A2fb87a(220))[A2fb87a(154)][A2fb87a(296)] = A2723c4 + '%', document[A2fb87a(183)]('#ryd-dislike-tooltip > #tooltip')[A2fb87a(259)] = A22bf0a, A2dfb75[A2fb87a(193)] && (document[A2fb87a(135)](A2fb87a(295))[A2fb87a(154)]['backgroundColor'] = A26d1cc(![]), document['getElementById']('ryd-bar')[A2fb87a(154)][A2fb87a(225)] = A26d1cc(!![]));
            }
        } else {
            A5ef3e1('removing bar');
            let A39ec57 = document[A2fb87a(135)]('ryd-bar-container');
            A39ec57 && A39ec57[A2fb87a(247)]['removeChild'](A39ec57);
        }
    }
    ;
    function A12ec96(A19cbad, A7dfc38) {
        const A56474e = A7502;
        let A349892 = document[A56474e(299)](A56474e(145)), A5e07b8 = document[A56474e(299)](A56474e(257));
        A5e07b8[A56474e(256)]('class', 'rating'), A5e07b8[A56474e(256)]('max', '5'), A5e07b8[A56474e(256)](A56474e(166), ''), A5e07b8[A56474e(256)](A56474e(154), A56474e(219) + A19cbad[A56474e(289)]() + A56474e(287)), A5e07b8[A56474e(256)](A56474e(270), A56474e(310)), A349892[A56474e(290)](A5e07b8);
        let A368ad1;
        A7dfc38 ? A368ad1 = document[A56474e(183)](A56474e(261)) : A368ad1 = document['querySelector'](A56474e(278));
        A368ad1['insertAdjacentElement']('afterend', A349892);
        try {
            let A2f422d = document['querySelector']('#ryd-bar-container');
            A2f422d['setAttribute'](A56474e(154), 'width: 190%; height: 2px;');
        } catch (A318355) {
            cLog('RateBar Not Present');
        }
        let A193649 = A56474e(177);
        document['head']['insertAdjacentHTML'](A56474e(129), A193649);
    }
    const A3f27cc = 'https://returnyoutubedislikeapi.com', Afbab13 = A5b01da(202), A4583c9 = A5b01da(229), A847c0c = A5b01da(248);
    let A2dfb75 = {
            'disableVoteSubmission': ![],
            'coloredThumbs': ![],
            'coloredBar': ![],
            'colorTheme': A5b01da(194),
            'numberDisplayFormat': 'compactShort',
            'showTooltipPercentage': ![],
            'tooltipPercentageMode': A5b01da(284),
            'numberDisplayReformatLikes': ![]
        }, A4b55d2 = {
            'likes': 0,
            'dislikes': 0,
            'previousState': A847c0c
        };
    function A9bd32() {
        const A15427b = A5b01da;
        return location[A15427b(198)] == 'm.youtube.com';
    }
    function A4c9e96() {
        const A2a690c = A5b01da;
        return location[A2a690c(251)]['startsWith'](A2a690c(254));
    }
    function A196a35() {
        const A4362d1 = A5b01da;
        return document[A4362d1(135)]('comment-teaser') !== null;
    }
    let Ae5c0f2 = new Object();
    A4c9e96() && Ae5c0f2[A5b01da(127)] !== !![] && (A5ef3e1(A5b01da(215)), Ae5c0f2[A5b01da(138)] = {
        'childList': ![],
        'attributes': !![],
        'subtree': ![]
    }, Ae5c0f2[A5b01da(127)] = !![], Ae5c0f2[A5b01da(242)] = new MutationObserver(function (A27f8f5, A529573) {
        const A398984 = A5b01da;
        A27f8f5[A398984(230)](A1ac6d8 => {
            const A457cdd = A398984;
            if (A1ac6d8[A457cdd(270)] === A457cdd(303) && A1ac6d8['target']['nodeName'] === A457cdd(232) && A1ac6d8[A457cdd(250)]['id'] === 'button') {
                A1ac6d8[A457cdd(250)][A457cdd(136)](A457cdd(213)) === A457cdd(167) ? A1ac6d8[A457cdd(250)][A457cdd(154)][A457cdd(203)] = A1ac6d8[A457cdd(250)][A457cdd(243)]['parentElement']['id'] === 'like-button' ? A26d1cc(!![]) : A26d1cc(![]) : A1ac6d8['target'][A457cdd(154)]['color'] = A457cdd(302);
                return;
            }
            A5ef3e1(A457cdd(134) + A1ac6d8[A457cdd(250)] + A1ac6d8[A457cdd(270)]);
        });
    }));
    function A3b39c9() {
        const A114637 = A5b01da;
        if (A9bd32())
            return /^\D*$/[A114637(258)](A58c273()[A114637(269)][0][A114637(183)](A114637(292))[A114637(199)]);
        return /^\D*$/[A114637(258)](A58c273()[A114637(269)][0][A114637(199)]);
    }
    function A6617e0() {
        const A2e8d5f = A5b01da;
        if (A9bd32())
            return A2503ad()[A2e8d5f(183)](A2e8d5f(227))[A2e8d5f(136)]('aria-label') == A2e8d5f(167);
        return A2503ad()[A2e8d5f(216)][A2e8d5f(210)](A2e8d5f(149));
    }
    function A9fb6c3() {
        const A1dcdb0 = A5b01da;
        if (A9bd32())
            return A54faa1()[A1dcdb0(183)](A1dcdb0(227))[A1dcdb0(136)](A1dcdb0(162)) == 'true';
        return A54faa1()['classList'][A1dcdb0(210)]('style-default-active');
    }
    function A123832(A490f35) {
        const A287ad8 = A5b01da;
        if (A6617e0())
            return {
                'current': Afbab13,
                'previous': A490f35[A287ad8(143)]
            };
        if (A9fb6c3())
            return {
                'current': A4583c9,
                'previous': A490f35[A287ad8(143)]
            };
        return {
            'current': A847c0c,
            'previous': A490f35[A287ad8(143)]
        };
    }
    function A54b90c(A174d7d) {
        const A30d246 = A5b01da;
        A335160()[A30d246(199)] = A174d7d;
    }
    function A2a463b(A25539f) {
        const A2be4dd = A5b01da;
        A3bbc2d()?.[A2be4dd(235)]('is-empty');
        if (!A3b39c9()) {
            if (A9bd32()) {
                A58c273()['children'][1][A2be4dd(183)](A2be4dd(292))[A2be4dd(199)] = A25539f;
                return;
            }
            A3bbc2d()[A2be4dd(199)] = A25539f;
        } else {
            A5ef3e1(A2be4dd(179));
            if (A9bd32()) {
                A58c273()[A2be4dd(269)][1][A2be4dd(183)](A2be4dd(292))[A2be4dd(199)] = A2547ed(A2be4dd(148));
                return;
            }
            A3bbc2d()[A2be4dd(199)] = A2547ed(A2be4dd(148));
        }
    }
    function A4e7aa6() {
        const Ae99d72 = A5b01da;
        try {
            if (A4c9e96())
                return ![];
            let A5b5d17 = A2503ad()[Ae99d72(183)](Ae99d72(245))[Ae99d72(136)]('aria-label')[Ae99d72(207)](/\D/g, '');
            return A5b5d17['length'] > 0 ? parseInt(A5b5d17) : ![];
        } catch {
            return ![];
        }
    }
    function Ad95f94(A1f9bdf, A1a7a20) {
        const Ada7a9e = A5b01da, A26e8b5 = A16feef(A1f9bdf[Ada7a9e(204)]);
        A2a463b(A26e8b5);
        if (A2dfb75['numberDisplayReformatLikes'] === !![]) {
            const A160f29 = A4e7aa6();
            A160f29 !== ![] && A54b90c(A16feef(A160f29));
        }
        A1a7a20[Ada7a9e(204)] = parseInt(A1f9bdf[Ada7a9e(204)]), A1a7a20[Ada7a9e(239)] = A4e7aa6() || parseInt(A1f9bdf[Ada7a9e(239)]), A140233(A1a7a20[Ada7a9e(239)], A1a7a20[Ada7a9e(204)]);
        if (A2dfb75[Ada7a9e(211)] === !![]) {
            if (A4c9e96()) {
                let Ad3f61b = A2503ad()[Ada7a9e(183)](Ada7a9e(141)), A223e3c = A54faa1()['querySelector'](Ada7a9e(141));
                Ad3f61b['getAttribute'](Ada7a9e(213)) === Ada7a9e(167) && (Ad3f61b[Ada7a9e(154)][Ada7a9e(203)] = A26d1cc(!![])), A223e3c[Ada7a9e(136)](Ada7a9e(213)) === Ada7a9e(167) && (A223e3c['style'][Ada7a9e(203)] = A26d1cc(![])), Ae5c0f2['observer'][Ada7a9e(131)](Ad3f61b, Ae5c0f2[Ada7a9e(138)]), Ae5c0f2[Ada7a9e(242)][Ada7a9e(131)](A223e3c, Ae5c0f2[Ada7a9e(138)]);
            } else
                A2503ad()['style'][Ada7a9e(203)] = A26d1cc(!![]), A54faa1()[Ada7a9e(154)]['color'] = A26d1cc(![]);
        }
    }
    function A290ef7(A318b9d) {
        const A4ff50d = A5b01da;
        A58c273()[A4ff50d(269)][1][A4ff50d(183)](A4ff50d(196))['innerText'] = A2547ed(A4ff50d(189));
    }
    async function A38c75c(A8f7736) {
        const Aab5145 = A5b01da;
        A8f7736[Aab5145(143)] = A9fb6c3() ? A4583c9 : A6617e0() ? Afbab13 : A847c0c;
        let A305999 = ![], A2022c0 = A1792a6(window['location'][Aab5145(268)]), A24d811 = A4e7aa6() || null, A2ac8d4 = await fetch(A3f27cc + Aab5145(288) + A2022c0 + Aab5145(222) + (A24d811 || ''), {
                'method': 'GET',
                'headers': { 'Accept': Aab5145(275) }
            })[Aab5145(309)](Aea5275 => {
                const A2a574f = Aab5145;
                if (!Aea5275['ok'])
                    A290ef7(Aea5275[A2a574f(308)]);
                return Aea5275;
            })[Aab5145(309)](A5a1738 => A5a1738[Aab5145(217)]())[Aab5145(164)](A290ef7);
        A5ef3e1(Aab5145(271)), A5ef3e1(JSON[Aab5145(212)](A2ac8d4)), A2ac8d4 !== undefined && !('traceId' in A2ac8d4) && !A305999 && Ad95f94(A2ac8d4, A8f7736);
    }
    function A6f7bd4() {
        A38c75c(A4b55d2);
    }
    function A11b9c7() {
        A184f68(), A54714c(), A3b0c65(), A5ee65c(), Afb6ead(), A507973(), A26dfc3(), A488781();
    }
    function A184f68() {
        const Aeb963f = A5b01da;
        A3cbb0c()[Aeb963f(186)]['sync']['get']([Aeb963f(140)], A2b2cd2 => {
            const A439c72 = Aeb963f;
            A2b2cd2[A439c72(140)] === undefined ? A3cbb0c()[A439c72(186)][A439c72(180)][A439c72(165)]({ 'disableVoteSubmission': ![] }) : A2dfb75[A439c72(140)] = A2b2cd2['disableVoteSubmission'];
        });
    }
    function A54714c() {
        const A4b221f = A5b01da;
        A3cbb0c()['storage'][A4b221f(180)][A4b221f(300)](['coloredThumbs'], A3fbad9 => {
            const A497366 = A4b221f;
            A3fbad9[A497366(211)] === undefined ? A3cbb0c()['storage']['sync'][A497366(165)]({ 'coloredThumbs': ![] }) : A2dfb75[A497366(211)] = A3fbad9[A497366(211)];
        });
    }
    function A3b0c65() {
        const A40e28b = A5b01da;
        A3cbb0c()[A40e28b(186)][A40e28b(180)][A40e28b(300)]([A40e28b(193)], A22636c => {
            const Aa17352 = A40e28b;
            A22636c[Aa17352(193)] === undefined ? A3cbb0c()[Aa17352(186)][Aa17352(180)][Aa17352(165)]({ 'coloredBar': ![] }) : A2dfb75[Aa17352(193)] = A22636c['coloredBar'];
        });
    }
    function A5ee65c() {
        const A185394 = A5b01da;
        A3cbb0c()['storage'][A185394(180)][A185394(300)]([A185394(267)], A2ceec2 => {
            const A13b23c = A185394;
            A2ceec2[A13b23c(267)] === undefined ? A3cbb0c()[A13b23c(186)][A13b23c(180)][A13b23c(165)]({ 'colorTheme': ![] }) : A2dfb75['colorTheme'] = A2ceec2[A13b23c(267)];
        });
    }
    function Afb6ead() {
        const A44e5f4 = A5b01da;
        A3cbb0c()[A44e5f4(186)][A44e5f4(180)][A44e5f4(300)]([A44e5f4(226)], A27384 => {
            const A28ac4f = A44e5f4;
            A27384['numberDisplayFormat'] === undefined ? A3cbb0c()[A28ac4f(186)]['sync'][A28ac4f(165)]({ 'numberDisplayFormat': A28ac4f(237) }) : A2dfb75[A28ac4f(226)] = A27384[A28ac4f(226)];
        });
    }
    function A507973() {
        const A42b22e = A5b01da;
        A3cbb0c()[A42b22e(186)][A42b22e(180)]['get']([A42b22e(264)], A5570be => {
            const A175137 = A42b22e;
            A5570be[A175137(264)] === undefined ? A3cbb0c()['storage'][A175137(180)]['set']({ 'showTooltipPercentage': ![] }) : A2dfb75[A175137(264)] = A5570be[A175137(264)];
        });
    }
    function A26dfc3() {
        const A5c8e1b = A5b01da;
        A3cbb0c()['storage']['sync'][A5c8e1b(300)]([A5c8e1b(266)], A551c36 => {
            const A3ccd29 = A5c8e1b;
            A551c36[A3ccd29(266)] === undefined ? A3cbb0c()['storage']['sync'][A3ccd29(165)]({ 'tooltipPercentageMode': A3ccd29(284) }) : A2dfb75[A3ccd29(266)] = A551c36[A3ccd29(266)];
        });
    }
    function A488781() {
        const A54b592 = A5b01da;
        A3cbb0c()['storage'][A54b592(180)]['get'](['numberDisplayReformatLikes'], A676b68 => {
            const A41790b = A54b592;
            A676b68['numberDisplayReformatLikes'] === undefined ? A3cbb0c()[A41790b(186)][A41790b(180)][A41790b(165)]({ 'numberDisplayReformatLikes': ![] }) : A2dfb75[A41790b(306)] = A676b68[A41790b(306)];
        });
    }
    ;
    function A58c273() {
        const A40c3f3 = A5b01da;
        if (A4c9e96()) {
            let A1794e9 = document[A40c3f3(137)](A9bd32() ? A40c3f3(152) : A40c3f3(128));
            for (let A27e529 of A1794e9) {
                if (A47b199(A27e529))
                    return A27e529;
            }
        }
        if (A9bd32())
            return document[A40c3f3(183)]('.slim-video-action-bar-actions');
        return document[A40c3f3(135)](A40c3f3(214))?.[A40c3f3(172)] === null ? document['querySelector']('ytd-menu-renderer.ytd-watch-metadata > div') : document[A40c3f3(135)](A40c3f3(214))?.[A40c3f3(183)](A40c3f3(163));
    }
    function A2503ad() {
        const A3afa34 = A5b01da;
        return A58c273()['children'][0][A3afa34(312)] === A3afa34(224) ? A58c273()[A3afa34(269)][0][A3afa34(269)][0] : A58c273()[A3afa34(269)][0];
    }
    function A335160() {
        const A2959f0 = A5b01da;
        return A2503ad()[A2959f0(183)]('#text') ?? A2503ad()[A2959f0(169)]('yt-formatted-string')[0];
    }
    function A54faa1() {
        const A1ca01c = A5b01da;
        return A58c273()['children'][0][A1ca01c(312)] === A1ca01c(224) ? A58c273()['children'][0][A1ca01c(269)][1] : A58c273()['children'][1];
    }
    function A3bbc2d() {
        const A3f5bed = A5b01da;
        let A3b621c = A54faa1()[A3f5bed(183)]('#text') ?? A54faa1()[A3f5bed(169)](A3f5bed(146))[0] ?? A54faa1()['querySelector'](A3f5bed(142));
        if (A3b621c == null) {
            let A5ce19e = document[A3f5bed(299)](A3f5bed(173));
            A5ce19e['id'] = A3f5bed(280), A54faa1()[A3f5bed(183)](A3f5bed(227))['appendChild'](A5ce19e), A54faa1()['querySelector'](A3f5bed(227))[A3f5bed(154)][A3f5bed(296)] = A3f5bed(281), A3b621c = A54faa1()[A3f5bed(183)]('#text');
        }
        return A3b621c;
    }
    function A45c9d8() {
        const A5dd4b2 = A5b01da;
        return document[A5dd4b2(183)](A5dd4b2(272)) ? !![] : ![];
    }
    ;
    function A743caf(Aed1103) {
        const A23398e = A5b01da;
        A2dfb75[A23398e(140)] !== !![] && A3cbb0c()[A23398e(153)]['sendMessage']({
            'message': A23398e(276),
            'vote': Aed1103,
            'videoId': A1792a6(window[A23398e(233)][A23398e(268)])
        });
    }
    function A254655() {
        const A161ceb = A5b01da;
        if (A45c9d8() === ![]) {
            if (A4b55d2[A161ceb(143)] === A4583c9) {
                A743caf(1);
                if (A4b55d2[A161ceb(204)] > 0)
                    A4b55d2[A161ceb(204)]--;
                A4b55d2[A161ceb(239)]++, A140233(A4b55d2[A161ceb(239)], A4b55d2[A161ceb(204)]), A2a463b(A16feef(A4b55d2[A161ceb(204)])), A4b55d2['previousState'] = Afbab13;
            } else {
                if (A4b55d2[A161ceb(143)] === A847c0c)
                    A743caf(1), A4b55d2[A161ceb(239)]++, A140233(A4b55d2[A161ceb(239)], A4b55d2[A161ceb(204)]), A4b55d2[A161ceb(143)] = Afbab13;
                else {
                    if (A4b55d2[A161ceb(143)] = Afbab13) {
                        A743caf(0);
                        if (A4b55d2[A161ceb(239)] > 0)
                            A4b55d2[A161ceb(239)]--;
                        A140233(A4b55d2[A161ceb(239)], A4b55d2[A161ceb(204)]), A4b55d2[A161ceb(143)] = A847c0c;
                    }
                }
            }
            if (A2dfb75['numberDisplayReformatLikes'] === !![]) {
                const A1ac688 = A4e7aa6();
                A1ac688 !== ![] && A54b90c(A16feef(A1ac688));
            }
        }
    }
    function A1426be() {
        const A4bad29 = A5b01da;
        if (A45c9d8() == ![]) {
            if (A4b55d2[A4bad29(143)] === A847c0c)
                A743caf(-1), A4b55d2['dislikes']++, A2a463b(A16feef(A4b55d2[A4bad29(204)])), A140233(A4b55d2[A4bad29(239)], A4b55d2['dislikes']), A4b55d2[A4bad29(143)] = A4583c9;
            else {
                if (A4b55d2[A4bad29(143)] === A4583c9) {
                    A743caf(0);
                    if (A4b55d2['dislikes'] > 0)
                        A4b55d2[A4bad29(204)]--;
                    A2a463b(A16feef(A4b55d2['dislikes'])), A140233(A4b55d2[A4bad29(239)], A4b55d2[A4bad29(204)]), A4b55d2['previousState'] = A847c0c;
                } else {
                    if (A4b55d2[A4bad29(143)] === Afbab13) {
                        A743caf(-1);
                        if (A4b55d2[A4bad29(239)] > 0)
                            A4b55d2[A4bad29(239)]--;
                        A4b55d2[A4bad29(204)]++, A2a463b(A16feef(A4b55d2[A4bad29(204)])), A140233(A4b55d2['likes'], A4b55d2['dislikes']), A4b55d2[A4bad29(143)] = A4583c9;
                        if (A2dfb75[A4bad29(306)] === !![]) {
                            const A2f7f71 = A4e7aa6();
                            A2f7f71 !== ![] && A54b90c(A16feef(A2f7f71));
                        }
                    }
                }
            }
        }
    }
    function A144f12() {
        const A736cfb = A5b01da;
        !window[A736cfb(182)] && (A2503ad()[A736cfb(297)](A736cfb(176), A254655), A54faa1()[A736cfb(297)]('click', A1426be), A2503ad()[A736cfb(297)](A736cfb(144), A254655), A2503ad()[A736cfb(297)](A736cfb(144), A1426be), window[A736cfb(182)] = !![]);
    }
    function A367b50(A2db5c9, A4f47fc) {
        const A71ec03 = A5b01da;
        A2db5c9[A71ec03(140)] !== undefined && A44c6d2(A2db5c9[A71ec03(140)][A71ec03(241)]), A2db5c9[A71ec03(211)] !== undefined && A2137f0(A2db5c9['coloredThumbs']['newValue']), A2db5c9[A71ec03(193)] !== undefined && Afb87ab(A2db5c9[A71ec03(193)][A71ec03(241)]), A2db5c9[A71ec03(267)] !== undefined && A4696a0(A2db5c9['colorTheme'][A71ec03(241)]), A2db5c9['numberDisplayFormat'] !== undefined && A44b7b1(A2db5c9[A71ec03(226)]['newValue']), A2db5c9[A71ec03(306)] !== undefined && A1256a1(A2db5c9[A71ec03(306)][A71ec03(241)]);
    }
    function A44c6d2(A3a5c04) {
        const A59c7ee = A5b01da;
        A2dfb75[A59c7ee(140)] = A3a5c04;
    }
    function A2137f0(A2c12db) {
        const A1a6348 = A5b01da;
        A2dfb75[A1a6348(211)] = A2c12db;
    }
    function Afb87ab(A2f51af) {
        const A5c3293 = A5b01da;
        A2dfb75[A5c3293(193)] = A2f51af;
    }
    function A4696a0(A2f0b23) {
        const A2e925a = A5b01da;
        if (!A2f0b23)
            A2f0b23 = A2e925a(194);
        A2dfb75[A2e925a(267)] = A2f0b23;
    }
    function A44b7b1(A2a815a) {
        const A4c2d03 = A5b01da;
        A2dfb75[A4c2d03(226)] = A2a815a;
    }
    function A1256a1(A29b34f) {
        A2dfb75['numberDisplayReformatLikes'] = A29b34f;
    }
    ;
    A11b9c7();
    let A3f5953 = null;
    function A86ac5d(Aea064c) {
        function A2f00b4() {
            const Af2d80e = A7502;
            (A4c9e96() || A58c273()?.[Af2d80e(172)] && A160e94()) && (A144f12(), A6f7bd4(), A3cbb0c()['storage'][Af2d80e(161)][Af2d80e(240)](A367b50), clearInterval(A3f5953), A3f5953 = null);
        }
        A3f5953 = setInterval(A2f00b4, 111);
    }
    A86ac5d(), document['addEventListener'](A5b01da(156), function (A32e88c) {
        const A59812b = A5b01da;
        if (A3f5953 !== null)
            clearInterval(A3f5953);
        window[A59812b(182)] = ![], A86ac5d();
    });
})()));
function A7502(A3a132f, A39a5e3) {
    const A10ef48 = A10ef();
    return A7502 = function (A7502f7, A5d18d9) {
        A7502f7 = A7502f7 - 127;
        let A1eaf62 = A10ef48[A7502f7];
        return A1eaf62;
    }, A7502(A3a132f, A39a5e3);
}
function A10ef() {
    const A1f793a = [
        'newValue',
        'observer',
        'parentElement',
        'head > link[rel="search"]',
        'yt-formatted-string#text',
        'compact',
        'parentNode',
        'NEUTRAL_STATE',
        'clientWidth',
        'target',
        'pathname',
        '12HqFIHR',
        '/clip',
        '/shorts',
        '?locale=',
        'setAttribute',
        'input',
        'test',
        'innerHTML',
        '844ytbhOg',
        '#app > div.page-container > ytm-watch > ytm-single-column-watch-next-results-renderer > ytm-slim-video-metadata-section-renderer > ytm-slim-video-action-bar-renderer > div > ytm-slim-metadata-toggle-button-renderer:nth-child(1)',
        '1px solid var(--yt-spec-10-percent-layer)',
        'red',
        'showTooltipPercentage',
        '470UpsghS',
        'tooltipPercentageMode',
        'colorTheme',
        'href',
        'children',
        'type',
        'response from api:',
        'a[href^="https://accounts.google.com/ServiceLogin"]',
        'both',
        '8dTzuml',
        'application/json',
        'send_vote',
        'left',
        '#top-level-buttons-computed > ytd-toggle-button-renderer:nth-child(1)',
        'content',
        'text',
        'auto',
        'neon',
        'actions-inner',
        'dash_like',
        'aqua',
        '"                       ></div>                 </div>               </div>               <tp-yt-paper-tooltip position="top" id="ryd-dislike-tooltip" class="style-scope ytd-sentiment-bar-renderer" role="tooltip" tabindex="-1">                 <!--css-build:shady-->',
        ';};background-color: transparent;',
        '/votes?videoId=',
        'toString',
        'appendChild',
        'accessible',
        '.button-renderer-text',
        'right',
        '"                     >                     <div                       id="ryd-bar"                       style="width: ',
        'ryd-bar-container',
        'width',
        'addEventListener',
        'standard',
        'createElement',
        'get',
        'top-row',
        'unset',
        'attributes',
        '7230Cqbcml',
        'ytm-slim-video-action-bar-renderer',
        'numberDisplayReformatLikes',
        'paddingBottom',
        'error',
        'then',
        'range',
        'clientHeight',
        'tagName',
        'exists',
        '#like-button > ytd-like-button-renderer',
        'beforeend',
        'browser is not supported',
        'observe',
        '1595265dNeYtc',
        'NumberFormat',
        'unexpected mutation observer event: ',
        'getElementById',
        'getAttribute',
        'querySelectorAll',
        'options',
        '323125hrOwed',
        'disableVoteSubmission',
        'tp-yt-paper-button#button',
        'span[role="text"]',
        'previousState',
        'touchstart',
        'label',
        'yt-formatted-string',
        'magenta',
        'TextLikesDisabled',
        'style-default-active',
        '5044831UkOhKV',
        'borderBottom',
        'ytm-like-button-renderer',
        'runtime',
        'style',
        'format',
        'yt-navigate-finish',
        'from',
        '">               <div class="ryd-tooltip-bar-container">                 <div                     id="ryd-bar-container"                     style="width: 100%; height: 2px;',
        'lang',
        'includes',
        'onChanged',
        'aria-label',
        '#top-level-buttons-computed',
        'catch',
        'set',
        'readonly',
        'true',
        'top',
        'getElementsByTagName',
        'getBoundingClientRect',
        'language',
        'offsetParent',
        'span',
        '&nbsp;&nbsp;-&nbsp;&nbsp;',
        'toLocaleString',
        'click',
        '<style>  .rating {     --dir: right;     --fill: gold;     --fillbg: rgba(100, 100, 100, 0.15);     --star: url("data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 17.25l-6.188 3.75 1.641-7.031-5.438-4.734 7.172-0.609 2.813-6.609 2.813 6.609 7.172 0.609-5.438 4.734 1.641 7.031z"/></svg>");     --stars: 5;     --starSize: 2.8rem;     --symbol: var(--star);     --value: 1;     --w: calc(var(--stars) * var(--starSize));     --x: calc(100% * (var(--value) / var(--stars)));     block-size: var(--starSize);     inline-size: var(--w);     position: relative;     touch-action: manipulation;     -webkit-appearance: none; }  [dir="rtl"] .rating {     --dir: left; } .rating::-moz-range-track {     background: linear-gradient(to var(--dir), var(--fill) 0 var(--x), var(--fillbg) 0 var(--x));     block-size: 100%;     mask: repeat left center/var(--starSize) var(--symbol); }  .rating::-webkit-slider-runnable-track {     background: linear-gradient(to var(--dir), var(--fill) 0 var(--x), var(--fillbg) 0 var(--x));     block-size: 100%;     mask: repeat left center/var(--starSize) var(--symbol);     -webkit-mask: repeat left center/var(--starSize) var(--symbol); }  .rating::-moz-range-thumb {     height: var(--starSize);     opacity: 0;     width: var(--starSize); }  .rating::-webkit-slider-thumb {     height: var(--starSize);     opacity: 0;     width: var(--starSize);     -webkit-appearance: none; }  .rating, .rating-label {     display: block;     font-family: ui-sans-serif, system-ui, sans-serif; }  .rating-label {     margin-block-end: 1rem; }  #ryd-bar-container {   background: var(--yt-spec-icon-disabled);   border-radius: 2px; }  #ryd-bar {   background: var(--yt-spec-text-primary);   border-radius: 2px;   transition: all 0.15s ease-in-out; }  .ryd-tooltip {   position: relative;   display: block;   height: 2px;   top: 9px; }  .ryd-tooltip-bar-container {   width: 100%;   height: 2px;   position: absolute;   padding-top: 6px;   padding-bottom: 12px;   top: -6px; } </style>',
        '44mPpQzl',
        'likes count disabled by creator',
        'sync',
        '; margin-bottom: -2px',
        'returnDislikeButtonlistenersSet',
        'querySelector',
        'ytd-watch-flexy[video-id="',
        '; background-color: ',
        'storage',
        'startsWith',
        'dash_dislike',
        'textTempUnavailable',
        '               </tp-yt-paper-tooltip>               </div>       ',
        '7050138wYWmsS',
        '6471FzpMiP',
        'coloredBar',
        'classic',
        'gold',
        '#text',
        'long',
        'hostname',
        'innerText',
        '5031572iLOgJm',
        'slice',
        'LIKED_STATE',
        'color',
        'dislikes',
        'toFixed',
        'only_like',
        'replace',
        'searchParams',
        '[return youtube dislike]: ',
        'contains',
        'coloredThumbs',
        'stringify',
        'aria-pressed',
        'menu-container',
        'initializing mutation observer',
        'classList',
        'json',
        'log',
        '--fill:rgb(255, 215, 0);--value:',
        'ryd-bar',
        'bottom',
        '&likeCount=',
        'only_dislike',
        'YTD-SEGMENTED-LIKE-DISLIKE-BUTTON-RENDERER',
        'backgroundColor',
        'numberDisplayFormat',
        'button',
        'short',
        'DISLIKED_STATE',
        'forEach',
        'undefined',
        'TP-YT-PAPER-BUTTON',
        'location',
        '&nbsp;/&nbsp;',
        'removeAttribute',
        'documentElement',
        'compactShort',
        'i18n',
        'likes',
        'addListener'
    ];
    A10ef = function () {
        return A1f793a;
    };
    return A10ef();
}