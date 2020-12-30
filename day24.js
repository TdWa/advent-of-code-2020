const input = [
  "nenwswenweswweenesweeenenwee",
  "nwnwnwnwswenenenwneswneenwnenenwnenwsw",
  "weweeeeneneseswesesweeesenwnw",
  "wnwwwwwnwwnewsewnwenwwnww",
  "enwnwsenwnenwnwseenwswnweseswenwswnwsw",
  "nwseseswsenwseswseseswsenweseeeenwnwsese",
  "senwwwwnweeswewwwewwnenenwswse",
  "swnwneswnweneneneswneneeneswne",
  "ewsenwweneeeenwnwneneswnewwswesene",
  "sesenwsweseseswnenenwnweenwseenewee",
  "seswwwswwnwnwsewneenenenwnwneneseww",
  "nenenenenenenenenwsenewne",
  "swwnwswswswwswswswswswswswe",
  "nenwswnesesesesesesesesesesenwsenwsesesew",
  "wswwneswswswweeswswwwswnwswswseswnew",
  "wwwwwnwwewenwwwwswnwwew",
  "neenwnwnwnenenenenwenenwnwwwnwswswse",
  "swwneswswswswnwseswswswswswsw",
  "seseseenesewnwseseeswwseseeseneesesw",
  "nesenwswseswnwwseswwwseswwnenewswwwse",
  "wwwwwwswewww",
  "seenewewenwneswneneneneneneswnenee",
  "sesewnwsenwnwesesweneswseseseswnwsee",
  "nenwnenenwnwnwswnenwnwsenenwnenwwnwnwne",
  "seseswneeneeseeewwnwseesenwsenwsee",
  "seseeeeseseweesesesewnesesesenwsene",
  "swwswswseswwwswnewe",
  "swwswswswwseneswswseswswwnewswwwsw",
  "neeswneneneenenenene",
  "neeswseseswswnwwseswnwwswswseseseseseswne",
  "ewneneneenewewnenewseneenwneeesw",
  "enwnenwneeeeseeeeswenweeneseese",
  "nwwnwnwnwnwnwnenenenenenenenenwsenwsene",
  "nwseenwnwnwnenwnwwsenwnwne",
  "seseswsenwswseswswswseeseswse",
  "seswneswswswswswswswswwwswsw",
  "enesenenwesesweeweeswseseeseseew",
  "wwswnwweneswneenwsesesenwnwsenwwnw",
  "swnwwnwswwewsenewenwnewseswnwwww",
  "wswewnwwswwnwswswswswswwswsweswesww",
  "swesenwnweeneseseseswswwnwsewwenwswne",
  "wwwswwsewwwwswwwwwnw",
  "neeenwwwswnewnenwnwsenwsewwwww",
  "seneswswsewswneswswseswswseseseseewnwsese",
  "nenenenewneneneneneneneneeseneweese",
  "wswsweeswswwswswswswwswswwswwnwsw",
  "wwwseswnewswswswwwwwwsw",
  "wnwnwnwwnwnwnwnenwenenweneswsewenwnwnw",
  "wwweswewnewwnwswsewwwwwnwnenw",
  "nwnwsweneeeseeseeeseesesesenwseswese",
  "nwwswswswwswwswewwwwsenwswsenwsww",
  "senwnenwnwnwnwnwnwnwnwnwnwnwsw",
  "neswnwseswswswswswswswswswsweswwswe",
  "eeeeeeeseenwnweeseesweeeenw",
  "swseseseswswwnwneswewwnwnwseeswnwswwne",
  "neesenwseesesewwnwseeseseenwnesw",
  "neswswswwwswswsesweswswsw",
  "eeneeewsenweseeeweeeneswee",
  "nwnenweneewnwnwnwwnwwwswnwsenwnwnwnw",
  "newneeneseneneswnenwnenenesenewnwsw",
  "seseneeewsweneneeeneseneeeswwwene",
  "swswswswseswswwsesesesweswswswneneswsww",
  "eeeeswneneeewseewneeseeee",
  "neeeneneneeeneneewneewwwnesenene",
  "eneswnwnenwneeswwswneeeenenwenese",
  "seenwseseseeneeseseeseseseweseswsese",
  "seswnwswswenewnewnwswsw",
  "wwwwwwwwwwwneswswwwnewswse",
  "seeseswseseseswwsesese",
  "nenenewenenewesenesewesenwewnewne",
  "nwneseneeneseneswneneneewneewnee",
  "nenenwneneewewneeseneeneeneeese",
  "eswnwswwswsewweswwnwneswwwswww",
  "neseswnweeeeseeeswee",
  "wwwwnwswwwswswswnwsese",
  "wseseswswwswswswnweswswsesweseesw",
  "nwneneneeewewwneneneeeeeswese",
  "eesesesewnwseenweeeeesenweseswse",
  "neneneneenenwneswneneneneeeneee",
  "wswswsweeseswswswswwnwnwwsw",
  "wseewesenwnwneswnenweewneneswwnw",
  "nwneeswswseswwseseneswesenenwsenesww",
  "nwsewwwwswswwsenw",
  "swswswewswnwswwswswnwewswwseswww",
  "swswwwsewwnenesewwswswswwwwww",
  "nenwnwnwwnwnwnwnwnwnwenwswnwnwnwnwsenwnw",
  "neneneneneneneneneneneneneneswe",
  "nwwwswenwwneenwnwwswewnwwnwsww",
  "eseswseswwnwneswneswsesewswnenesesw",
  "wwwwwnwnwwwe",
  "senwenenewwnewswneewnesewsenenenesene",
  "sewewneewnwneenenenenweneese",
  "swswswewwwewneswswwswswswswwww",
  "swwnwneneenenenenwnwnenewnwseswnwsenenw",
  "swnenwneenenwnwnwnwsenwnwnwnwnwnwnwnwnw",
  "neswsesewswseeeneseswnwwswswsw",
  "ewwwwswwwswwneswwwewnwnewwsene",
  "nwnwnenwnwnwsewnweneswwswnwnwsenewnee",
  "ewneseeeeeeewenweseeeeeee",
  "nwseswwswseewwnwwwnwwnwwwseswene",
  "swswwswweswswewswswswsw",
  "nwnwneswnwneenwnwnwneswnenwnwnwnenenwne",
  "eswweeeeswseenewenwsenwesesese",
  "seswnwneswnenenwnwnwesenesenwswnenenwnene",
  "nenwnenenwwnenwnwnenwnwsenwnwswse",
  "newwwweswswswwswseenewwseseswnwsw",
  "nwwnwsesenwnwnesenwnwswnwewnwnenenwnwnw",
  "nwneneneneneneneeswnwnenenwne",
  "wnwnwsenwnesenenenenenwnenwne",
  "nenenwnenewnesenenewseneneeneneseenenesw",
  "wneneswnwnenwnwswneeseenwseswnesesenww",
  "swseswseseswseswneswseswsewseswsese",
  "weeesweeesenwseeee",
  "nenwswswnenwweswseseseewseneneseswe",
  "neweewneswneenweeneesweewnenene",
  "nesesweenenewneenenenewesenesenew",
  "swswswswseseswseswswswswswnw",
  "neneswwwwwwwwwwsewsenewwswww",
  "nenenenwnenenenewsenenesenenewnenwnwne",
  "neeneeswneeseeseenenwnwwseswewee",
  "swswswswnwseseswneseswseseswswswwnenesw",
  "neeswnenwneeeeweswswsweneneenwe",
  "wsenweswseenwsewsesenwsenesesesesesenesw",
  "seseswseseseswneswswse",
  "swnewswwwsesewswnewwwswwswswswww",
  "senewneneneseneenenenwewenwwnwswsw",
  "weseneneseseseeeweeseswsweenesese",
  "swnewwswnwseswswswseswswwwswswswswne",
  "neneeenenweneneswenenesenwewneenesw",
  "seseseseneseswseseswswsewsenwseseesesese",
  "nenenwnwnwnenwnenenesenenwwneneneene",
  "nwnwnwsenenenwneswwnwnwnesenwnenenenew",
  "neeeeeweneseeweweeneeneenee",
  "wneneeneneenewneneeeeseeneneseeswe",
  "eswwwnwwnwwnwwwwwwwenwswneswe",
  "eseswwsweseeeneenewe",
  "sesesweseseswsesesenwseseseseweseswne",
  "sewseseseseseseseeseseseneseesenesw",
  "swwneewswwwnwwswswwenwewnwnwnww",
  "eneneeeenwsenwnwesesweeeeswee",
  "wwwwwwswwswwnew",
  "swswwwswwnwewwnwneswwnwseneneww",
  "swnewnwnewnwwsweseeseswwswnenenwsee",
  "swewswswwswswswswseswswswswesweswswnw",
  "neswswseswswswswswswswneswswwnweswswe",
  "seeseseneseswswwsewseseenwsesenwseswsw",
  "esewneswnewwesewneswneneneneeenwe",
  "nesewnenesweneeeneneenenenenwnenenese",
  "nwnenwnwwnwnenwnenwnwneeeneswnwnwenww",
  "eeeeeeswwwwnesenenwenwsenewsw",
  "nwswweswsweswsenwneswewswwswnesenwsw",
  "sesenwseseseseesesesesesesesesesesw",
  "nenesenenwnenwnwwnenwneneswnewesenene",
  "swnwwswswwwnenwwseswwwwnewewsee",
  "esesewswswsenwswswswnenewsw",
  "nwnwnwwnwnwnwnwnwse",
  "eeneenenewsenenewwnenenenenenesenwe",
  "sweseswswseneseswswswnwswnwswswseswswse",
  "eeseneeneneneeenenweeeeswnwee",
  "swswwewswwwnenwseswwswswswswswswsww",
  "neswswswnwwswnwseswweswswwswsww",
  "nwswnenwnewnweseneneeswswneswnwnwnesene",
  "ewnenwswwwnwnwnwnwnwwswwwwwwne",
  "wswseseseeseswnwwenenwneswsenesenwse",
  "nwnenenwseneswswsee",
  "nenenenenenwnewswnwnenwswnwnwenenwnwe",
  "neweweweswesenweesesenw",
  "eenwneeeeenwwneeseseseseswwsese",
  "seeseneswseeseeeee",
  "nwneswswnwwweswnenewwnwneseseswwwse",
  "newwwswwnwwnwnww",
  "neneeneseswnwenenesweneeneneweeew",
  "wswswnwneswenesenwnwnewnwsenenwnenesenenw",
  "wneneeneseswnweseseneewswenwnenwsese",
  "nwsweswswswwsweswswsenwwenweswneenw",
  "seneswswswswswseswswswswswswneswswswnwswse",
  "wswswneneneswswswswwsewswwnew",
  "enwsenwsenwswswewnewewnwweseww",
  "wswswseswsewwswwwwwswwwwnwnew",
  "swneswswswewswswswwwseswswswswswwswnw",
  "seeneweseeseeeswseeneseneswnwweswse",
  "eeeseweswseweeeeeswsenwneewe",
  "swnweneneeneeeneeenenewneneeene",
  "eeeeneseeeseneeswsenenweewnwnw",
  "swswswnewwseswseswswswseseneswewnwswe",
  "nwswswneeseswneswnwnwswsesw",
  "wwnwwswwwsewwswwwww",
  "sweeneeeneenwesweseeeneenweee",
  "nwwswsenwnwswnwnwnwswseeseseneenenwse",
  "nwwnenwnwnwswwwwwnwnwww",
  "wwwswnwnesenesewwseneesenwneseewsw",
  "nwnweenwnwnwswnwwnenwwsweswnweswene",
  "nenwnwnwnwneenenewwneswnenese",
  "nenenwnewnwsenwnewsweenene",
  "nwneenwneswsweswneseeswswsenenenenwnw",
  "swswseswseseneseseseseseswswswsenenweswse",
  "senwswwsenwswsenwswswswswswswswswswww",
  "nwnwenwneswnwnwnwnwnenwnwnwnwnwnwnw",
  "nwnwwenewnwnwswswwe",
  "swsweseswseswnwnesesesenesewseswseswne",
  "swseneswswneswwswnenwwswseseswneswswseswsw",
  "swswseswswswswwwseswswneswswwnewswsw",
  "seswseswseneswseeswsenwswseswsesewswswse",
  "nenenenenewnenwnenenesenenesenenenenene",
  "wnwnwsenenwwnwnwnwwnwwnwswnwwwee",
  "nesesesesesesesenwsewseesesesewnesesese",
  "seesesesesenenwsesesesweesesesesese",
  "nwseeesweneswnenweswwwwnwnwnwnwswene",
  "wswwswnenwnenesweswneswswseswswswsesenenw",
  "eesweeeeeeeenw",
  "wnwwwnwsewwnwnwwnwwsenwnenwwewnw",
  "nwswnwsewswnwnewswwneenwnenwsewnenwnw",
  "nenweenwneneneneswswneswsenwnenenenenenwse",
  "nwnenenenenwnenesenewnesenenenenenenwne",
  "seeeeeeseswnweeee",
  "swswwwnwwwwewswwwwwswwewnw",
  "wswwwswswnwwneseswseswwnewwswwnwse",
  "sesesenewseeeseseswe",
  "wswwsewwwwneswswwwwwnewswsew",
  "eneeenweneneswnwneneeeneeeeese",
  "neenenwneeeneeeneneneneneeswnenesw",
  "nwswenwseeseesenenwneswseeesewesw",
  "sewwneswswwsewnwswnwswsewnenewwsww",
  "wseswwsenwnwnewsesenwwsenwneeswwnee",
  "nwswseeeseeesesew",
  "nwwsewnwnenwnwenwswswnwsewwesewe",
  "ewneeeeeeweeeeeesweeenwe",
  "neswswswwswswnwswnwseswswswwswseeseswsw",
  "seseneeseeseneseeeewseseswseseenwse",
  "nwnwnwnwsenwwnwnenwwnenwnwwnwnwswnww",
  "nwseweseseswnwweneseswseneswswswswswnw",
  "swwswwwswswnwwweswswwwewswww",
  "nwnwnwswsenenenwwwseswnwnwnwesenwnwwnww",
  "eeeseeeeseswenwnwee",
  "enewneneeneseeeneeneeeeseeeew",
  "nwwnwnwswseswwnwnewnesewwneswnwesenw",
  "neeseswwwnwswwneeseswnewenwswswswsw",
  "seseswseswnwnwenwsesenwneewwneseee",
  "seseswswswesesenwseswnwswsene",
  "nenwewneswneeeneneneseeeneneneee",
  "sesesesesenwseseswseswsesesewnwsenesesw",
  "nwnwswneswnwseenwnwswneswnwesesenwnwe",
  "nwnwenewsweswnwsesenenewwnwnweswnw",
  "nenwneneswseenenewsenwnwswnwwnwnwnenenew",
  "sewseseseseswseswnesesesesesesese",
  "neweeneeneneeeesenenwswswneneneneee",
  "eneneeswwseneneswnenweeweswnenwswnw",
  "senwswnenwnwnenenenwnewnwnenwsenwwnwnene",
  "neswneswsenwswsewseenweseeeewsesese",
  "seseseswseesewnweseeesenwseseswseenwse",
  "sewwsesewwwwwwwnewwwnwwnwnw",
  "nweneswnenwenwnenenenwnwnenwneswwnwnw",
  "neneeneneneswenwneswnwnenwnwnwnwwswnene",
  "nwwnwnwnwnenwnwnwnwnwswnwnwnwsenw",
  "swwnwewwwsewswsww",
  "eeseeseeeeseseseseswnwwseesesese",
  "enwsenwseswwnwnwnenwnwwnwnwnwsenwnenew",
  "ewneeneseneeseneneenwneneeneenenesw",
  "seseseswnwsenenwseese",
  "wswswwwwwneseww",
  "neewneeswsenwnwnwnenenwnenwswnwnenwnw",
  "neneseseswneswnwnwesenwnweenwnwnwswsenww",
  "wwwnwnwwseenwsewwwwewwnenwnwsw",
  "nwnenwnwwwwnwnwenwnwwnwswwnwenw",
  "swseswwneesesesewseseseesesesenwswsese",
  "swswseeseseseseswswswswswwswswseneswnwsw",
  "senenesweewnweesewweneneseneeene",
  "wwwwnewwwwwsewwsewswwwwnew",
  "ewsesesesesesesenwswsese",
  "swswwswswneeswnwswwseswswsee",
  "sewnwwnewnwnewwwwwnenwsesewwnwww",
  "nenwneneneneneneneneseneeneneneswnw",
  "nwneseseeeswweee",
  "swwnwswwewswwseeswenwswswswswswsw",
  "swswneseswswswswnwswswswseeswswswswnwne",
  "wnwnewneenenesesenesweswneeswenene",
  "nwseseseseseswnwwseeseseeseseseesese",
  "eswnwswwnwwewwwnwnwsewenenwwse",
  "ewwswwwnenwewewwesewewww",
  "swseneseswswswswwswswswnwswswswsweswswnw",
  "swwwswnwwweewnwsew",
  "eeeeseseewnweewsweeeeeee",
  "nwnwnwnwnenwsenwnenwewnenwewnwsewnwnwnw",
  "nwsewnwnwnwneswnenwnenwnenwnwnenwswesw",
  "swnwnwwwewwnwwewwwewwswnwnw",
  "eneeeesweewnenwnenesewewnee",
  "nwnwnwswwnwnwnwwwsenwwwne",
  "eeeseeeseeweseeseseweeesenwse",
  "eswsewswswswswswswswwswswnwswsw",
  "seseeeseeeeeeesenwsw",
  "esweeswsesewseeneseseseneeswnwsenesew",
  "swswswswnweneseeseswseswwswswswswswsw",
  "wwwwswwswwneswswwwsww",
  "swswwsweswnwswswswsw",
  "nenenwsewsenewnenewnenwnwswneseneseswe",
  "seseswseseswswswswswswneswwswsenenwsesw",
  "swsewsenesesenwseseseseenwseesenesesw",
  "enwwwswwnwesweswsenesewwswswwnw",
  "nwswnwnwnwnwnenwnwnwnwnwnwnwnesenweneswnww",
  "swswswewwswseseswswwnwnwnwswneeswnww",
  "wswneenwewnweneswneneneesw",
  "seeeseswwseeneseweeswnenweswsenew",
  "nwnwnewnewnwwwwwsewwnwwswnwwese",
  "eeswnenwswswswswwswswswsw",
  "nwnenwneneneneneswneenenenwnwnwnenwnwsw",
  "seseseeeeseeseseseeswswnenwwe",
  "swwnewnwsewnwwnenenwwnwwsesewwnwnew",
  "nwnwsewnwneenwnwnwnwnenwnwneswsenenwnw",
  "wwwwwswwewwwwewnewwweww",
  "wnwsenwwsewnwwwnwnwnesenewnwswnew",
  "swsenesesenesesesesesesesewswesesesese",
  "seseneswswwseseseseseswneswseswseseesese",
  "enesenenwseneseseswweseeseneswwwsese",
  "sesesesenesewseseesesesewwswneseseesw",
  "eeeseeeeweesenenweeseseswese",
  "swnwnwswnweswenesenwsenwseewneneswsesw",
  "sewswseenesesesenwnwsenenwseesesewnesw",
  "swswswswswsweswnewswswsesenenwswswnwsw",
  "enesweeeneseeseswwseeeenweese",
  "esenwwnwswseneneseswneseesenesewse",
  "swswsesewswnesewsewneseneseswswnesese",
  "eseweeswseeeeseesenenee",
  "newneswswwwswswwwwwwswnewwwwsesw",
  "nenenewswnwswnesenwnwnenenenwnwnwnenwne",
  "wseswnewsewswwnwswnewwwwwswwww",
  "wwwswwwnwwwwenwwnwwnww",
  "weeeeeesweenweswwneeeeeeee",
  "wneswswswnwswswsewswwsewsw",
  "seenwewseseseseseeseeesesesenweesw",
  "neswnenenwwnwenwnwnwnwwenenene",
  "wnewwseeswwnewneswnenwswwwwsww",
  "swswnwneswnweswseswswswswwwwsweswwsw",
  "wswsenwwswswwswwweneswswwswswswnew",
  "nwnwwwenwesenwseswnwnw",
  "seneneeeneenewe",
  "nwwnweenenwwnwnwsenwswnwnweswnenwswnwne",
  "nwnwnwnwsenwnwnwnenenwnwsenwnenwnwenwnww",
  "seswnwseswswseeneswwseseswseswswswseswsw",
  "swswneswwswswnewswwwnweswswnesesenw",
  "seswswseseswswsesenesw",
  "seseneswseseseseseesenesesesewsenenwsw",
  "neneneenenwswnwnwneneswnewnwnewnenwee",
  "seseswsewswnwseseswsesweseseeseswnesesw",
  "wwnenenwswsenwnwneneeswseeswew",
  "swwswnwnwseseseswnwseenenwseswnweswenw",
  "nwswwswswswswswswsweswnewsweseswswnesw",
  "sewwswwwnwwenwwnesenewnwswwswsene",
  "swseswsesesesenwseweseswseseswswsenwseese",
  "seseeseseesesenweeesweweesee",
  "wewswnwnwswenwnwswewseneneswsewwne",
  "esesenwseseenwswnewswenwseseseswnwswnw",
  "neswswseseseseseswseswswwnenwseseseswese",
  "seeeesesesesenwsenesewseesenwsesww",
  "swswseswsweswwswswswseswseswswnwswsw",
  "neeneeeneseeenwsweeeseeenwwne",
  "swwesesesenesenenewsesenewseesewsese",
  "nenwnwnwwwnwswnwnwsenwwwwnewwnwnw",
  "eweneeenweewsweeeeeeseneese",
  "newneswneneneeeseswneneswneneneswnwsw",
  "nweeeeeeeeweweeeeeesese",
  "sewnwwwwwewenwnwnwwwwwwwww",
  "nenewneenenenenwwnenwnenenenenenwe",
  "eswswnesesewneseseswnwwswne",
  "eeseesweeewseseeeneeese",
  "wneswsewwseesesenwneeseseswneswnwsesw",
  "swwswseswsesesweseswseswsw",
  "swswswwswswswsenwswswswswwswseswnenwswsw",
  "seneswweeneswnwneeneeeseweeew",
  "swswsweswnewnenesenwseseswswseseswsww",
  "nwnesewsweswwwsenewwnewwwwww",
  "ewneseseeeenewnenenweeneeswnene",
  "wwwwwwnwwwewseewnenwwwnwwsw",
  "wwwseswwsewswneswwneswwwwwwnw",
  "nenwnesenwnenwneenwnwnwnwnwnenwnwnwwsesw",
  "swneenwwswenwenweseeweeese",
  "nwwnwenwnweseswneewnwenwswnwwnwswnw",
  "nwwnwsenenwnwseneswnwneswnwnwnenwnenenenw",
  "nenenwnwsenenenenenenenwnenwnwnw",
  "nenwwseeneneswwsesenesenwnenenwsenenee",
  "nwwswswenwwnwsenwweneenwnenwnwwwww",
  "wnwswnewwwwwswnwnwwwnewwnwwswne",
  "nwsenwnwswnwnwswnenwnenenwnenwnwnwnwnenw",
  "ewnenenewneneneneenenenenwnenene",
  "nwsesesenwnwseeseseseseeseseesweesesw",
  "seeswnenesewnenwnenenwnenwneneneswenene",
  "seeeswenwseswneeese",
  "swenwenwswswseneswsenw",
  "wnwnwwnwnwsewnwnwnwnenwnwnwnwsewnenw",
  "nwwsenwnwsenenwnwnwnwnwnwnwwnwnenenwnenw",
  "sesesesenenwseeseseswseseseseswe",
  "swwwneseswswnewswwwswswswwnewswswww",
  "wwnwwnwnewnwnwswwnwwnwnw",
  "wsenwswesenwneswswseswswswewsweswswnw",
  "eeseneeeeesweeewwneeseeneesw",
  "ewnenwnwnwswnwnwwsewwwnwnwewsenwnww",
  "nwesewsesesweeseesenenesesewseseesese",
  "seesweewneseseseenwseswneswenwsesenwse",
  "weeneswnesweswenwwnwnewswsenwene",
  "nwnwnwwwnwwwsenwneweswswwenwnwsene",
  "nwnwnwnwwnwnwwnwnwwwswwwnwsewnwe",
  "swneneeswseenwseneswnweenewnweenenw",
  "eweeneswenweneenwsweeeene",
  "nwnwnenwewseseneseneswwnenwnenwnwnwsenew",
];

