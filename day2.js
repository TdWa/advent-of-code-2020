const passwords = [
"1-7 j: vrfjljjwbsv",
"1-10 j: jjjjjjjjjjjj",
"9-13 s: jfxssvtvssvsbx",
"10-12 d: ddvddnmdnlvdddqdcqph",
"11-12 b: bbbbbbbbbrbnb",
"7-9 q: qqqqlqmqqq",
"8-11 z: zzzzzzzpzzlzzzzszzzz",
"12-13 l: llnlllllllllll",
"3-5 f: ffffwff",
"16-18 c: cccccccccccccccsccc",
"3-4 g: fsgkgffbdgqbzdn",
"7-10 m: mmrflrmmfm",
"18-19 w: wwwwwdwwwwwwwwwwwww",
"1-11 x: xvtcrlffxrxjlxbl",
"3-6 s: slsdqpwn",
"1-5 z: zzzzj",
"11-15 m: mmmmcmmmmmlpmqm",
"10-12 r: rrrrrrrrrrrh",
"13-16 v: bzjvkrvxlnvwvclg",
"2-3 d: dpdd",
"7-18 d: zddddnpdddddcdddddd",
"2-3 r: rrrrr",
"8-15 f: fffffffsffffffff",
"10-12 g: gtcmfblggngv",
"10-11 l: llllllllllc",
"12-14 n: nnnnnnnnnnnnnnnnnn",
"10-13 q: qqqqdwkqqqqldqds",
"10-11 r: rrrrrrrrrrr",
"2-3 k: khsk",
"8-9 r: srrrdrsrrbrrrr",
"5-7 n: wqrtnlqjnn",
"17-20 w: wwwswwwwwwwwwwwwgwxh",
"5-6 t: tmztjbtst",
"8-17 g: gxglgssgqzggpgggh",
"15-18 v: vvvvvvvvvjvvvvxlvz",
"1-4 c: lccvc",
"1-5 q: qsqqfqqqqqqqqqqqd",
"5-6 w: wxdqjfwkswfwwzt",
"3-8 r: rwtkslmrx",
"2-6 b: bbbbbbbbbbbbbbb",
"3-4 m: mjmm",
"9-11 s: ssszssssssl",
"7-15 m: ktmclnsnxzprkdcr",
"3-9 z: lzzzzzzzzzzz",
"1-10 g: hgdhggggpj",
"11-12 d: ddpdsndgddddb",
"3-8 p: kjhpchxpxfpgf",
"2-13 d: znwcbsdjgjrldpn",
"3-5 f: fdcmf",
"2-3 d: dxdddd",
"1-3 v: rgvfrgptwkrv",
"1-9 t: cwttttttt",
"11-12 n: nnnnnnnnncbngn",
"1-12 x: gdzgxdvhctkxfwq",
"4-6 f: fclbnf",
"12-15 j: jjjjjjjjjjjhjjj",
"8-18 d: ddrdddfldjlrldbdkd",
"1-12 n: hnhnnnnngqnnnnnns",
"4-7 c: cxgcntzcktkbrcvgfbq",
"6-7 c: cccccct",
"7-10 w: mlwcwgwwbcbwggwwgwwn",
"1-5 p: ppppp",
"1-16 r: rrrrrrrrrrtprxrrr",
"5-10 v: vvvvvvvvvvvv",
"12-13 z: wtzzkzzzjzzzmqzzzm",
"10-11 d: dddddddddjd",
"3-6 j: jjjjjj",
"1-7 x: wxxxxxvxxx",
"2-5 t: tmttt",
"2-5 l: djmbckfsscq",
"7-8 l: llllllltl",
"7-10 z: lzzzzkzmzwzzz",
"5-6 j: jjtjhj",
"9-11 l: lllltlllftlll",
"17-18 j: jjjjjjjjjjjjjjjjxgj",
"3-6 b: btpgbbbbdrbqn",
"7-8 t: ttttttqwt",
"12-15 c: pccmccsccccfcccc",
"14-15 v: vnvvvvvcvvvvvnmv",
"12-14 t: bttttttttttttntt",
"18-19 v: vvvvvvvvvvvvvvvvvktv",
"1-5 w: wwwwl",
"5-7 j: jdlbdjmjjrkc",
"6-7 s: qsssdgs",
"5-7 g: jcrtgxgg",
"6-10 l: lllllllllsl",
"18-19 b: bbbbbbbbbkbbbbvjbzbb",
"1-4 x: xxxglxl",
"14-16 k: kkkkkkkkkkkkkkkkk",
"1-5 x: zbjnxxglt",
"16-19 v: vvvvvvvvvvbvvvvvvvl",
"6-7 j: jjjjjmj",
"5-10 w: gswvknnpmmbx",
"1-4 b: bmqb",
"4-5 k: kkkrkkl",
"5-17 d: ddhjxmmddddhzddsrx",
"2-19 n: nnbjqmvlhnlfwxghnln",
"5-18 x: hjrqfdfrhzwjwsjxjn",
"1-2 m: mmmxm",
"7-8 b: bbbbbjbb",
"3-6 r: rrrrrw",
"4-6 w: lwgwwpkwww",
"3-8 n: nnnnjnnnnnd",
"2-11 n: nnnvsnmnvqnbl",
"15-17 x: xxxznxxxxxxxxxjxk",
"13-14 d: ddddqdfxdddddddddgd",
"14-15 v: vvvvvvvvvvvvvwv",
"7-8 x: xdxxxxxx",
"1-3 q: qkhqq",
"3-4 v: jxvmpkp",
"8-12 g: ggsfgggzggjggg",
"14-16 k: lkzgkkkkbkkkgkkkk",
"14-17 t: ttvtvtttttttcxfttttt",
"7-11 r: dwlrbrzrrrrjr",
"7-11 k: xkkzkpknknpkkzkzss",
"1-7 c: cpkxbtccxzrcpdl",
"11-13 w: wwwwwwwwwwwww",
"1-11 d: wdddddddfbdxhdfdd",
"5-9 d: djdhhjvjddddnjddsxqz",
"13-20 t: ttttttttttstrttttttt",
"9-11 l: qllkvnllhllllplz",
"2-4 m: mmxms",
"18-19 l: lllllllllllllklllkr",
"8-9 n: nnnnnnnhw",
"2-8 s: thsstssswssssss",
"9-17 n: nncsnnnndnnptnnnvhnn",
"6-8 r: rsnlrhrgsxrr",
"2-3 n: nntb",
"9-15 q: qqqqlgqqgqqvqqrq",
"7-8 l: llllvslv",
"10-13 r: rrrrrrrrrnlrd",
"3-4 k: kskwjvbcchtk",
"1-7 h: hqfgwhvshtqsgjjml",
"2-18 g: wzbxrzqshkdptwvjsg",
"5-7 n: nqnnmnn",
"2-18 g: ggtgbzgggggggggcgggg",
"2-4 c: ccgcwclcc",
"4-8 v: qjvfvmkvvtvh",
"2-4 d: lbcchdcbtlrhw",
"15-18 l: ltvlrzqlwlwlpvllll",
"1-5 p: mpvbfjpj",
"14-19 h: hhfhhhhhhhhhdshgvhh",
"5-8 p: ppphpqcrpwdxpxpfrppf",
"16-17 d: ddddddddddddddddd",
"11-12 n: nnnnnnnnnndp",
"10-11 f: wfflfwfffrfblsgfvrff",
"16-17 x: xxxxxxxxxxxxxxxfx",
"2-4 k: kkckk",
"3-5 g: tpggzglgzw",
"10-14 v: vvvvhqtbvmvvvzn",
"8-11 z: zzzzbtczzfvgzz",
"4-5 l: dsvlllgldllcb",
"6-7 b: bkbzbsb",
"2-5 m: xrmmmmmmmmdmmmmmm",
"3-4 f: fdft",
"2-3 j: jjpjl",
"5-8 g: ggjqmrgngdgmbz",
"4-6 x: xnxwzk",
"11-17 h: hhhhhhhhdhhhhhhhfhhh",
"5-13 f: fffffffffffffff",
"3-6 f: fvtxffff",
"1-3 m: sjmmm",
"15-16 s: ssssspssssssxssdsgs",
"4-8 f: ffkfbtsw",
"16-17 m: nhdqmnbqfkppbtmmmjx",
"8-9 b: bbbbbwbnbb",
"4-6 x: xxbxmx",
"3-13 r: glqxrpkmjwbnr",
"10-16 k: dkkqkkkgrklrdgtk",
"5-10 r: hjrrrrldrwrdvrrrr",
"11-12 l: cglcgxvlrrml",
"6-12 r: rrqrrrrfkrrgrrtrxz",
"4-11 b: bgvblbbtbnbbp",
"4-7 j: pjxlbjcjk",
"9-16 m: mmmmmmmmwmmmmmmm",
"3-8 g: wxzpbpdgznzgsgdqgpp",
"1-2 l: lwclllkldl",
"12-15 r: rrgdvrrtqrrqrrrfrr",
"6-7 l: lrljwzl",
"5-12 m: mtmmbmmmmmmnmm",
"14-15 x: xxxxxxxrxpxwdxzxxxxx",
"3-5 k: kjkgtr",
"1-5 x: xxxxl",
"1-6 c: lcfzghdmlrlcdf",
"4-5 p: pzpps",
"12-19 t: mttlttttthktttttttl",
"2-5 p: mpspppppppp",
"2-3 d: dddpxtb",
"11-12 f: hlbffffpkfffffzfffzf",
"6-7 s: lskssssjqsg",
"1-4 q: qnqqbqpmq",
"17-18 t: ptttttttttttttttsmt",
"3-4 x: xnmx",
"1-4 s: ssssbh",
"6-16 b: bbbbbcbbbbbbbbbfb",
"1-14 f: fwccgsfxljvzwbls",
"2-3 b: bbfk",
"5-9 d: ddndxdddfd",
"5-10 d: ddcddddddd",
"9-14 b: gpbbqbbbcqbbbf",
"10-12 l: wlllllqllllllll",
"1-8 n: nvwdffhbdlkv",
"13-18 c: cwcccccccccczcccjc",
"1-4 n: pnnmn",
"7-8 x: xzxxxxks",
"17-18 p: fpwvhpqppcppppppplp",
"2-4 d: bddsjwctx",
"12-15 n: nnznnnnnnjnwknnn",
"7-12 l: wlllllllllrrlzzllgj",
"2-8 j: cdjfdjhjjsfj",
"7-10 k: kkkwkkjkkc",
"9-10 b: bbmbbbdtttbbb",
"7-10 k: bqhccksknk",
"3-4 f: zktp",
"3-9 r: twjjkprkt",
"3-4 p: pntp",
"7-10 z: zzzzzzzzzzzz",
"5-9 q: qtmqxtqkqqxbl",
"14-15 d: dddddddzddddddddd",
"6-8 b: bbbbbcbbb",
"1-5 j: jjjzmt",
"5-13 z: hqsfqszcwngzzvs",
"15-17 k: kkkkkkkkkkkkkpskk",
"3-7 f: fffnkfd",
"8-11 g: gjgggjxggggg",
"5-6 w: fqkswjjwkjnhwcz",
"3-4 z: pgzzzhthd",
"7-19 p: pppppplpbppppspszpp",
"2-3 w: rwqxwv",
"1-3 f: fgjfpnbvs",
"4-9 s: wrxwxvfxlxvtsjswbns",
"8-13 b: jbzldnnqbmghncwxbxvc",
"1-4 m: rmmm",
"6-7 x: txxbsjx",
"16-17 c: ccccccccccccrcccxc",
"6-8 d: ddqdddrxdjd",
"9-13 j: zvzxjdwnjpqmz",
"7-9 q: qqqqqqvqqqq",
"8-13 n: nnnnnnncnnnld",
"2-9 m: mmwqmzsvbmmmttm",
"16-18 l: lpqzlhlljzplmllffs",
"2-6 v: mcbjdxk",
"4-6 b: vbpbnbqbjncxv",
"7-17 c: rctcpcccbphccccvc",
"15-16 c: chccccjcckccwckcccc",
"3-5 p: rppgpcvxpdvdp",
"2-5 t: lgktttd",
"12-13 b: bbbdbbrblmbbsbbbbbt",
"9-11 s: rqsdbzdsshgsj",
"3-7 g: grgfjfkkslpbg",
"7-10 n: qnnlgnknnnnnnn",
"17-18 c: ccccccccdrccccccwcc",
"7-8 g: gggggggstgg",
"2-4 q: dvxq",
"18-19 s: sssssssssssssssssss",
"5-14 t: ttlvtttttftzfvt",
"6-8 m: qsqmvmmmphnnmm",
"10-12 x: xfxxxxxxxgxx",
"9-14 m: mmmmmwmmmmmmmpmm",
"11-13 l: lllxllllllllll",
"4-5 m: mmmmf",
"14-16 k: kkkkkkkkkzkkkkkt",
"8-11 p: ppppppptpphp",
"2-5 v: kbgmr",
"3-4 h: hhcnh",
"2-9 s: xljsstszh",
"2-6 v: vvxvdhgx",
"4-5 m: zmmmsmmmmp",
"16-18 b: bbbbkbbbbbbbbbbbhf",
"1-5 p: qppplp",
"3-6 b: bjbkrgvb",
"1-3 d: zddbwr",
"4-20 d: dddddbdmqhdsdddddmdd",
"4-7 r: rrrmrrj",
"6-8 t: tttttdtttt",
"2-4 w: fxwhh",
"10-12 l: llhlllllllll",
"11-13 j: jjjtgjbjjjfjcsjjs",
"3-4 m: mmfmmc",
"7-9 q: qgtzvqcqq",
"6-14 x: dvkqqfnvvqxvwb",
"2-3 d: wnzdj",
"1-3 l: lvxfn",
"4-5 r: rprzr",
"10-16 k: zkklmdvkkkkmzvfv",
"16-18 h: hhhhhhhthhhhthhhhvhh",
"5-6 b: bnjbbr",
"8-11 t: ttctjttvtttt",
"2-6 r: rrrmrr",
"1-10 w: cwfbkwwdkwgwgnsnhz",
"13-18 b: bdkmbbbbmbvbpbbbblbb",
"5-6 k: fkkkkb",
"1-9 j: jjjjjjjjtj",
"1-2 h: hhhpq",
"14-16 v: vvvlvvgvvvvvvmfkn",
"5-6 x: xxxxrnx",
"12-14 h: hhhhhbhlhhhhhhhkhqh",
"15-18 s: ssgrgdbtztjtcjsphs",
"18-19 h: hhhhhhhhhqhhhhhhqbxh",
"3-4 b: hbld",
"16-17 x: xxxxxztfxxvsxxhhc",
"14-19 s: ssssssmsssssswsmsxs",
"6-7 p: pppppsppt",
"2-3 c: ccclncs",
"1-5 v: tvvvvvv",
"5-8 x: kcxxxxqxxsxxgx",
"1-3 w: wbqw",
"11-14 g: ggggggggggsgggg",
"1-5 m: kqsmlqtb",
"7-8 j: zjjjhxjj",
"10-11 v: vvvvvvvpvvbv",
"6-14 q: tgqqtqjdqwqvqz",
"1-2 g: gngg",
"7-8 g: gcgggqmgglg",
"4-9 h: hhhhhhhhthhhhhhhh",
"7-13 r: hfzvpnrmlrbrl",
"9-12 l: llllmflrxlll",
"2-7 m: mwgpnpthsrzqdggkdw",
"2-8 s: sssssfsss",
"7-12 c: ccxncchccccc",
"8-14 c: czcccczpcxxgcc",
"3-6 v: dqtvhvpv",
"12-14 v: vvvvvvvvnvvvvvn",
"4-7 w: wwwwwws",
"11-16 c: cccccpcctznshccc",
"1-4 c: rfpcf",
"5-10 p: pptpvplmpdrps",
"16-17 q: rdwmkhrjbpftdszqqbc",
"3-4 t: tgvt",
"4-7 r: rrnrhnrrwrsrhhrrrtp",
"13-15 t: tttvttttttttttstt",
"11-12 x: xxgxxxxpxxxxxz",
"1-10 g: xzbmfkzhdgfqqmwgxgrg",
"18-19 x: xxxxxxxxxxxxxxxxxxx",
"7-9 s: svsssssksnrsx",
"12-14 p: pppmppmpppppphdppqvz",
"4-5 w: wwwwxwwwww",
"6-8 k: kkkvhjkpk",
"4-5 j: jjjjj",
"11-17 n: dnnnnnwrnnrnhnhnn",
"1-5 h: mhhhh",
"6-7 m: tqjhgmstv",
"11-18 w: wjpczxkzmrwjqhhzfp",
"12-13 m: mmgmmmmmmmmdmdlrm",
"1-5 l: vlhblllltlr",
"8-12 h: hphhchphjhhhhh",
"3-4 m: fmmssm",
"11-12 d: ddddddddddrd",
"6-7 m: mmmxmmj",
"1-7 h: twhhqhhnhlzx",
"3-5 w: wbwwx",
"4-7 b: bbxbbtnhhcbbbb",
"8-10 m: mmdrwjmmpmmv",
"15-19 s: sssxsssfsssssdbsbsss",
"9-17 r: rrrrsrrrqrrrrkrrpr",
"7-9 t: rdkctlttt",
"2-5 j: jjjjjjj",
"1-10 p: ppbgmjpwtpslzqp",
"9-17 n: hsbbnwgvbmvrrssnn",
"9-16 f: fbfffnfckffffffk",
"4-6 m: mmmmmk",
"5-9 n: njnnnnnnmfn",
"11-13 z: zdzzzzfzzzzzn",
"5-9 d: gwdbddddddf",
"5-7 x: xxxxhxx",
"3-10 s: hhssssspsgsswcc",
"6-10 d: dddddfddddd",
"15-18 l: gztzhfflpnkxhglmll",
"6-16 l: lllllllshllllglwll",
"4-9 t: tttkttttrtvtttqtz",
"2-4 n: zcnnclg",
"4-5 j: jzjjjj",
"9-12 p: prppppppnpnpq",
"13-15 p: mzrmqhnfpbxnwpppgtp",
"2-5 f: gfffr",
"1-3 n: nbnwnx",
"19-20 j: jjjjjjjjjjjjjjjjjjmj",
"3-9 p: pgpkphphpgp",
"5-6 w: twpwwr",
"3-6 w: brvnxhpwwwbn",
"18-19 b: bbbsbbbbbbbbmbbbbrbb",
"3-11 v: rxvcvbrggftgrzbhq",
"9-10 q: qqqtqqqplw",
"6-7 k: dtkgkfk",
"12-19 n: bnnbpnlvnhwnnnnnxsf",
"6-7 p: nppppjpp",
"4-7 s: ssssssswszswsssssss",
"17-18 n: nnnnnmnnnnnnnnnvznxn",
"2-4 q: qqwqvv",
"6-9 z: zdfzzqzdw",
"4-6 s: svssfwfslmnxsd",
"3-5 b: gmzbbp",
"1-4 l: tbll",
"1-4 h: htzhpdgzlhjbqwkjk",
"1-4 t: mtttvrpt",
"5-6 p: cmxkgpmspqq",
"8-10 w: rwcpbwwvtvzhwwpwwwr",
"11-12 w: wlwnhqwqwdwb",
"1-4 p: ppbjcprpp",
"10-12 s: spskpmsxhqssgh",
"4-5 n: nnzns",
"11-12 g: gwfgggggpgdghgg",
"2-3 d: hdxzdsd",
"3-4 g: gghj",
"2-4 m: mmlcmmd",
"11-12 t: ttttmttttttmt",
"9-12 w: wmghwwwdtwww",
"7-8 m: lzhpnrmz",
"1-2 n: nnbn",
"1-3 c: cltmcdlcc",
"5-7 c: rmcmdxgxjq",
"5-6 v: vvfvqt",
"10-12 n: nnnnnnnnnnnnnnnn",
"6-10 v: vvnfsvvvnqvjjvgptq",
"10-17 b: bpbfbbbbbbqbbbbrbbbb",
"4-12 v: vvvvvvvvvvvlvvvv",
"8-14 n: bjfgpkpmnsvnnb",
"7-8 w: wdwwwwwkw",
"11-14 z: zzcwzzzzzvhzzzz",
"12-15 z: mzzzzlzzznzlzzgzzzzm",
"5-6 v: qnvmnv",
"2-7 w: wbwsnww",
"5-11 q: kqqpcqqpjmnlq",
"13-15 l: plljllllllllwldlc",
"4-5 l: kfcnbkhrnvtnrwn",
"11-16 b: wmbfpdbdbbrbbbbdbbb",
"2-8 t: jwswmtttg",
"2-14 l: khqxxhmlndmdrtdxkbf",
"1-6 f: ffdfprffvfkc",
"5-10 c: cjcmqtdvhc",
"1-8 v: vvvvvvvzvv",
"2-3 b: xvjbs",
"9-11 j: jvrjjcjjjjjvj",
"7-12 w: wjwwwwwnwfwwww",
"3-4 t: fppttghptsfkfdht",
"4-5 l: nkllm",
"7-9 j: wwlhsjnsj",
"10-12 v: vvvlqkvbsdvvvwvjvvtv",
"16-17 r: rrprrrrtrrrqrrrrrrr",
"6-7 x: xqxxxdx",
"6-14 x: mxlxxxxxtxxkbwxxxxx",
"4-5 l: llsvl",
"5-12 f: fbbvffxzfnfkwtn",
"4-7 n: nnvtnhnnncbtnndr",
"2-9 h: mhzfgjhcknskxqdk",
"14-18 l: lqllllclllllqpllllll",
"3-4 s: ssspss",
"5-12 z: zzzzzzzzzzzwmz",
"18-19 p: ppcpppwppppppppppvgp",
"3-4 z: qzzzzz",
"5-7 x: xrxxxxx",
"3-5 z: zzzjr",
"3-4 j: jjfjj",
"5-6 p: pfpppnp",
"3-4 j: jjnm",
"8-16 m: mmmmmcmmmmmmmmmm",
"2-6 d: tddddbdqdd",
"3-8 d: qkflfddfdrvsj",
"8-14 m: cwfmsqvmllbdnjvgp",
"3-7 h: xhjtdhhc",
"1-7 v: vjvmvvd",
"6-10 j: jjjjzjjjjfjjjjjr",
"8-9 x: xbxxxxgxxqx",
"3-5 f: fffpf",
"2-8 n: nnlnbndn",
"4-13 v: vvvqzvvvfvvvvv",
"4-7 s: tsrcslsrdx",
"3-6 h: lhhhpr",
"1-5 r: rtvxw",
"3-5 m: mqmkvmmm",
"3-4 p: ppmp",
"2-3 j: jjfj",
"2-13 v: vgzvvvvvvwvxdg",
"14-15 q: qxqqqqqqqqqvqwqqq",
"9-12 h: cjzzthfchxth",
"3-7 p: pbspspkp",
"8-9 n: vnnngnxlnnnn",
"10-16 g: dngspgdnnggggsgqrg",
"5-6 n: nnnnnqn",
"3-4 l: cwtl",
"1-6 r: hrrrrrr",
"2-5 b: blwbz",
"11-18 d: ddddddtdddxdddddddd",
"3-6 k: lkxkkqks",
"15-17 j: jjjjjjjjjjjjjbqsjf",
"13-15 k: sxlplkjfqwmpkjk",
"9-10 l: llllllllmlbl",
"5-10 g: ggsgxggggg",
"1-2 f: twwf",
"2-4 d: kwdd",
"4-13 g: cwczjzgqtlhsg",
"12-14 z: kckzccljvrvzgz",
"9-12 t: wtttxttttxttdt",
"14-15 m: zmmmmmmmmmmmmbw",
"3-4 r: frrtwr",
"4-7 k: ckkmkkdkkkkk",
"16-19 k: clzjfkkdljgnskrfjkk",
"6-8 w: fwphnwzb",
"14-15 p: pppppjpppppppbbp",
"6-8 q: qqqqqqqz",
"10-11 j: gdrjbjzzfjqwvntppjtb",
"14-15 m: hmmmmxmmbmmmmmmmmm",
"8-12 b: bbbbtqggbsbwbsbb",
"1-2 g: gcgzl",
"1-2 j: jmwv",
"3-5 q: qqqqwqq",
"3-6 b: bbcbbbbb",
"5-6 l: lqlllfl",
"6-9 f: ffffffffsffmffff",
"11-20 n: nnnnnnnnnnwnnnnnnnnn",
"3-4 w: qvfn",
"2-8 x: zzxxjxxxx",
"3-4 r: pbcrr",
"10-12 t: ttvgcttctjwt",
"8-12 g: gnggggvzgggg",
"7-9 z: zzzzzzzszz",
"4-5 c: ncclccc",
"5-6 t: ttttttt",
"4-6 q: qtqzjq",
"10-20 p: hqxflpbmpppspqhptmpp",
"2-5 k: bblpkkkkkjlgvzsrhtvk",
"2-7 l: clllpvlzvdnllflll",
"9-20 p: pppppppqhppppppppppp",
"12-13 v: vvmvjkvhvvvvdpnt",
"13-15 x: xxxxqxsxzxxncxxxxx",
"11-13 n: nnnnmtnsbnnnp",
"10-13 m: mqmmmmwfmvmmmmmm",
"5-8 b: bbbbkbbb",
"11-12 h: hhhqhhhhhhmgh",
"4-6 v: vvvvvqvvvv",
"2-5 j: rsbnjnxrmhm",
"2-8 j: jjjjjjjhj",
"5-7 q: rqzkpgj",
"6-12 b: bbbbbbbbbbbzbbb",
"2-4 h: hhqv",
"4-6 c: gkxfcwsctcz",
"1-6 t: sfqlpthhp",
"7-8 g: gfpgggrzg",
"1-5 v: vvvvvvv",
"5-6 q: qqsqllqq",
"15-16 b: bblbbbbrbtbbmbbbz",
"5-12 t: btsttjttttbgrwrrlbg",
"7-12 v: qvvvjvvcvvvpvvvv",
"19-20 l: nvlxxlxvllllcsdnwldl",
"9-13 w: wwwmwwwhwwwwvww",
"2-4 x: lxldmxxhkzxrpzbh",
"11-12 n: nnnnnnnnnnjn",
"3-8 b: xbflzhbbbbbbbbbbbbbb",
"15-18 s: spssdnxffsksmxssbt",
"4-5 c: cnjccxcc",
"1-2 w: cwww",
"7-8 d: cddlddwddgdl",
"9-12 p: pccppppchrpphppppp",
"3-7 x: drxcxcx",
"9-14 k: jdkmxbkrxnnnrkkw",
"6-18 z: frpczwtszjbgfdszzj",
"1-4 n: qfnjfn",
"12-14 g: zggggphlgvghggggg",
"5-15 l: wfkwtnsllxlzqzq",
"2-12 t: tfvtrmtttttpttmttttt",
"2-4 c: mvjct",
"4-10 x: mcxlhxvpkdbz",
"7-18 w: wwxzwqxbwwswwjfmsw",
"3-4 s: jssnss",
"9-11 j: jzjjjjjjjjq",
"1-16 s: dssssssssssssssss",
"3-10 d: cndlgskktdl",
"4-9 c: rcwlcgccccz",
"11-13 w: wpwwwwwwwwwzwwww",
"5-6 v: vvvvkh",
"8-13 z: zzzkzzzzzzklzzzdzz",
"2-11 v: dpqghsvhvsvfq",
"9-13 f: vrjfflzfjfsfszrxftff",
"11-14 j: jjcqcfhxspjjjgsjvgj",
"2-6 l: lcldhcfv",
"7-10 l: hjrcprhcll",
"4-6 q: sqqqvq",
"1-2 g: fggzc",
"1-9 k: skkgknkdnklnkcsmp",
"3-4 d: dbdv",
"8-11 m: mnmmjmmmmmm",
"2-4 d: ddgbhdrdn",
"1-3 v: hvvv",
"6-7 f: fffffzt",
"4-6 t: ltttvs",
"2-3 n: npnrr",
"1-19 b: pbbbbxbbbgbbbjbbbsbv",
"9-20 w: mwwwwjwwzwqwbwwwqwkw",
"11-12 z: zzzzzzzzzztjz",
"1-6 z: zzzzzdzznzm",
"4-5 n: nnsnn",
"7-10 v: qwkvvzvwvmvmvkvvvwvl",
"2-5 x: vqgzdvbqrdxpfnzzjxv",
"11-14 j: jjjljjjjjjjjjz",
"1-3 n: jndnn",
"2-4 l: lbxxlllcv",
"5-6 s: sssskg",
"11-14 l: llllllllllsllll",
"2-5 s: swdszr",
"2-4 q: qpqc",
"9-11 h: ghsbhhgzhgxzhfhhhhhh",
"11-12 v: vvvvvvvvvvvn",
"2-3 r: rrhr",
"10-11 w: gmwtmnppnqz",
"9-13 f: fffffpfrffffff",
"1-6 c: cvtwcptzkq",
"11-13 k: zkkkklskkkkkskkk",
"3-8 p: ctpkfpspplpbz",
"9-10 b: bbbbbbbbbbb",
"6-14 d: dddddddddddddddd",
"8-9 d: mdddrddzdd",
"6-7 v: vvvvvvxvvvvv",
"4-6 g: gggtntghnvgrfj",
"4-8 p: zbpmzjfplphp",
"5-7 h: hhhfhwm",
"6-19 g: jbkxvgqzdngcclvlhxgg",
"8-10 q: qhpmqqwfqnbthqwq",
"1-3 h: hhrpg",
"7-10 j: jmjkjjgcrj",
"2-3 g: gkgggg",
"3-4 l: lsql",
"7-13 c: cckccccccccccc",
"5-9 v: zcfvxvnvbvvccqvkvv",
"4-5 h: hqchnh",
"4-5 v: vfzvrfvkv",
"2-3 f: ftlf",
"17-18 r: rqrrqrrnvrsrrrdrrt",
"5-8 w: pwwnwhwwvwwww",
"3-13 b: hwhhtvcjbgcpbrqpg",
"6-14 z: zzzzzgzzzzzzlz",
"3-4 s: zssr",
"4-7 s: lfstsssjs",
"7-9 q: xqqqqqnqqq",
"11-14 g: gggggggggggggg",
"5-15 m: mzjpmvmpnfkpmtrj",
"1-2 z: bzzzzzzzzzz",
"3-5 b: xbbbmp",
"5-8 m: mmmxxxmm",
"13-14 b: bbbgbbbbbbbzbb",
"5-6 s: sstsxfssgvn",
"2-10 w: dpwdwswdwwwwn",
"4-6 v: xvnvvv",
"1-3 d: ddqd",
"5-8 f: ftzffftgfgkhjff",
"10-15 g: gggggggkggggggg",
"10-16 h: hfhhhzhbthhhxhhhjh",
"2-10 n: ntnnnnnnnnn",
"8-9 d: dqxcnxsdwmbd",
"1-3 z: zlzqzzsnlrt",
"3-8 b: cgtlsbbbbn",
"3-5 k: kwkktt",
"5-10 s: cscdhgsxns",
"1-13 w: pwwwwwwwwwwcgswwwwww",
"1-4 d: dddd",
"17-20 v: vvvvvvvvvvvvvvvvvvvn",
"6-10 k: kkkkdkrjkqpkvckc",
"7-8 g: fgglcggg",
"5-10 q: qqqqssqqqqq",
"12-13 j: jhjjjjjjmjjjsjj",
"3-4 c: czlx",
"2-7 g: ggmjwww",
"3-11 f: mdfbtbjvftnsvnnlmzg",
"2-6 b: clqwlbslldxmh",
"3-6 b: bcbbxbk",
"5-6 d: grdrfrdddvcq",
"14-18 c: ccctccjccccccwvccc",
"5-6 h: hrhhhp",
"1-7 b: bbbbbbbb",
"1-8 w: mwwnwwww",
"4-5 j: jjjlcjj",
"6-16 m: mmcmmmxmmzmmrmmfmmm",
"7-12 p: ppppptpppprp",
"3-8 s: sfrssssspfkskdbdsq",
"14-19 x: xxhrbxtjxwxcxgxxvpxx",
"3-10 t: tttvtqkltrtgttttzstg",
"2-6 r: xrgrjrlfjkf",
"9-10 g: ggggggggjq",
"2-5 b: pblbzcbrsjnbl",
"9-11 z: zhzcnzfclxrbjzzzzzz",
"7-8 z: zzzzzzzk",
"4-5 q: qqqqg",
"1-6 b: drfdfmkjhb",
"12-16 x: mjkxsmrcvjlkxbtxld",
"7-11 m: nmfflxpxkqmpdswsm",
"2-8 n: rnnbqkfqkl",
"11-15 l: rgpmvlrkgqnglkgbqpq",
"4-7 g: gggfgjgg",
"5-10 h: hhhhhmgwhhdphc",
"16-18 s: dzzkhzpsssqcspdsgs",
"2-8 c: cccccccq",
"8-9 s: hssstqksksss",
"2-13 l: zlxbldnvnnznswl",
"6-7 x: xxxxxxxzx",
"2-7 h: thzhwhxthrh",
"3-4 j: jmjt",
"1-2 s: sswf",
"8-15 n: nnnnnnnnnnnnnnw",
"2-5 s: xssws",
"6-7 p: pppppqtp",
"2-6 b: twvbdbqbd",
"1-2 l: lwdpflk",
"11-14 k: kkkrkkkkkdjkjpk",
"4-8 x: vhfxdxxsxxxv",
"13-14 p: pplnppppppprmppp",
"16-17 s: xqqkssgpsjpqsstks",
"1-4 k: kdkkk",
"11-12 c: glqzcxcsctcl",
"7-12 h: hhhhhshhhhhhhh",
"6-13 l: mlqsllllbrlcrllbcllv",
"8-13 z: zgwzzczzzzzlzpx",
"6-7 v: qqqvxdgprhxv",
"3-5 x: xxbxxx",
"8-11 h: hhprrhnttdhhxshgqhhl",
"2-3 p: rpppgpp",
"6-8 d: dkddsgddddd",
"2-3 k: xkkknk",
"8-12 w: swrwzzcwdrgjh",
"9-10 k: kmkkkpkklkkkkkk",
"13-15 c: cccccccccccchcwc",
"3-4 g: gjgn",
"7-8 q: qqqqqqqvq",
"11-17 t: hbtmtpmzcfqqlcshppf",
"3-5 l: lllbk",
"4-6 f: fffffjfffmff",
"15-16 x: xxxxxxxxxxxxxxwxx",
"4-5 q: fqmnjq",
"7-13 w: wwswrpkwqnwwmwbzkkw",
"1-2 g: glxdfx",
"8-12 l: lslllllmlgglll",
"2-3 l: rgghlvwlvbthql",
"13-16 m: mmmrmmmmmmmmlmwnmmsm",
"4-5 n: nnnnn",
"4-20 p: dvfpgxspwwphpgfczzzz",
"5-7 r: rrrrrrc",
"5-12 h: hlhshhhhdhhhh",
"1-4 s: pssb",
"10-14 q: qqgblzqmnnqqqq",
"3-4 d: lclh",
"3-10 k: kkvkklkkklckkdkl",
"4-5 k: cdjzvk",
"4-5 m: mmmrm",
"3-7 l: hhzwdglntjlhdmfkqjf",
"8-18 n: nnnnnnntqnnhnndnnl",
"2-8 k: kxkbqkgkkmlkk",
"1-4 w: wwpwwfmhwhs",
"1-8 r: kbplbrnrdd",
"4-11 w: bhlwpttwbkwnkhcdkc",
"11-15 j: bqbmrjtwrtjqsppm",
"1-8 v: vjvtvwwbgc",
"4-5 m: wcjmj",
"4-11 f: jtlfffrnffhfp",
"9-11 j: jjjjjjjjzjjjx",
"3-8 v: svvvvqvlzvvnvz",
"5-7 v: vvvvrvvtvpv",
"8-9 s: srzhssrbssssvvsxlm",
"7-8 p: mjphpdtpn",
"4-5 d: qzxddrthrdljdrqslzdd",
"7-10 d: ddddddpdvsd",
"2-6 x: txdxbxxmxrw",
"6-16 m: zdbmhmmmmkmmrmmjw",
"3-4 v: vtvp",
"4-13 b: bbttmmrrzcgxbc",
"1-3 j: fdjb",
"11-13 k: kkfkkkkkkkkzkk",
"6-9 k: pbgxlkwwkwsp",
"5-12 t: ttqztdtttttt",
"5-10 q: qqqqqqbggq",
"4-5 p: ppllr",
"1-3 b: tsvxbgbkmm",
"4-8 b: bhbzbbgb",
"1-4 w: jlwsww",
"15-18 l: llllllllllmlllllnw",
"6-13 d: ddwddjddddddhmdd",
"3-5 j: jcjdf",
"7-9 j: njrzjjjjx",
"7-10 j: jjjjjjjfjjjpjx",
"3-4 c: zcxcv",
"4-8 z: skqzvzrnzzclzzzzxrdn",
"8-13 n: nnnnnnnqgnnrn",
"5-6 x: rmzcxxxxcxkdxqmlxb",
"9-14 n: nnnnnncnjnnqnxwnn",
"11-14 b: bbwbbbbbbbbbbhbwbbb",
"17-18 j: pjwjjjjjjjjjjjjjjzj",
"3-6 q: qqfqqz",
"3-16 t: wrksrrghptphntjtl",
"8-12 n: nnnnnnnqnnnnnnn",
"5-6 p: pphcpxsbp",
"4-8 b: bbbblbbnhbq",
"1-5 w: wwslcwdw",
"1-9 t: zkttjttptp",
"5-8 n: snnfnnndnnn",
"14-16 s: sssssssssssssrsssss",
"2-3 c: wctjrbccl",
"12-14 t: tkjttfpptxbtdvttbwtn",
"12-13 h: hhhhhhhhhhhjh",
"7-12 t: wttqzsfttftqkt",
"5-9 t: xdtvtqvztvttrkztkhtt",
"2-3 n: mnznz",
"18-20 t: npbfsgxtfbklzcrrqftt",
"14-15 g: gjggggggggggggg",
"1-4 v: vvvvvv",
"8-9 h: hhhhhghht",
"1-12 z: zzwwzzzzzczmzcdl",
"10-15 m: mmmzmbmmmmmmmwfmmcjm",
"10-11 g: gggggmjgtggggg",
"2-3 z: zczzrzxvvbfvfggzmq",
"7-17 g: gkxmjwgnggrxbrtlgqgg",
"17-18 z: zzzhzzzzzzzzzzzzzf",
"2-3 r: rcrpstlplrsrx",
"4-8 j: fpjkzjjs",
"2-6 l: chlglllqljllldll",
"12-14 d: mwkdrghdvhdddl",
"7-11 q: dqqtvzxsrsnjqkfrf",
"12-14 p: tpppppppppppspp",
"5-6 m: jmmmmlm",
"1-7 c: dccdcccqcrc",
"1-4 t: tttn",
"2-8 c: xcbgcqlw",
"13-14 s: brlmjgbjswwqsvhxsss",
"16-19 g: gggfggggggggggggggtg",
"5-13 n: nnfwnnqnntnnnnbnnp",
"11-14 d: dddddrdmdsfddddd",
"5-13 x: xxxxxxxfmxxxcxxxdv",
"4-5 x: nvxxq",
"10-15 q: qqqqqmqqqqwqbqqbq",
"13-14 g: gggggggggggggg",
"5-6 w: wtwwnwmw",
"2-4 f: fdff",
"1-2 b: gbxvwwzbkccmlmfjglx",
"4-6 s: sfwgss",
"3-11 w: wwtrskwrwqwswhwwwn",
"5-14 j: ffzjjvcfjszmxjxdmbv",
"11-18 r: rrrrrrrrrrdrrrrrrsr",
"6-7 j: jjjjjjvj",
"5-13 h: hhpkvvmnrbxjhwhzppft",
"16-17 t: ttftttvttttxttttt",
"3-6 p: kvqmppp",
"10-14 v: pvzvmvvtvvvmvclmv",
"4-14 w: xdhxtwzwdsmgwwwgb",
"6-11 p: ppmpdpgtpbxvspgppg",
"11-19 f: fwfwpfkfqffffrfxfff",
"17-20 x: xxxxxxxxxxxxxxxxgxxg",
"1-2 h: hpfcktmbsjgdtgrx",
"3-4 c: dcvz",
"6-7 b: pwmqpbgnbfb",
"13-18 h: cxpmjhhghnthhqfxhp",
"1-5 z: zzzzmlzzzzzzzzzzzz",
"5-15 k: kkkkpkkkkkkkkkkkkkkk",
"6-8 l: lwlwslkkvzkdbpzzqp",
"5-10 x: xxxvxxjxxd",
"4-5 k: kbkkqk",
"3-10 v: vvgvvvvrvzvvvvvvlvvv",
"4-5 g: ggggjgggg",
"14-17 v: vvvvvvvvvvvvvvvvk",
"5-8 p: twpphnmvqplcxpp",
"11-16 s: ssssswshsshcsssrdks",
"10-11 z: zzjzzzzznqzzz",
"1-5 r: rrrrr",
"8-9 d: dddddddpdd",
"3-6 h: hhhhhh",
"4-5 t: ttbrt",
"15-16 j: gbjqljxjpjcsjjjrjg",
"7-8 t: rncvbfct",
"11-13 t: lltjtdttttthvtttttv",
"14-15 p: ppppppppbppppppw",
"1-4 r: rrrrmzc",
"6-8 k: kfqkfkkrdkkm",
"5-7 r: rbzlrwwprrr",
"3-17 s: ssjsssdssvwsssssss",
"6-7 g: rgdgggk",
"4-8 k: kkkkkkkjkkk",
"9-10 q: qqqqqqqqtq",
"7-12 x: bztpxxxdmzvrpxxk",
"1-2 z: zpzccz",
"6-16 n: nncklnttbwhfvdnbf",
"9-11 b: bmbbcbbbdbt",
"8-9 c: cccpcccchccbb",
"12-13 b: bbbbbbbbbbbbs",
"9-18 j: qrssnrgmjsvfmjzwsj",
"8-9 r: mrmbrrnrdprzrrfrb",
"5-8 h: hhhhzhpghq",
"6-7 n: nqnnptnbn",
"18-19 q: gkqqdqlqmdzkbbrnfhs",
"15-16 f: sfbcsbgxzhrzjndc",
"12-14 t: ttttntttttthtt",
"6-7 d: mpdddddn",
"6-15 c: lzqjqtmtzqpmjccx",
"7-17 m: mmmmmmmmmmmmmmmmgm",
"1-10 s: sssslhssssss",
"5-8 j: slmkjlddltj",
"2-16 l: ldlllclzffklzzvllll",
"10-11 r: rrrrrsdrrbr",
"13-14 k: kkkkkkkkkkkkkk",
"5-6 c: brncpc",
"11-13 v: vvcvvvvvvzvvnv",
"12-14 z: zzzzzzgzzztdcwxptzf",
"1-5 l: bllldlx",
"3-5 g: rgcxgdsxdqgzgkg",
"7-8 n: vrspnqnbn",
"2-12 l: jlsllljmllklllll",
"2-6 n: ncnvnn",
"7-14 z: rpxzqzczzlzsnzzzqbn",
"8-14 f: fmffhhljlffsffffsf",
"4-10 c: ccdcvpcbjgtwjrcl",
"9-10 w: wwwwwwwwwm",
"3-4 s: wssw",
"12-17 c: cccccccsxcqbccccccp",
"12-19 z: zdzgzlzbzzzzzzzzzzq",
"5-6 f: svfbqvfffsf",
"4-9 z: zzzxzhzzz",
"2-15 p: pppnpppnppppgpwpppw",
"6-9 t: ntftnzjntd",
"14-17 m: mmmmmmmmmmmmmmmmkm",
"8-9 z: zzzzhptzzzdfzgwzsz",
"16-17 g: ggcgqzgggggggggtzgg",
"10-13 x: xxxxxxdxxxxxx",
"14-16 d: dfdddddddddddddld",
"3-4 d: ddwd",
"7-15 w: zcwtmgtwwwbhfwvww",
"18-19 c: ccccccccccccccccccs",
"2-8 f: qqrfxvrtvttq",
"4-5 l: ltjll",
"5-6 h: hvshchzhh",
"3-9 f: ffvvfffffff",
"5-6 g: ggggxw",
"7-10 p: zmgppmpqfgp",
"3-6 b: pgvdvbb",
"18-19 k: kkkkkbkkkkkkkkkkkjg",
"5-7 w: hwgwwzp",
"4-5 h: nhdgfthhhvh",
"1-4 z: hvvzrkfz",
"15-16 s: ssvgjfsnsplspsvjw",
"4-8 p: pjjzwpnpfkpzpppv",
"2-3 w: whwmsq",
"4-9 d: mjvfdndmzddd",
"2-4 f: pgff",
"1-4 f: ffnk",
"18-19 s: ssswcssgssssssfslssl",
"5-7 n: rplqnvhd",
"7-13 s: bsbsskzsfsrss",
"9-19 j: jjjjjjjjdjjjjjjjjjl",
"5-7 m: kfwmzqm",
"5-9 h: hhlhzhhhh",
"4-6 z: twvnszwzx",
"7-10 g: gggjggnggdggngggs",
"12-14 f: ffffffffffffflf",
"3-5 g: gzgsp",
"2-6 d: dndddd",
"5-10 r: rkzffghrrltgrrpmrr",
"1-3 b: bcfbbs",
"10-12 b: bvbqdbbbbbbkb",
"3-10 v: hpvvvvhxsfjvdj",
"2-3 t: ttttt",
"1-2 r: fmrf",
"3-4 z: zqzkxj",
"14-16 d: ddddddbddgddsdjddd",
"12-14 l: lllllllwllllgl",
"3-4 j: mvsjjrzxtsbbk",
"2-6 k: pkkkkjdk",
"12-17 k: krkkkkzkkkkhkkghk",
"2-4 v: bnfvknzw",
"2-3 q: qqqq",
"3-7 q: kjgqqpqqrcrq",
"3-9 j: wfjjzjjjg",
"9-13 c: fccccvccccccj",
"3-4 f: jrffdsfdnr",
"9-13 x: xxxxxxxxxxxxxxxx",
"2-4 c: cbccc",
"4-5 q: cwmhd",
"6-17 z: zvzplhczbrzwpkcqzdzm",
"9-14 f: vdvdnbvxxmjsftlfbqs",
"1-5 t: thmwhctkpsj",
"2-3 t: xtvtfnxhdht",
"2-5 x: nvxrx",
"9-14 v: wpvtmgfvqdmnvvvq",
"6-7 l: fclxwlfblfrvlblc",
"2-6 g: cttgfsk",
"8-14 r: vrrrrgrmrrrrhrrrbr",
"3-7 r: rrrrrplr",
"5-18 j: snghjbpjctwgjcftjt",
"17-18 x: xxxxxxxxxsxxxzxxxjxx",
"9-10 q: rzqqqqqqqzq",
"13-19 w: lqwpwwwcwwwwgpwtpww",
"10-11 x: tvcxzxwpxxx",
"13-14 k: kkkkkkkkkkjkfkk",
"11-16 w: wwwwwwwwwwqwwwnl",
"4-5 v: vslnvv",
"3-5 h: hhshj",
"5-6 m: npkmmw",
"2-11 q: nbcbjbcwknqxrkqqwhq",
"9-10 p: pbppjpppnpppp",
"10-15 d: drdsdddlddddnddqdwd",
"1-2 d: pdhd",
"12-17 w: wwwwwwwwwwhmwgwwwwww",
"4-5 z: zmtztrtwfntphzzrlj",
"7-13 p: pvrbkxppsppxpppmqz",
"1-6 s: ngsssssrbs",
"7-8 j: jjjjjjzhj",
"8-16 c: cpcpcqccrnckpmcw",
"7-8 x: xxnszxbxgxwxx"
]

const amountValid1 = passwords.reduce((acc, cur) => {
  const [appearances, char, password] = cur.split(" ");
  const re = RegExp(`${char[0]}`, 'g');
  const appearanceAmount = password.match(re) ? password.match(re).length : 0;

  const [min, max] = appearances.split("-");
  return appearanceAmount >= Number(min) && appearanceAmount <= Number(max) ? acc + 1 : acc
}, 0);

console.log('part one:', amountValid1);

const amountValid2 = passwords.reduce((acc, cur) => {
  const [appearances, char, password] = cur.split(" ");
  const [pos1, pos2] = appearances.split("-");

  const indexOne = Number(pos1) - 1;
  const indexTwo = Number(pos2) - 1; 

  if ((password[indexOne] === char[0] && password[indexTwo] !== char[0]) || 
  (password[indexOne] !== char[0] && password[indexTwo] === char[0])) {
    return acc + 1;
  } else {
    return acc;
  }

}, 0);

console.log('part two:', amountValid2);