const test = [
  "sesenwnenenewseeswwswswwnenewsewsw",
  "neeenesenwnwwswnenewnwwsewnenwseswesw",
  "seswneswswsenwwnwse",
  "nwnwneseeswswnenewneswwnewseswneseene",
  "swweswneswnenwsewnwneneseenw",
  "eesenwseswswnenwswnwnwsewwnwsene",
  "sewnenenenesenwsewnenwwwse",
  "wenwwweseeeweswwwnwwe",
  "wsweesenenewnwwnwsenewsenwwsesesenwne",
  "neeswseenwwswnwswswnw",
  "nenwswwsewswnenenewsenwsenwnesesenew",
  "enewnwewneswsewnwswenweswnenwsenwsw",
  "sweneswneswneneenwnewenewwneswswnese",
  "swwesenesewenwneswnwwneseswwne",
  "enesenwswwswneneswsenwnewswseenwsese",
  "wnwnesenesenenwwnenwsewesewsesesew",
  "nenewswnwewswnenesenwnesewesw",
  "eneswnwswnwsenenwnwnwwseeswneewsenese",
  "neswnwewnwnwseenwseesewsenwsweewe",
  "wseweeenwnesenwwwswnew",
];

const tiles = input.map((tile) =>
  tile.replace(/w/g, "w ").replace(/e/g, "e ").replace(/ $/, "").split(" ")
);

const destinations = tiles.map((tile) => {
  const position = { x: 0, y: 0 };
  tile.forEach((direction) => {
    switch (direction) {
      case "e":
        position.x++;
        break;
      case "se":
        position.x += 0.5;
        position.y--;
        break;
      case "sw":
        position.x -= 0.5;
        position.y--;
        break;
      case "w":
        position.x--;
        break;
      case "nw":
        position.x -= 0.5;
        position.y++;
        break;
      case "ne":
        position.x += 0.5;
        position.y++;
        break;
      default:
        throw new Error("default case reached");
    }
  });
  return position;
});

const floor = destinations.map((destination) => {
  const count = destinations.reduce(
    (acc, cur) =>
      JSON.stringify(cur) === JSON.stringify(destination) ? acc + 1 : acc,
    0
  );
  return count % 2 === 1
    ? { ...destination, color: "black" }
    : { ...destination, color: "white" };
});

const countBlackTiles = (floor) =>
  floor.reduce((acc, cur) => (cur.color === "black" ? acc + 1 : acc), 0);

const answerOne = countBlackTiles(floor);
console.log("answer one:", answerOne);

///// PART TWO /////

const uniqueTiles = [...new Set(floor.map((t) => JSON.stringify(t)))].map((t) =>
  JSON.parse(t)
);

// insert missing tiles (floor size was a bit of a guess..):
for (
  let y = -100, x = -100;
  y < 101;
  y++, y % 2 === 0 ? (x = -100) : (x = -100.5)
) {
  for (x; x < 101; x++) {
    const newTile = { x, y, color: "white" };
    if (
      !uniqueTiles.some((tile) => tile.x === newTile.x && tile.y === newTile.y)
    ) {
      uniqueTiles.push(newTile);
    }
  }
}

const tilesWithTheirNeighbors = uniqueTiles.map((tile) => {
  const neighbors = [];
  for (let i = 0; i < uniqueTiles.length; i++) {
    if (
      (uniqueTiles[i].x === tile.x + 1 && uniqueTiles[i].y === tile.y) || // e
      (uniqueTiles[i].x === tile.x - 1 && uniqueTiles[i].y === tile.y) || // w
      (uniqueTiles[i].x === tile.x + 0.5 && // ne
        uniqueTiles[i].y === tile.y + 1) ||
      (uniqueTiles[i].x === tile.x + 0.5 && // se
        uniqueTiles[i].y === tile.y - 1) ||
      (uniqueTiles[i].x === tile.x - 0.5 && // nw
        uniqueTiles[i].y === tile.y + 1) ||
      (uniqueTiles[i].x === tile.x - 0.5 && uniqueTiles[i].y === tile.y - 1) // sw
    ) {
      neighbors.push(i);
    }
  }
  return { ...tile, neighbors };
});

const getNextTiles = (floor) =>
  floor.map((tile) => {
    const blackNeighbors = countBlackTiles(tile.neighbors.map((n) => floor[n]));
    if (tile.color === "black") {
      return blackNeighbors === 1 || blackNeighbors === 2
        ? { ...tile, color: "black" }
        : { ...tile, color: "white" };
    }
    return blackNeighbors === 2
      ? { ...tile, color: "black" }
      : { ...tile, color: "white" };
  });

const hundredDays = (floor, i = 0) => {
  if (i === 100) return floor;
  const nextFloor = getNextTiles(floor);
  return hundredDays(nextFloor, i + 1);
};

const finalFloor = hundredDays(tilesWithTheirNeighbors);
const answerTwo = countBlackTiles(finalFloor);
console.log("answer two:", answerTwo);
