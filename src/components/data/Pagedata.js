const { parse } = require("node-html-parser");

const pagedata = `<html>
  <body>
    <div class="navbar">
      <div class="container nav-container">
        <ul class="nav-list">
          <li>
            You are logged in as:
            <a href="https://dominating12.com/user/60683" class="" style=""
              >alunturner</a
            >
            (<span class="tt"
              ><span class="tt-anchor"
                ><span class="tt-inner">Your current battle rating</span></span
              >1049</span
            >) |
            <form
              id="hidden-form-authlogout"
              class="hidden-form"
              method="POST"
              action="https://dominating12.com/auth/logout"
            >
              <input
                type="hidden"
                name="_token"
                value="8u7zug1M1etw5bXKI52vkCZMr50WU5JitHxYclRg"
              />
            </form>
            <a
              href="#"
              onclick="document.getElementById('hidden-form-authlogout').submit();return false;"
              class=""
              >Logout</a
            >
          </li>
          <li class="nav-icon">
            <a
              id="notifications-link"
              href="https://dominating12.com/invites-notifications"
            >
              <i class="fa tt fa-bell-o"
                ><span class="tt-anchor"
                  ><span class="tt-inner">0/0 notifications</span></span
                ></i
              >
              <div class="count" style="display: none;">0</div>
            </a>
            <a
              id="notifications-link-mute"
              class="show-hide-link"
              href="#"
              data-id="notifications"
              style="display: none;"
            >
              <i class="fa fa-caret-down tt"
                ><span class="tt-anchor"
                  ><span class="tt-inner">Mute notifications</span></span
                ></i
              >
            </a>
          </li>
        </ul>

        <ul id="notifications" class="notifications"></ul>

        <div class="flex-stretch"></div>

        <ul class="nav-list">
          <li><a href="https://dominating12.com/shop">Shop</a></li>
          <li>
            <a href="https://dominating12.com/gamelist/finished"
              >Game history</a
            >
          </li>
          <li><a href="https://dominating12.com/dashboard">Dashboard</a></li>
          <li class="nav-divider"></li>
          <li>
            <a href="https://dominating12.com/gamelist/active"
              >Turns (<span id="num-turns">0</span>)</a
            >
          </li>
          <li>
            <a href="https://dominating12.com/messages"
              >Messages (<span id="num-messages">0</span>)</a
            >
          </li>
          <li class="nav-icon">
            <a id="navbar-refresh" href="#" class="yellow-link tt"
              ><span class="tt-anchor"
                ><span class="tt-inner">Refresh</span></span
              ><i class="fa fa-spin-on-hover fa-refresh"></i
            ></a>
          </li>
          <li class="nav-divider"></li>

          <li>
            <a
              href="https://dominating12.com/account/premium"
              class="yellow-link"
              >Premium</a
            >
          </li>
        </ul>
      </div>
    </div>

    <div class="fake-divs"><div></div></div>

    <div class="shadow-wrapper container">
      <div class="fake-shadow-div-left"></div>
      <div class="fake-shadow-div-right"></div>
    </div>

    <div class="container main-container">
      <header class="header">
        <div class="header-wrapper">
          <div class="header-img">
            <img
              src="https://dominating12.com/assets/img/title/title.png"
              alt="Dominating 12"
              title=""
            />
          </div>

          <nav class="site-nav">
            <ul>
              <li><a href="https://dominating12.com">Home</a></li>
              <li><a href="https://dominating12.com/maps">Maps</a></li>
              <li><a href="https://dominating12.com/forums">Forums</a></li>
              <li>
                <a href="https://dominating12.com/tournaments">Tournaments</a>
              </li>
              <li>
                <a href="https://dominating12.com/userlist">Player ranks</a>
              </li>
              <li>
                <a
                  href="https://dominating12.com/userlist?online=1&amp;sort=last_active&amp;dir=desc"
                  >Who's online</a
                >
              </li>
              <li>
                <a href="https://dominating12.com/tutorial/thedominating12"
                  >Information</a
                >
              </li>
              <li>
                <a
                  href="https://dominating12.com/tutorial/startgame"
                  class="yellow-link"
                  >How to start playing!</a
                >
              </li>
            </ul>
          </nav>
          <nav class="lobby-nav">
            <ul>
              <li>
                <a href="https://dominating12.com/lobby/live">
                  Live (speed) games<br />
                  <span
                    ><span id="num-pending-live">1</span> game waiting for
                    players</span
                  >
                  <i class="fa fa-caret-right"></i>
                </a>
              </li>
              <li>
                <a href="https://dominating12.com/lobby/longterm">
                  Long term games<br />
                  <span
                    ><span id="num-pending-ltg">350</span> game waiting for
                    players</span
                  >
                  <i class="fa fa-caret-right"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main class="main-content">
        <div class="pageheader-dark">
          <div class="side-boxes-show-hide">
            <a class="tt white-link show-hide-link" data-id="side-boxes">
              <i class="fa fa-caret-down tt"
                ><span class="tt-anchor"
                  ><span class="tt-inner">Toggle sidebar</span></span
                ></i
              >
            </a>
          </div>

          <ul class="game-settings">
            <li>Gametype: <strong>Deathmatch</strong></li>
            <li>Players: <strong>6</strong></li>
            <li class="large"><strong>Game 997721</strong></li>
            <li>Teams: <strong>Pairs</strong></li>
            <li>Turn order: <strong>Consecutive</strong></li>
          </ul>
        </div>

        <div class="game-main">
          <div
            class="map"
            id="map"
            style="
              background-image: url('https://dominating12.com/assets/img/maps/72.large.jpg');
              width: 1024px;
              height: 795px;
            "
          >
            <canvas
              id="map-canvas"
              width="1024"
              height="795"
              style="position: absolute; top: 0px; left: 0px;"
            ></canvas>
            <div class="territory-large tc-9" style="left: 100px; top: 148px;">
              <a
                href="#3369"
                id="territory-3369"
                class="js_territory"
                data-territory="3369"
                data-adjacencies="3370,3371,3372"
                data-x="100"
                data-y="148"
                data-name="Chaonia"
              >
                1
              </a>
            </div>
            <div class="territory-large tc-9" style="left: 172px; top: 172px;">
              <a
                href="#3370"
                id="territory-3370"
                class="js_territory"
                data-territory="3370"
                data-adjacencies="3369,3371,3373,3393"
                data-x="172"
                data-y="172"
                data-name="Ionannina"
              >
                1
              </a>
            </div>
            <div class="territory-large tc-9" style="left: 140px; top: 242px;">
              <a
                href="#3371"
                id="territory-3371"
                class="js_territory"
                data-territory="3371"
                data-adjacencies="3369,3370,3373"
                data-x="140"
                data-y="242"
                data-name="Thesprotia"
              >
                1
              </a>
            </div>
            <div class="territory-large tc-9" style="left: 42px; top: 188px;">
              <a
                href="#3372"
                id="territory-3372"
                class="js_territory"
                data-territory="3372"
                data-adjacencies="3369,3376"
                data-x="42"
                data-y="188"
                data-name="Corcyra"
              >
                1
              </a>
            </div>
            <div class="territory-large tc-9" style="left: 214px; top: 226px;">
              <a
                href="#3373"
                id="territory-3373"
                class="js_territory"
                data-territory="3373"
                data-adjacencies="3370,3371,3377"
                data-x="214"
                data-y="226"
                data-name="Mollosia"
              >
                3
              </a>
            </div>
            <div class="territory-large tc-9" style="left: 138px; top: 332px;">
              <a
                href="#3374"
                id="territory-3374"
                class="js_territory"
                data-territory="3374"
                data-adjacencies="3375,3378"
                data-x="138"
                data-y="332"
                data-name="Leucas"
              >
                3
              </a>
            </div>
            <div class="territory-large tc-0" style="left: 119px; top: 389px;">
              <a
                href="#3375"
                id="territory-3375"
                class="js_territory"
                data-territory="3375"
                data-adjacencies="3374,3376"
                data-x="119"
                data-y="389"
                data-name="Cephalonica"
              >
                3
              </a>
            </div>
            <div class="territory-large tc-4" style="left: 143px; top: 444px;">
              <a
                href="#3376"
                id="territory-3376"
                class="js_territory"
                data-territory="3376"
                data-adjacencies="3372,3375,3418"
                data-x="143"
                data-y="444"
                data-name="Zacynthos"
              >
                1
              </a>
            </div>
            <div class="territory-large tc-9" style="left: 257px; top: 260px;">
              <a
                href="#3377"
                id="territory-3377"
                class="js_territory"
                data-territory="3377"
                data-adjacencies="3373,3378,3379,3381"
                data-x="257"
                data-y="260"
                data-name="Dolopia"
              >
                1
              </a>
            </div>
            <div class="territory-large tc-0" style="left: 191px; top: 320px;">
              <a
                href="#3378"
                id="territory-3378"
                class="js_territory"
                data-territory="3378"
                data-adjacencies="3374,3377,3379,3418"
                data-x="191"
                data-y="320"
                data-name="Acarnania"
              >
                3
              </a>
            </div>
            <div class="territory-large tc-9" style="left: 242px; top: 331px;">
              <a
                href="#3379"
                id="territory-3379"
                class="js_territory"
                data-territory="3379"
                data-adjacencies="3377,3378,3380,3381"
                data-x="242"
                data-y="331"
                data-name="Aetolia"
              >
                1
              </a>
            </div>
            <div class="territory-large tc-9" style="left: 320px; top: 334px;">
              <a
                href="#3380"
                id="territory-3380"
                class="js_territory"
                data-territory="3380"
                data-adjacencies="3379,3381,3382"
                data-x="320"
                data-y="334"
                data-name="Locris"
              >
                6
              </a>
            </div>
            <div class="territory-large tc-4" style="left: 325px; top: 300px;">
              <a
                href="#3381"
                id="territory-3381"
                class="js_territory"
                data-territory="3381"
                data-adjacencies="3377,3379,3380,3382,3390"
                data-x="325"
                data-y="300"
                data-name="Doris"
              >
                1
              </a>
            </div>
            <div class="territory-large tc-9" style="left: 363px; top: 321px;">
              <a
                href="#3382"
                id="territory-3382"
                class="js_territory"
                data-territory="3382"
                data-adjacencies="3380,3381,3383,3385"
                data-x="363"
                data-y="321"
                data-name="Phocis"
              >
                1
              </a>
            </div>
            <div class="territory-large tc-9" style="left: 416px; top: 347px;">
              <a
                href="#3383"
                id="territory-3383"
                class="js_territory"
                data-territory="3383"
                data-adjacencies="3382,3384,3385"
                data-x="416"
                data-y="347"
                data-name="Boeotia"
              >
                1
              </a>
            </div>
            <div class="territory-large tc-4" style="left: 485px; top: 387px;">
              <a
                href="#3384"
                id="territory-3384"
                class="js_territory"
                data-territory="3384"
                data-adjacencies="3383,3385,3416,3425"
                data-x="485"
                data-y="387"
                data-name="Athens"
              >
                6
              </a>
            </div>
            <div class="territory-large tc-9" style="left: 506px; top: 334px;">
              <a
                href="#3385"
                id="territory-3385"
                class="js_territory"
                data-territory="3385"
                data-adjacencies="3382,3383,3384,3386"
                data-x="506"
                data-y="334"
                data-name="Euboea"
              >
                1
              </a>
            </div>
            <div class="territory-large tc-9" style="left: 573px; top: 290px;">
              <a
                href="#3386"
                id="territory-3386"
                class="js_territory"
                data-territory="3386"
                data-adjacencies="3385,3387,3401"
                data-x="573"
                data-y="290"
                data-name="Scycros"
              >
                1
              </a>
            </div>
            <div class="territory-large tc-9" style="left: 497px; top: 241px;">
              <a
                href="#3387"
                id="territory-3387"
                class="js_territory"
                data-territory="3387"
                data-adjacencies="3386,3388"
                data-x="497"
                data-y="241"
                data-name="Sporades"
              >
                1
              </a>
            </div>
            <div class="territory-large tc-9" style="left: 368px; top: 182px;">
              <a
                href="#3388"
                id="territory-3388"
                class="js_territory"
                data-territory="3388"
                data-adjacencies="3387,3389"
                data-x="368"
                data-y="182"
                data-name="Magnesia"
              >
                3
              </a>
            </div>
            <div class="territory-large tc-9" style="left: 326px; top: 186px;">
              <a
                href="#3389"
                id="territory-3389"
                class="js_territory"
                data-territory="3389"
                data-adjacencies="3388,3390,3391,3392,3395"
                data-x="326"
                data-y="186"
                data-name="Thessaly"
              >
                1
              </a>
            </div>
            <div class="territory-large tc-4" style="left: 368px; top: 247px;">
              <a
                href="#3390"
                id="territory-3390"
                class="js_territory"
                data-territory="3390"
                data-adjacencies="3381,3389,3391"
                data-x="368"
                data-y="247"
                data-name="Malia"
              >
                1
              </a>
            </div>
            <div class="territory-large tc-9" style="left: 286px; top: 215px;">
              <a
                href="#3391"
                id="territory-3391"
                class="js_territory"
                data-territory="3391"
                data-adjacencies="3389,3390,3392"
                data-x="286"
                data-y="215"
                data-name="Phthia"
              >
                3
              </a>
            </div>
            <div class="territory-large tc-9" style="left: 268px; top: 174px;">
              <a
                href="#3392"
                id="territory-3392"
                class="js_territory"
                data-territory="3392"
                data-adjacencies="3389,3391,3393"
                data-x="268"
                data-y="174"
                data-name="Olympus"
              >
                11
              </a>
            </div>
            <div class="territory-large tc-9" style="left: 216px; top: 98px;">
              <a
                href="#3393"
                id="territory-3393"
                class="js_territory"
                data-territory="3393"
                data-adjacencies="3370,3392,3394"
                data-x="216"
                data-y="98"
                data-name="Pelagonia"
              >
                1
              </a>
            </div>
            <div class="territory-large tc-9" style="left: 267px; top: 68px;">
              <a
                href="#3394"
                id="territory-3394"
                class="js_territory"
                data-territory="3394"
                data-adjacencies="3393,3395,3396"
                data-x="267"
                data-y="68"
                data-name="Macedon"
              >
                1
              </a>
            </div>
            <div class="territory-large tc-9" style="left: 328px; top: 91px;">
              <a
                href="#3395"
                id="territory-3395"
                class="js_territory"
                data-territory="3395"
                data-adjacencies="3389,3394,3396,3397"
                data-x="328"
                data-y="91"
                data-name="Piera"
              >
                1
              </a>
            </div>
            <div class="territory-large tc-9" style="left: 398px; top: 38px;">
              <a
                href="#3396"
                id="territory-3396"
                class="js_territory"
                data-territory="3396"
                data-adjacencies="3394,3395,3397"
                data-x="398"
                data-y="38"
                data-name="Thessalonica"
              >
                1
              </a>
            </div>
            <div class="territory-large tc-9" style="left: 479px; top: 78px;">
              <a
                href="#3397"
                id="territory-3397"
                class="js_territory"
                data-territory="3397"
                data-adjacencies="3395,3396,3398"
                data-x="479"
                data-y="78"
                data-name="Chalcidice"
              >
                1
              </a>
            </div>
            <div class="territory-large tc-9" style="left: 563px; top: 37px;">
              <a
                href="#3398"
                id="territory-3398"
                class="js_territory"
                data-territory="3398"
                data-adjacencies="3397,3399"
                data-x="563"
                data-y="37"
                data-name="Thasos"
              >
                3
              </a>
            </div>
            <div class="territory-large tc-9" style="left: 677px; top: 69px;">
              <a
                href="#3399"
                id="territory-3399"
                class="js_territory"
                data-territory="3399"
                data-adjacencies="3398,3400,3401"
                data-x="677"
                data-y="69"
                data-name="Samothrace"
              >
                4
              </a>
            </div>
            <div class="territory-large tc-9" style="left: 632px; top: 120px;">
              <a
                href="#3400"
                id="territory-3400"
                class="js_territory"
                data-territory="3400"
                data-adjacencies="3399"
                data-x="632"
                data-y="120"
                data-name="Lemnos"
              >
                1
              </a>
            </div>
            <div class="territory-large tc-9" style="left: 754px; top: 157px;">
              <a
                href="#3401"
                id="territory-3401"
                class="js_territory"
                data-territory="3401"
                data-adjacencies="3386,3399,3402,3405"
                data-x="754"
                data-y="157"
                data-name="Troy"
              >
                1
              </a>
            </div>
            <div class="territory-large tc-9" style="left: 715px; top: 226px;">
              <a
                href="#3402"
                id="territory-3402"
                class="js_territory"
                data-territory="3402"
                data-adjacencies="3401,3403,3405"
                data-x="715"
                data-y="226"
                data-name="Lesvos"
              >
                1
              </a>
            </div>
            <div class="territory-large tc-9" style="left: 724px; top: 341px;">
              <a
                href="#3403"
                id="territory-3403"
                class="js_territory"
                data-territory="3403"
                data-adjacencies="3402,3404"
                data-x="724"
                data-y="341"
                data-name="Chios"
              >
                1
              </a>
            </div>
            <div class="territory-large tc-9" style="left: 762px; top: 451px;">
              <a
                href="#3404"
                id="territory-3404"
                class="js_territory"
                data-territory="3404"
                data-adjacencies="3403,3407,3415"
                data-x="762"
                data-y="451"
                data-name="Icaria"
              >
                14
              </a>
            </div>
            <div class="territory-large tc-9" style="left: 836px; top: 265px;">
              <a
                href="#3405"
                id="territory-3405"
                class="js_territory"
                data-territory="3405"
                data-adjacencies="3401,3402,3406"
                data-x="836"
                data-y="265"
                data-name="Mysia"
              >
                1
              </a>
            </div>
            <div class="territory-large tc-9" style="left: 875px; top: 372px;">
              <a
                href="#3406"
                id="territory-3406"
                class="js_territory"
                data-territory="3406"
                data-adjacencies="3405,3407,3408"
                data-x="875"
                data-y="372"
                data-name="Ionia"
              >
                1
              </a>
            </div>
            <div class="territory-large tc-9" style="left: 818px; top: 426px;">
              <a
                href="#3407"
                id="territory-3407"
                class="js_territory"
                data-territory="3407"
                data-adjacencies="3404,3406"
                data-x="818"
                data-y="426"
                data-name="Samos"
              >
                1
              </a>
            </div>
            <div class="territory-large tc-4" style="left: 979px; top: 538px;">
              <a
                href="#3408"
                id="territory-3408"
                class="js_territory"
                data-territory="3408"
                data-adjacencies="3406,3409,3410"
                data-x="979"
                data-y="538"
                data-name="Caria"
              >
                1
              </a>
            </div>
            <div class="territory-large tc-4" style="left: 862px; top: 559px;">
              <a
                href="#3409"
                id="territory-3409"
                class="js_territory"
                data-territory="3409"
                data-adjacencies="3408,3411"
                data-x="862"
                data-y="559"
                data-name="Cos"
              >
                1
              </a>
            </div>
            <div class="territory-large tc-4" style="left: 962px; top: 638px;">
              <a
                href="#3410"
                id="territory-3410"
                class="js_territory"
                data-territory="3410"
                data-adjacencies="3408,3411"
                data-x="962"
                data-y="638"
                data-name="Rhodes"
              >
                1
              </a>
            </div>
            <div class="territory-large tc-4" style="left: 899px; top: 691px;">
              <a
                href="#3411"
                id="territory-3411"
                class="js_territory"
                data-territory="3411"
                data-adjacencies="3409,3410,3412"
                data-x="899"
                data-y="691"
                data-name="Karpathos"
              >
                1
              </a>
            </div>
            <div class="territory-large tc-4" style="left: 740px; top: 731px;">
              <a
                href="#3412"
                id="territory-3412"
                class="js_territory"
                data-territory="3412"
                data-adjacencies="3411,3413"
                data-x="740"
                data-y="731"
                data-name="Dicte"
              >
                1
              </a>
            </div>
            <div class="territory-large tc-4" style="left: 665px; top: 729px;">
              <a
                href="#3413"
                id="territory-3413"
                class="js_territory"
                data-territory="3413"
                data-adjacencies="3412,3414"
                data-x="665"
                data-y="729"
                data-name="Knossos"
              >
                1
              </a>
            </div>
            <div class="territory-large tc-4" style="left: 533px; top: 713px;">
              <a
                href="#3414"
                id="territory-3414"
                class="js_territory"
                data-territory="3414"
                data-adjacencies="3413,3423"
                data-x="533"
                data-y="713"
                data-name="Chania"
              >
                1
              </a>
            </div>
            <div class="territory-large tc-4" style="left: 652px; top: 503px;">
              <a
                href="#3415"
                id="territory-3415"
                class="js_territory"
                data-territory="3415"
                data-adjacencies="3404,3416,3417"
                data-x="652"
                data-y="503"
                data-name="North Cyclades"
              >
                2
              </a>
            </div>
            <div class="territory-large tc-4" style="left: 576px; top: 548px;">
              <a
                href="#3416"
                id="territory-3416"
                class="js_territory"
                data-territory="3416"
                data-adjacencies="3384,3415,3417,3423"
                data-x="576"
                data-y="548"
                data-name="West Cyclades"
              >
                1
              </a>
            </div>
            <div class="territory-large tc-4" style="left: 674px; top: 591px;">
              <a
                href="#3417"
                id="territory-3417"
                class="js_territory"
                data-territory="3417"
                data-adjacencies="3415,3416"
                data-x="674"
                data-y="591"
                data-name="East Cyclades"
              >
                1
              </a>
            </div>
            <div class="territory-large tc-4" style="left: 244px; top: 446px;">
              <a
                href="#3418"
                id="territory-3418"
                class="js_territory"
                data-territory="3418"
                data-adjacencies="3376,3378,3419,3421,3422"
                data-x="244"
                data-y="446"
                data-name="Ellis"
              >
                1
              </a>
            </div>
            <div class="territory-large tc-4" style="left: 281px; top: 396px;">
              <a
                href="#3419"
                id="territory-3419"
                class="js_territory"
                data-territory="3419"
                data-adjacencies="3418,3421,3425"
                data-x="281"
                data-y="396"
                data-name="Achaia"
              >
                1
              </a>
            </div>
            <div class="territory-large tc-4" style="left: 425px; top: 482px;">
              <a
                href="#3420"
                id="territory-3420"
                class="js_territory"
                data-territory="3420"
                data-adjacencies="3421,3423,3425"
                data-x="425"
                data-y="482"
                data-name="Argolis"
              >
                3
              </a>
            </div>
            <div class="territory-large tc-4" style="left: 314px; top: 454px;">
              <a
                href="#3421"
                id="territory-3421"
                class="js_territory"
                data-territory="3421"
                data-adjacencies="3418,3419,3420,3422,3423,3425"
                data-x="314"
                data-y="454"
                data-name="Arcadia"
              >
                1
              </a>
            </div>
            <div class="territory-large tc-4" style="left: 282px; top: 522px;">
              <a
                href="#3422"
                id="territory-3422"
                class="js_territory"
                data-territory="3422"
                data-adjacencies="3418,3421,3423"
                data-x="282"
                data-y="522"
                data-name="Messinia"
              >
                1
              </a>
            </div>
            <div class="territory-large tc-4" style="left: 392px; top: 570px;">
              <a
                href="#3423"
                id="territory-3423"
                class="js_territory"
                data-territory="3423"
                data-adjacencies="3414,3416,3420,3421,3422,3424"
                data-x="392"
                data-y="570"
                data-name="Sparta"
              >
                1
              </a>
            </div>
            <div class="territory-large tc-4" style="left: 396px; top: 661px;">
              <a
                href="#3424"
                id="territory-3424"
                class="js_territory"
                data-territory="3424"
                data-adjacencies="3423"
                data-x="396"
                data-y="661"
                data-name="Cythera"
              >
                1
              </a>
            </div>
            <div class="territory-large tc-4" style="left: 398px; top: 429px;">
              <a
                href="#3425"
                id="territory-3425"
                class="js_territory"
                data-territory="3425"
                data-adjacencies="3384,3419,3420,3421"
                data-x="398"
                data-y="429"
                data-name="Corinthia"
              >
                1
              </a>
            </div>
          </div>

          <div id="side-boxes" class="side-boxes">
            <div id="map-larger" class="side-box map-size">
              <a onclick="mapDisplay.setMapSizeLarge(); return false;"
                >Larger</a
              >
            </div>
            <div id="map-smaller" class="side-box map-size">
              <a onclick="mapDisplay.setMapSizeSmall(); return false;"
                >Smaller</a
              >
            </div>
            <div class="side-box side-button">
              <a href="https://dominating12.com/gamelist/next-game"
                ><i class="fa fa-long-arrow-right"></i
              ></a>
            </div>

            <div class="tt side-box side-box-player player-bg-4"></div>
            <div class="tt side-box side-box-player player-bg-9"></div>
          </div>
        </div>

        <div class="cards">
          <div class="my-cards">
            Cards (<span class="game-card owned">underlined</span> if owned):
            <span id="cards"> </span>
          </div>

          <div class="game-info">
            Next card bonus: <strong id="next-bonus">20</strong>

            (cap: <strong>20</strong>)
          </div>
        </div>

        <div class="game-panels">
          <div class="game-notification text-center">
            Secret alliances and teams are not allowed. Temporary alliances must
            be made in the game chat. See the
            <a href="https://dominating12.com/tutorial/rules">site rules</a>.
          </div>

          <div class="panel-columns">
            <div class="left-panel" id="left-panel-tabs">
              <div class="tab-bar">
                <ul>
                  <li class="active">
                    <a
                      href="#players-tab"
                      id="players-tab-link"
                      class="tab-link"
                      >Players</a
                    >
                  </li>
                  <li>
                    <a
                      href="#options-tab"
                      id="options-tab-link"
                      class="tab-link"
                      >Options</a
                    >
                  </li>
                  <li>
                    <a
                      href="#support-tab"
                      id="support-tab-link"
                      class="tab-link"
                      >Support</a
                    >
                  </li>
                  <li>
                    <a href="#report-tab" id="report-tab-link" class="tab-link"
                      >Report</a
                    >
                  </li>
                </ul>
              </div>

              <div class="tabs">
                <div id="players-tab">
                  <table class="player-list">
                    <tbody>
                      <tr
                        id="playerrow-1"
                        class="player"
                        data-player="1"
                        data-user="60683"
                      >
                        <td class="status-icon dead"></td>
                        <td class="insignia">
                          <div
                            class="rank-insignia insignia-1-black-plain"
                          ></div>
                        </td>
                        <td class="name">
                          <a
                            href="https://dominating12.com/user/60683"
                            class=""
                            style=""
                            >alunturner</a
                          >
                        </td>
                        <td class="cards">
                          <span class="numCards">0</span>x
                          <img
                            src="https://dominating12.com/assets/img/game-icons/card.gif"
                          />
                        </td>
                        <td class="troops">0</td>
                        <td class="icon">
                          <img
                            src="https://dominating12.com/assets/img/game-icons/armies.png"
                            alt="troops"
                          />
                        </td>
                        <td class="territories">0</td>
                        <td class="icon">
                          <img
                            src="https://dominating12.com/assets/img/game-icons/territories.png"
                            alt="territories"
                          />
                        </td>
                        <td class="reinforcements">0</td>
                        <td class="icon">
                          <img
                            src="https://dominating12.com/assets/img/game-icons/reinforcements.png"
                            alt="reinforcements"
                          />
                        </td>
                        <td class="color">
                          <div class="team">A</div>
                          <img
                            src="https://dominating12.com/assets/img/game-icons/colors/7.png"
                            alt="reinforcements"
                          />
                        </td>
                      </tr>
                      <tr
                        id="playerrow-2"
                        class="player"
                        data-player="2"
                        data-user="60841"
                      >
                        <td class="status-icon winner"></td>
                        <td class="insignia">
                          <div
                            class="rank-insignia insignia-1-black-plain"
                          ></div>
                        </td>
                        <td class="name">
                          <a
                            href="https://dominating12.com/user/60841"
                            class=""
                            style=""
                            >OrderoftheBath</a
                          >
                        </td>
                        <td class="cards">
                          <span class="numCards">5</span>x
                          <img
                            src="https://dominating12.com/assets/img/game-icons/card.gif"
                          />
                        </td>
                        <td class="troops">30</td>
                        <td class="icon">
                          <img
                            src="https://dominating12.com/assets/img/game-icons/armies.png"
                            alt="troops"
                          />
                        </td>
                        <td class="territories">22</td>
                        <td class="icon">
                          <img
                            src="https://dominating12.com/assets/img/game-icons/territories.png"
                            alt="territories"
                          />
                        </td>
                        <td class="reinforcements">15</td>
                        <td class="icon">
                          <img
                            src="https://dominating12.com/assets/img/game-icons/reinforcements.png"
                            alt="reinforcements"
                          />
                        </td>
                        <td class="color">
                          <div class="team">B</div>
                          <img
                            src="https://dominating12.com/assets/img/game-icons/colors/4.png"
                            alt="reinforcements"
                          />
                        </td>
                      </tr>
                      <tr
                        id="playerrow-3"
                        class="player"
                        data-player="3"
                        data-user="60938"
                      >
                        <td class="status-icon dead"></td>
                        <td class="insignia">
                          <div
                            class="rank-insignia insignia-1-black-plain"
                          ></div>
                        </td>
                        <td class="name">
                          <a
                            href="https://dominating12.com/user/60938"
                            class=""
                            style=""
                            >Gusreynolds</a
                          >
                        </td>
                        <td class="cards">
                          <span class="numCards">0</span>x
                          <img
                            src="https://dominating12.com/assets/img/game-icons/card.gif"
                          />
                        </td>
                        <td class="troops">0</td>
                        <td class="icon">
                          <img
                            src="https://dominating12.com/assets/img/game-icons/armies.png"
                            alt="troops"
                          />
                        </td>
                        <td class="territories">0</td>
                        <td class="icon">
                          <img
                            src="https://dominating12.com/assets/img/game-icons/territories.png"
                            alt="territories"
                          />
                        </td>
                        <td class="reinforcements">0</td>
                        <td class="icon">
                          <img
                            src="https://dominating12.com/assets/img/game-icons/reinforcements.png"
                            alt="reinforcements"
                          />
                        </td>
                        <td class="color">
                          <div class="team">C</div>
                          <img
                            src="https://dominating12.com/assets/img/game-icons/colors/6.png"
                            alt="reinforcements"
                          />
                        </td>
                      </tr>
                      <tr
                        id="playerrow-4"
                        class="player"
                        data-player="4"
                        data-user="62510"
                      >
                        <td class="status-icon dead"></td>
                        <td class="insignia">
                          <div
                            class="rank-insignia insignia-1-black-plain"
                          ></div>
                        </td>
                        <td class="name">
                          <a
                            href="https://dominating12.com/user/62510"
                            class=""
                            style=""
                            >Heapsrob</a
                          >
                        </td>
                        <td class="cards">
                          <span class="numCards">0</span>x
                          <img
                            src="https://dominating12.com/assets/img/game-icons/card.gif"
                          />
                        </td>
                        <td class="troops">0</td>
                        <td class="icon">
                          <img
                            src="https://dominating12.com/assets/img/game-icons/armies.png"
                            alt="troops"
                          />
                        </td>
                        <td class="territories">0</td>
                        <td class="icon">
                          <img
                            src="https://dominating12.com/assets/img/game-icons/territories.png"
                            alt="territories"
                          />
                        </td>
                        <td class="reinforcements">0</td>
                        <td class="icon">
                          <img
                            src="https://dominating12.com/assets/img/game-icons/reinforcements.png"
                            alt="reinforcements"
                          />
                        </td>
                        <td class="color">
                          <div class="team">A</div>
                          <img
                            src="https://dominating12.com/assets/img/game-icons/colors/1.png"
                            alt="reinforcements"
                          />
                        </td>
                      </tr>
                      <tr
                        id="playerrow-5"
                        class="player"
                        data-player="5"
                        data-user="60946"
                      >
                        <td class="status-icon winner"></td>
                        <td class="insignia">
                          <div
                            class="rank-insignia insignia-4-black-plain"
                          ></div>
                        </td>
                        <td class="name">
                          <a
                            href="https://dominating12.com/user/60946"
                            class=""
                            style=""
                            >LeRenard</a
                          >
                        </td>
                        <td class="cards">
                          <span class="numCards">5</span>x
                          <img
                            src="https://dominating12.com/assets/img/game-icons/card.gif"
                          />
                        </td>
                        <td class="troops">74</td>
                        <td class="icon">
                          <img
                            src="https://dominating12.com/assets/img/game-icons/armies.png"
                            alt="troops"
                          />
                        </td>
                        <td class="territories">33</td>
                        <td class="icon">
                          <img
                            src="https://dominating12.com/assets/img/game-icons/territories.png"
                            alt="territories"
                          />
                        </td>
                        <td class="reinforcements">22</td>
                        <td class="icon">
                          <img
                            src="https://dominating12.com/assets/img/game-icons/reinforcements.png"
                            alt="reinforcements"
                          />
                        </td>
                        <td class="color">
                          <div class="team">B</div>
                          <img
                            src="https://dominating12.com/assets/img/game-icons/colors/9.png"
                            alt="reinforcements"
                          />
                        </td>
                      </tr>
                      <tr
                        id="playerrow-6"
                        class="player"
                        data-player="6"
                        data-user="60940"
                      >
                        <td class="status-icon dead"></td>
                        <td class="insignia">
                          <div
                            class="rank-insignia insignia-1-black-gold"
                          ></div>
                        </td>
                        <td class="name">
                          <a
                            href="https://dominating12.com/user/60940"
                            class=""
                            style=""
                            >Excalibur_83</a
                          >
                        </td>
                        <td class="cards">
                          <span class="numCards">0</span>x
                          <img
                            src="https://dominating12.com/assets/img/game-icons/card.gif"
                          />
                        </td>
                        <td class="troops">0</td>
                        <td class="icon">
                          <img
                            src="https://dominating12.com/assets/img/game-icons/armies.png"
                            alt="troops"
                          />
                        </td>
                        <td class="territories">0</td>
                        <td class="icon">
                          <img
                            src="https://dominating12.com/assets/img/game-icons/territories.png"
                            alt="territories"
                          />
                        </td>
                        <td class="reinforcements">0</td>
                        <td class="icon">
                          <img
                            src="https://dominating12.com/assets/img/game-icons/reinforcements.png"
                            alt="reinforcements"
                          />
                        </td>
                        <td class="color">
                          <div class="team">C</div>
                          <img
                            src="https://dominating12.com/assets/img/game-icons/colors/2.png"
                            alt="reinforcements"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div id="options-tab">
                  <div class="tab-section">
                    <h2>Extra time</h2>
                    <div class="form-horizontal">
                      <div class="form-group">
                        <div class="form-label">Add extra time</div>
                        <button id="add-time-button">
                          Use (<span class="add-time-left">2</span> left)
                        </button>
                      </div>
                    </div>
                    <div class="form-horizontal">
                      <div class="form-group">
                        <div class="form-label">
                          Activate absence mode
                          <i class="fa fa-question-circle tt"
                            ><span class="tt-anchor"
                              ><span class="tt-inner"
                                >When absence mode is enabled your turn is
                                automatically extended once the timer runs
                                out.</span
                              ></span
                            ></i
                          >
                        </div>
                        <button id="enable-absence-button">
                          Use (<span class="add-time-left">2</span> left)
                        </button>
                      </div>
                    </div>
                  </div>

                  <div class="tab-section">
                    <h2>Resign</h2>
                    <div class="form-horizontal">
                      <div class="form-group">
                        <div class="form-label">
                          Resign (<span id="resign-cost">40</span> battle
                          tokens)
                        </div>
                        <input
                          type="checkbox"
                          id="resign-confirm"
                          disabled=""
                        />
                        I'm sure <small>(this action is irreversible)</small>
                        <button id="resign-button" disabled="disabled">
                          Resign
                        </button>
                      </div>
                    </div>
                  </div>

                  <!--
            <div class="tab-section">
                <h2>Mark a territory in chat</h2>
                <div class="form-horizontal">
                    <div class="form-group">
                        <div class="form-label">Mark a territory on the map</div>
                        <button id="todo-todo-todo">Select territory</button>
                    </div>
                </div>
            </div>
-->

                  <div class="tab-section">
                    <h2>Notification settings</h2>
                    <div class="form-horizontal">
                      <ul class="form-control-list">
                        <li>
                          <a id="play-turn-alert"
                            ><i class="fa fa-volume-up"></i
                          ></a>
                          <label>
                            <input
                              type="checkbox"
                              value="1"
                              id="check_alert-turn"
                              checked=""
                            />
                            Play turn alert
                          </label>
                        </li>
                        <li>
                          <a id="play-time-alert"
                            ><i class="fa fa-volume-up"></i
                          ></a>
                          <label>
                            <input
                              type="checkbox"
                              value="1"
                              id="check_alert-time"
                              checked=""
                            />
                            Play time running out alert
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="tab-section">
                    <div class="form-horizontal">
                      <div class="form-group">
                        <form
                          id="hidden-form-gamelistmemory-name"
                          class="hidden-form"
                          method="POST"
                          action="https://dominating12.com/gamelist/memory-name"
                        >
                          <input
                            type="hidden"
                            name="_token"
                            value="8u7zug1M1etw5bXKI52vkCZMr50WU5JitHxYclRg"
                          /><input
                            type="hidden"
                            name="game_id"
                            value="997721"
                          /><input
                            type="hidden"
                            name="memory_name"
                            value=""
                          /><input type="hidden" name="bookmarked" value="1" />
                        </form>
                        <a
                          href="#"
                          onclick="document.getElementById('hidden-form-gamelistmemory-name').submit();return false;"
                          class=""
                          >Bookmark</a
                        >
                        this game.
                      </div>
                    </div>
                  </div>
                </div>

                <div id="support-tab">
                  <div class="tab-section">
                    <h2>Ask for support</h2>
                    <form id="ask-support-form">
                      <div class="form-row">
                        I need a staff member to
                        <select id="ask-support-type">
                          <option disabled="" selected=""
                            >Choose a reason</option
                          >
                          <option value="1">end the game</option>
                          <option value="2">change the turn length</option>
                          <option value="3">clean up the chat</option>
                          <option value="4">change or remove password</option>
                          <option value="5"
                            >change or remove point limits</option
                          >
                          <option value="6">change # of players</option>
                          <option value="7"
                            >moderate contentious players</option
                          >
                          <option value="8">explain rules</option>
                          <option value="9">witness players cheating</option>
                        </select>
                      </div>
                      <div class="form-row">
                        <button type="submit">Submit</button>
                        <small>Staff may not be online 24/7</small>
                      </div>
                    </form>
                  </div>
                </div>

                <div id="report-tab">
                  <div class="tab-section">
                    <h2>Report a player</h2>
                    <form id="report-player-form">
                      <div class="form-row">
                        <select id="reported-player">
                          <option value="60841">OrderoftheBath</option>
                          <option value="60938">Gusreynolds</option>
                          <option value="62510">Heapsrob</option>
                          <option value="60946">LeRenard</option>
                          <option value="60940">Excalibur_83</option>
                        </select>
                        <select id="report-type">
                          <option
                            value="1"
                            data-tooltip-text="Excessively attacking a player knowing beforehand that it will cause you both to lose."
                            >committed murder-suicide</option
                          >
                          <option value="2" data-tooltip-text="See site rules."
                            >formed illegal alliances</option
                          >
                          <option value="3" data-tooltip-text="See site rules."
                            >used foul language</option
                          >
                          <option value="4" data-tooltip-text="See site rules."
                            >harassed other players in the chat</option
                          >
                        </select>
                        <span id="report-type-tt">
                          <i class="fa fa-question-circle tt"
                            ><span class="tt-anchor"
                              ><span class="tt-inner"
                                >Excessively attacking a player knowing
                                beforehand that it will cause you both to
                                lose.</span
                              ></span
                            ></i
                          >
                        </span>
                      </div>
                      <div class="form-row">
                        <button type="submit">Submit</button>
                        <small
                          >Reports must be backed by a second player.</small
                        >
                      </div>
                    </form>
                  </div>

                  <div class="tab-section report-list">
                    <a id="update-reports"><i class="fa fa-refresh"></i></a>
                    <h2>My reports</h2>
                    <div id="reports">
                      <table class="page-table">
                        <tbody></tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="right-panel" id="right-panel-tabs">
              <div class="tab-bar">
                <ul>
                  <li>
                    <a
                      href="#join-game"
                      id="join-game-tab-link"
                      class="tab-link"
                    >
                      Game info
                    </a>
                  </li>
                  <li>
                    <a
                      href="#game-chat"
                      id="game-chat-tab-link"
                      class="tab-link"
                      >Game chat</a
                    >
                  </li>
                  <li class="active">
                    <a
                      id="team-chat-tab-link"
                      href="#team-chat"
                      class="tab-link"
                      >Team chat</a
                    >
                  </li>
                  <li>
                    <a
                      href="#preset-chat"
                      id="preset-chat-tab-link"
                      class="tab-link"
                      >Preset chat</a
                    >
                  </li>
                  <li>
                    <a href="#game-log" id="game-log-tab-link" class="tab-link"
                      >Game log</a
                    >
                  </li>
                  <li>
                    <a
                      href="#player-notes"
                      id="player-notes-tab-link"
                      class="tab-link"
                      >Notes</a
                    >
                  </li>
                </ul>
              </div>

              <div class="tabs">
                <div id="join-game" style="display: none;">
                  <div class="tab-section">
                    <h2>Game info</h2>
                    <dl class="list-double">
                      <dt>Gametype:</dt>
                      <dd>
                        <span class="tt"
                          ><span class="tt-anchor"
                            ><span class="tt-inner"
                              >This gametype requires that you completely wipe
                              out a player's territories in order to defeat
                              him.</span
                            ></span
                          >Deathmatch</span
                        >
                      </dd>

                      <dt>No. players:</dt>
                      <dd>6</dd>

                      <dt>Cards:</dt>
                      <dd>
                        <span class="tt"
                          ><span class="tt-anchor"
                            ><span class="tt-inner"
                              >This card turn-in value will follow the same
                              values as Increasing until the cap is reached,
                              from which the turn in value will stay constant on
                              that value.</span
                            ></span
                          >Capped</span
                        >
                        (20)
                      </dd>

                      <dt>Turn length:</dt>
                      <dd>24 hours</dd>

                      <dt>Card turn in:</dt>
                      <dd>
                        <span class="tt"
                          ><span class="tt-anchor"
                            ><span class="tt-inner"
                              >With this option turning in a set after defeating
                              a player requires 5+ cards.</span
                            ></span
                          >Normal</span
                        >
                      </dd>

                      <dt>Turn order:</dt>
                      <dd>
                        <span class="tt"
                          ><span class="tt-anchor"
                            ><span class="tt-inner"
                              >A turn order setting in which each player's turn
                              is taken one after the other.</span
                            ></span
                          >Consecutive</span
                        >
                      </dd>

                      <dt>Fog of war:</dt>
                      <dd>
                        <span class="tt"
                          ><span class="tt-anchor"
                            ><span class="tt-inner"
                              >This is a game setting. If turned on then you
                              will not be able to see any territory that is not
                              next to a territory owned by you. The log also
                              will only show the start and end of turns.</span
                            ></span
                          >No</span
                        >
                      </dd>

                      <dt>Teams:</dt>
                      <dd>
                        <span class="advanced tt"
                          ><span class="tt-anchor"
                            ><span class="tt-inner"
                              >2 players per team.</span
                            ></span
                          >Pairs</span
                        >
                        (Random)
                      </dd>

                      <dt>Fortification:</dt>
                      <dd>
                        <span class="tt"
                          ><span class="tt-anchor"
                            ><span class="tt-inner"
                              >A fortification setting that allows you to move
                              only one time from one of your territories to
                              another territory that is connected to it through
                              a chain of territories that you own, without
                              crossing any territories you do not own.</span
                            ></span
                          >Chained</span
                        >
                      </dd>

                      <dt>Dice:</dt>
                      <dd>
                        <span class="tt"
                          ><span class="tt-anchor"
                            ><span class="tt-inner"
                              >For each dice roll a number between 1 and 6 is
                              randomly chosen.</span
                            ></span
                          >Original</span
                        >
                      </dd>

                      <dt>Rating limit:</dt>
                      <dd>No limit</dd>
                    </dl>
                  </div>
                </div>

                <div id="game-chat" style="display: none;">
                  <div class="chat-wrapper">
                    <ul class="chat-messages use-24h">
                      <li id="chat-row-7530083" data-user="60683">
                        <div class="chat-message-time">
                          17 Apr, 10:11
                        </div>
                        <div class="chat-message-body">
                          <span>
                            <a
                              href="https://dominating12.com/user/60683"
                              class="chat-name chat-7"
                              style=""
                              >alunturner</a
                            >: Everybody check the tabs above this chat box
                          </span>
                        </div>
                      </li>
                      <li id="chat-row-7530084" data-user="60683">
                        <div class="chat-message-time">
                          17 Apr, 10:11
                        </div>
                        <div class="chat-message-body">
                          <span>
                            <a
                              href="https://dominating12.com/user/60683"
                              class="chat-name chat-7"
                              style=""
                              >alunturner</a
                            >: you should have a team chat tab available now
                          </span>
                        </div>
                      </li>
                      <li id="chat-row-7530085" data-user="60683">
                        <div class="chat-message-time">
                          17 Apr, 10:11
                        </div>
                        <div class="chat-message-body">
                          <span>
                            <a
                              href="https://dominating12.com/user/60683"
                              class="chat-name chat-7"
                              style=""
                              >alunturner</a
                            >: which is a private message board for you and your
                            teammate
                          </span>
                        </div>
                      </li>
                      <li id="chat-row-7530086" data-user="60683">
                        <div class="chat-message-time">
                          17 Apr, 10:11
                        </div>
                        <div class="chat-message-body">
                          <span>
                            <a
                              href="https://dominating12.com/user/60683"
                              class="chat-name chat-7"
                              style=""
                              >alunturner</a
                            >: the letters inside your colours are the teams: me
                            and heaps, gord and mike, gus and hobbers
                          </span>
                        </div>
                      </li>
                      <li id="chat-row-7530130" data-user="60683">
                        <div class="chat-message-time">
                          17 Apr, 11:35
                        </div>
                        <div class="chat-message-body">
                          <span>
                            <a
                              href="https://dominating12.com/user/60683"
                              class="chat-name chat-7"
                              style=""
                              >alunturner</a
                            >: I'm watching you gord
                          </span>
                        </div>
                      </li>
                      <li id="chat-row-7530131" data-user="60683">
                        <div class="chat-message-time">
                          17 Apr, 11:35
                        </div>
                        <div class="chat-message-body">
                          <span>
                            <a
                              href="https://dominating12.com/user/60683"
                              class="chat-name chat-7"
                              style=""
                              >alunturner</a
                            >: stop touching yourself as you conquer
                          </span>
                        </div>
                      </li>
                      <li id="chat-row-7540305" data-user="62510">
                        <div class="chat-message-time">
                          20 Apr, 10:02
                        </div>
                        <div class="chat-message-body">
                          <span>
                            <a
                              href="https://dominating12.com/user/62510"
                              class="chat-name chat-1"
                              style=""
                              >Heapsrob</a
                            >: Gus and Hobbers - for the good of the game, we’d
                            like to propose a discussion
                          </span>
                        </div>
                      </li>
                      <li id="chat-row-7540306" data-user="62510">
                        <div class="chat-message-time">
                          20 Apr, 10:02
                        </div>
                        <div class="chat-message-body">
                          <span>
                            <a
                              href="https://dominating12.com/user/62510"
                              class="chat-name chat-1"
                              style=""
                              >Heapsrob</a
                            >: Potential ceasefire in territories to be agreed
                            on
                          </span>
                        </div>
                      </li>
                      <li id="chat-row-7540307" data-user="62510">
                        <div class="chat-message-time">
                          20 Apr, 10:03
                        </div>
                        <div class="chat-message-body">
                          <span>
                            <a
                              href="https://dominating12.com/user/62510"
                              class="chat-name chat-1"
                              style=""
                              >Heapsrob</a
                            >: What say you?
                          </span>
                        </div>
                      </li>
                      <li id="chat-row-7540347" data-user="60938">
                        <div class="chat-message-time">
                          20 Apr, 10:05
                        </div>
                        <div class="chat-message-body">
                          <span>
                            <a
                              href="https://dominating12.com/user/60938"
                              class="chat-name chat-6"
                              style=""
                              >Gusreynolds</a
                            >: Priam of Troy is open to talks. We have noted a
                            powerful alliance on the mainland
                          </span>
                        </div>
                      </li>
                      <li id="chat-row-7540356" data-user="62510">
                        <div class="chat-message-time">
                          20 Apr, 10:07
                        </div>
                        <div class="chat-message-body">
                          <span>
                            <a
                              href="https://dominating12.com/user/62510"
                              class="chat-name chat-1"
                              style=""
                              >Heapsrob</a
                            >: Excellent.&nbsp;We’ll just have to wait for
                            Odysseus Turner, think he’s a bit tied up somewhere
                          </span>
                        </div>
                      </li>
                      <li id="chat-row-7540426" data-user="60946">
                        <div class="chat-message-time">
                          20 Apr, 10:16
                        </div>
                        <div class="chat-message-body">
                          <span>
                            <a
                              href="https://dominating12.com/user/60946"
                              class="chat-name chat-9"
                              style=""
                              >LeRenard</a
                            >: Perhaps you will permit we humble Greek
                            merchantmen to join your discussions?
                          </span>
                        </div>
                      </li>
                      <li id="chat-row-7540427" data-user="60946">
                        <div class="chat-message-time">
                          20 Apr, 10:17
                        </div>
                        <div class="chat-message-body">
                          <span>
                            <a
                              href="https://dominating12.com/user/60946"
                              class="chat-name chat-9"
                              style=""
                              >LeRenard</a
                            >: We are but lowly purveyors of feta cheese and
                            honey
                          </span>
                        </div>
                      </li>
                      <li id="chat-row-7540429" data-user="60841">
                        <div class="chat-message-time">
                          20 Apr, 10:23
                        </div>
                        <div class="chat-message-body">
                          <span>
                            <a
                              href="https://dominating12.com/user/60841"
                              class="chat-name chat-4"
                              style=""
                              >OrderoftheBath</a
                            >: Lord Priam of Troy and Prince Paris, love is the
                            true gift of the gods to us mortals and I would not
                            begrudge a man who has found love in a hopeless
                            place. Please feel free to keep Helen,
                          </span>
                        </div>
                      </li>
                      <li id="chat-row-7540430" data-user="62510">
                        <div class="chat-message-time">
                          20 Apr, 10:24
                        </div>
                        <div class="chat-message-body">
                          <span>
                            <a
                              href="https://dominating12.com/user/62510"
                              class="chat-name chat-1"
                              style=""
                              >Heapsrob</a
                            >: Lowly merchants with grand ambitions it would
                            seem...
                          </span>
                        </div>
                      </li>
                      <li id="chat-row-7540431" data-user="60841">
                        <div class="chat-message-time">
                          20 Apr, 10:25
                        </div>
                        <div class="chat-message-body">
                          <span>
                            <a
                              href="https://dominating12.com/user/60841"
                              class="chat-name chat-4"
                              style=""
                              >OrderoftheBath</a
                            >: In fact i'll tell Menelaus to pay child support
                            for Hermione
                          </span>
                        </div>
                      </li>
                      <li id="chat-row-7540432" data-user="60841">
                        <div class="chat-message-time">
                          20 Apr, 10:26
                        </div>
                        <div class="chat-message-body">
                          <span>
                            <a
                              href="https://dominating12.com/user/60841"
                              class="chat-name chat-4"
                              style=""
                              >OrderoftheBath</a
                            >: I can even get my friends in Knossos to ship you
                            a contraption they have made for you and Helen to
                            enjoy special time with your livestock
                          </span>
                        </div>
                      </li>
                      <li id="chat-row-7540435" data-user="60946">
                        <div class="chat-message-time">
                          20 Apr, 10:32
                        </div>
                        <div class="chat-message-body">
                          <span>
                            <a
                              href="https://dominating12.com/user/60946"
                              class="chat-name chat-9"
                              style=""
                              >LeRenard</a
                            >: bull ficky ficky
                          </span>
                        </div>
                      </li>
                      <li id="chat-row-7540436" data-user="60946">
                        <div class="chat-message-time">
                          20 Apr, 10:32
                        </div>
                        <div class="chat-message-body">
                          <span>
                            <a
                              href="https://dominating12.com/user/60946"
                              class="chat-name chat-9"
                              style=""
                              >LeRenard</a
                            >: is nice
                          </span>
                        </div>
                      </li>
                      <li id="chat-row-7540437" data-user="62510">
                        <div class="chat-message-time">
                          20 Apr, 10:32
                        </div>
                        <div class="chat-message-body">
                          <span>
                            <a
                              href="https://dominating12.com/user/62510"
                              class="chat-name chat-1"
                              style=""
                              >Heapsrob</a
                            >: Alas, it would seem Helen is no longer for
                            earthly pleasures. She has discovered meditation. We
                            wish to return her with interest
                          </span>
                        </div>
                      </li>
                      <li id="chat-row-7540438" data-user="60946">
                        <div class="chat-message-time">
                          20 Apr, 10:33
                        </div>
                        <div class="chat-message-body">
                          <span>
                            <a
                              href="https://dominating12.com/user/60946"
                              class="chat-name chat-9"
                              style=""
                              >LeRenard</a
                            >: [by the way - if coordinating "inter team chat"
                            on this medium is too tricky then I'd propose it
                            should be acceptable to do it also over the main
                            RISK whatsapp chat]
                          </span>
                        </div>
                      </li>
                      <li id="chat-row-7540568" data-user="60683">
                        <div class="chat-message-time">
                          20 Apr, 12:29
                        </div>
                        <div class="chat-message-body">
                          <span>
                            <a
                              href="https://dominating12.com/user/60683"
                              class="chat-name chat-7"
                              style=""
                              >alunturner</a
                            >: ah, just saw this - I have put a message about
                            this in the main group
                          </span>
                        </div>
                      </li>
                      <li id="chat-row-7540570" data-user="60683">
                        <div class="chat-message-time">
                          20 Apr, 12:29
                        </div>
                        <div class="chat-message-body">
                          <span>
                            <a
                              href="https://dominating12.com/user/60683"
                              class="chat-name chat-7"
                              style=""
                              >alunturner</a
                            >: sorry for the double up
                          </span>
                        </div>
                      </li>
                    </ul>
                    <div
                      id="qoo-on-game-chat"
                      class="quick-on-off qoo-game-chat"
                    >
                      <a
                        href="#"
                        class="show-hide-link"
                        data-id="qoo-off-game-chat"
                        data-class="qoo-game-chat"
                      >
                        <i class="fa fa-caret-right"></i
                      ></a>
                      Server time:
                      <span
                        class="servertime"
                        data-timezone="UTC"
                        data-format="24h"
                        >09:33:12</span
                      ><span class="servertime-error"></span>
                    </div>
                    <div
                      id="qoo-off-game-chat"
                      class="quick-on-off qoo-game-chat off"
                      style="display: none;"
                    >
                      <a
                        href="#"
                        class="show-hide-link"
                        data-id="qoo-on-game-chat"
                        data-class="qoo-game-chat"
                      >
                        <i class="fa fa-caret-left"></i
                      ></a>
                    </div>
                    <input
                      type="hidden"
                      class="last_updated"
                      value="2020-04-20 12:29:21"
                    />
                    <form class="chat-form" autocomplete="off">
                      <div class="to">To all:</div>
                      <input
                        type="text"
                        class="body autofocus"
                        name="body"
                        placeholder="Send public chat message"
                        maxlength="220"
                      /><button type="submit">Send chat</button>
                    </form>
                  </div>
                </div>

                <div id="team-chat">
                  <div class="chat-wrapper">
                    <ul class="chat-messages use-24h">
                      <li id="chat-row-7530082" data-user="60683">
                        <div class="chat-message-time">
                          17 Apr, 10:10
                        </div>
                        <div class="chat-message-body">
                          <span>
                            <a
                              href="https://dominating12.com/user/60683"
                              class="chat-name chat-7"
                              style=""
                              >alunturner</a
                            >: Hi Rob
                          </span>
                        </div>
                      </li>
                      <li id="chat-row-7530090" data-user="60683">
                        <div class="chat-message-time">
                          17 Apr, 10:17
                        </div>
                        <div class="chat-message-body">
                          <span>
                            <a
                              href="https://dominating12.com/user/60683"
                              class="chat-name chat-7"
                              style=""
                              >alunturner</a
                            >: I've taken the south eastern dark green territory
                          </span>
                        </div>
                      </li>
                      <li id="chat-row-7530091" data-user="60683">
                        <div class="chat-message-time">
                          17 Apr, 10:17
                        </div>
                        <div class="chat-message-body">
                          <span>
                            <a
                              href="https://dominating12.com/user/60683"
                              class="chat-name chat-7"
                              style=""
                              >alunturner</a
                            >: I think team B are mainly in the west, with pink
                            being somewhat spread across an east west line
                          </span>
                        </div>
                      </li>
                      <li id="chat-row-7530092" data-user="60683">
                        <div class="chat-message-time">
                          17 Apr, 10:17
                        </div>
                        <div class="chat-message-body">
                          <span>
                            <a
                              href="https://dominating12.com/user/60683"
                              class="chat-name chat-7"
                              style=""
                              >alunturner</a
                            >: team C are definitely concentrated in the north
                            west
                          </span>
                        </div>
                      </li>
                      <li id="chat-row-7530093" data-user="60683">
                        <div class="chat-message-time">
                          17 Apr, 10:18
                        </div>
                        <div class="chat-message-body">
                          <span>
                            <a
                              href="https://dominating12.com/user/60683"
                              class="chat-name chat-7"
                              style=""
                              >alunturner</a
                            >: so I think we should focus on trying to grab the
                            east
                          </span>
                        </div>
                      </li>
                      <li id="chat-row-7530124" data-user="62510">
                        <div class="chat-message-time">
                          17 Apr, 11:20
                        </div>
                        <div class="chat-message-body">
                          <span>
                            <a
                              href="https://dominating12.com/user/62510"
                              class="chat-name chat-1"
                              style=""
                              >Heapsrob</a
                            >: Hello sir!
                          </span>
                        </div>
                      </li>
                      <li id="chat-row-7530125" data-user="62510">
                        <div class="chat-message-time">
                          17 Apr, 11:20
                        </div>
                        <div class="chat-message-body">
                          <span>
                            <a
                              href="https://dominating12.com/user/62510"
                              class="chat-name chat-1"
                              style=""
                              >Heapsrob</a
                            >: Nice work
                          </span>
                        </div>
                      </li>
                      <li id="chat-row-7530126" data-user="62510">
                        <div class="chat-message-time">
                          17 Apr, 11:21
                        </div>
                        <div class="chat-message-body">
                          <span>
                            <a
                              href="https://dominating12.com/user/62510"
                              class="chat-name chat-1"
                              style=""
                              >Heapsrob</a
                            >: Agreed. I’m very scattered but we can def start
                            to carve Crete up
                          </span>
                        </div>
                      </li>
                      <li id="chat-row-7530127" data-user="62510">
                        <div class="chat-message-time">
                          17 Apr, 11:22
                        </div>
                        <div class="chat-message-body">
                          <span>
                            <a
                              href="https://dominating12.com/user/62510"
                              class="chat-name chat-1"
                              style=""
                              >Heapsrob</a
                            >: And I would love to get into Euboea and Scycros -
                            thoughts?
                          </span>
                        </div>
                      </li>
                      <li id="chat-row-7530129" data-user="60683">
                        <div class="chat-message-time">
                          17 Apr, 11:27
                        </div>
                        <div class="chat-message-body">
                          <span>
                            <a
                              href="https://dominating12.com/user/60683"
                              class="chat-name chat-7"
                              style=""
                              >alunturner</a
                            >: I think it's harder for you because of the spread
                          </span>
                        </div>
                      </li>
                      <li id="chat-row-7530132" data-user="60683">
                        <div class="chat-message-time">
                          17 Apr, 11:37
                        </div>
                        <div class="chat-message-body">
                          <span>
                            <a
                              href="https://dominating12.com/user/60683"
                              class="chat-name chat-7"
                              style=""
                              >alunturner</a
                            >: I think we need to wait to see what happens after
                            gus goes
                          </span>
                        </div>
                      </li>
                      <li id="chat-row-7530137" data-user="62510">
                        <div class="chat-message-time">
                          17 Apr, 11:45
                        </div>
                        <div class="chat-message-body">
                          <span>
                            <a
                              href="https://dominating12.com/user/62510"
                              class="chat-name chat-1"
                              style=""
                              >Heapsrob</a
                            >: Agreed
                          </span>
                        </div>
                      </li>
                      <li id="chat-row-7530138" data-user="60683">
                        <div class="chat-message-time">
                          17 Apr, 11:46
                        </div>
                        <div class="chat-message-body">
                          <span>
                            <a
                              href="https://dominating12.com/user/60683"
                              class="chat-name chat-7"
                              style=""
                              >alunturner</a
                            >: as it stands I'm leaning towards crete
                          </span>
                        </div>
                      </li>
                      <li id="chat-row-7530139" data-user="60683">
                        <div class="chat-message-time">
                          17 Apr, 11:46
                        </div>
                        <div class="chat-message-body">
                          <span>
                            <a
                              href="https://dominating12.com/user/60683"
                              class="chat-name chat-7"
                              style=""
                              >alunturner</a
                            >: because we could then hold the south east by
                            holding only chania and caria
                          </span>
                        </div>
                      </li>
                      <li id="chat-row-7530140" data-user="60683">
                        <div class="chat-message-time">
                          17 Apr, 11:47
                        </div>
                        <div class="chat-message-body">
                          <span>
                            <a
                              href="https://dominating12.com/user/60683"
                              class="chat-name chat-7"
                              style=""
                              >alunturner</a
                            >: but depending on what gus does, maybe the
                            cyclades (central islands) might become the more
                            attractive otion
                          </span>
                        </div>
                      </li>
                      <li id="chat-row-7530141" data-user="60683">
                        <div class="chat-message-time">
                          17 Apr, 11:48
                        </div>
                        <div class="chat-message-body">
                          <span>
                            <a
                              href="https://dominating12.com/user/60683"
                              class="chat-name chat-7"
                              style=""
                              >alunturner</a
                            >: in terms of getting a card for you this turn,
                            argolis/corinthia looking like good option
                          </span>
                        </div>
                      </li>
                      <li id="chat-row-7530143" data-user="62510">
                        <div class="chat-message-time">
                          17 Apr, 11:53
                        </div>
                        <div class="chat-message-body">
                          <span>
                            <a
                              href="https://dominating12.com/user/62510"
                              class="chat-name chat-1"
                              style=""
                              >Heapsrob</a
                            >: Yes let’s see what he does and confer
                          </span>
                        </div>
                      </li>
                      <li id="chat-row-7530144" data-user="62510">
                        <div class="chat-message-time">
                          17 Apr, 11:53
                        </div>
                        <div class="chat-message-body">
                          <span>
                            <a
                              href="https://dominating12.com/user/62510"
                              class="chat-name chat-1"
                              style=""
                              >Heapsrob</a
                            >: But corinthia and argolis do look nice and would
                            give me some joined up territories
                          </span>
                        </div>
                      </li>
                      <li id="chat-row-7530145" data-user="60683">
                        <div class="chat-message-time">
                          17 Apr, 11:58
                        </div>
                        <div class="chat-message-body">
                          <span>
                            <a
                              href="https://dominating12.com/user/60683"
                              class="chat-name chat-7"
                              style=""
                              >alunturner</a
                            >: My current view (before Gus goes) are that if you
                            used your reinforcements to bolster Chania and try
                            and take Crete, then you could take corinthia and
                            reinforce arcadia to athens
                          </span>
                        </div>
                      </li>
                      <li id="chat-row-7530146" data-user="60683">
                        <div class="chat-message-time">
                          17 Apr, 11:58
                        </div>
                        <div class="chat-message-body">
                          <span>
                            <a
                              href="https://dominating12.com/user/60683"
                              class="chat-name chat-7"
                              style=""
                              >alunturner</a
                            >: *fortify arcadia to athens
                          </span>
                        </div>
                      </li>
                      <li id="chat-row-7530147" data-user="60683">
                        <div class="chat-message-time">
                          17 Apr, 11:59
                        </div>
                        <div class="chat-message-body">
                          <span>
                            <a
                              href="https://dominating12.com/user/60683"
                              class="chat-name chat-7"
                              style=""
                              >alunturner</a
                            >: so then athens would serve as a good stepping off
                            point to enter the cyclades next turn
                          </span>
                        </div>
                      </li>
                      <li id="chat-row-7530148" data-user="60683">
                        <div class="chat-message-time">
                          17 Apr, 11:59
                        </div>
                        <div class="chat-message-body">
                          <span>
                            <a
                              href="https://dominating12.com/user/60683"
                              class="chat-name chat-7"
                              style=""
                              >alunturner</a
                            >: mainland greece ivo arcadia is going to be a
                            bloodbath
                          </span>
                        </div>
                      </li>
                      <li id="chat-row-7530149" data-user="60683">
                        <div class="chat-message-time">
                          17 Apr, 12:00
                        </div>
                        <div class="chat-message-body">
                          <span>
                            <a
                              href="https://dominating12.com/user/60683"
                              class="chat-name chat-7"
                              style=""
                              >alunturner</a
                            >: Then on my turn I can attack Crete from the east
                          </span>
                        </div>
                      </li>
                      <li id="chat-row-7530150" data-user="60683">
                        <div class="chat-message-time">
                          17 Apr, 12:00
                        </div>
                        <div class="chat-message-body">
                          <span>
                            <a
                              href="https://dominating12.com/user/60683"
                              class="chat-name chat-7"
                              style=""
                              >alunturner</a
                            >: to knock it down as much as possible so you could
                            take it on your next turn and get the bonus
                          </span>
                        </div>
                      </li>
                      <li id="chat-row-7530154" data-user="62510">
                        <div class="chat-message-time">
                          17 Apr, 12:04
                        </div>
                        <div class="chat-message-body">
                          <span>
                            <a
                              href="https://dominating12.com/user/62510"
                              class="chat-name chat-1"
                              style=""
                              >Heapsrob</a
                            >: So to confirm - consider using reinforments in
                            Chania and attack knossos, then attack argolis from
                            Arcadia with the advantage i already have there
                          </span>
                        </div>
                      </li>
                      <li id="chat-row-7530169" data-user="60683">
                        <div class="chat-message-time">
                          17 Apr, 12:25
                        </div>
                        <div class="chat-message-body">
                          <span>
                            <a
                              href="https://dominating12.com/user/60683"
                              class="chat-name chat-7"
                              style=""
                              >alunturner</a
                            >: yes I think so
                          </span>
                        </div>
                      </li>
                      <li id="chat-row-7530170" data-user="60683">
                        <div class="chat-message-time">
                          17 Apr, 12:25
                        </div>
                        <div class="chat-message-body">
                          <span>
                            <a
                              href="https://dominating12.com/user/60683"
                              class="chat-name chat-7"
                              style=""
                              >alunturner</a
                            >: then when it's time to reinforce, you could put
                            the arcadians into athens so you'll hopefully have a
                            lump of about 5 in athens for your next go
                          </span>
                        </div>
                      </li>
                      <li id="chat-row-7530171" data-user="60683">
                        <div class="chat-message-time">
                          17 Apr, 12:26
                        </div>
                        <div class="chat-message-body">
                          <span>
                            <a
                              href="https://dominating12.com/user/60683"
                              class="chat-name chat-7"
                              style=""
                              >alunturner</a
                            >: which will then give us more options to either go
                            for cyclades or euboea on your next go
                          </span>
                        </div>
                      </li>
                      <li id="chat-row-7530298" data-user="62510">
                        <div class="chat-message-time">
                          17 Apr, 14:40
                        </div>
                        <div class="chat-message-body">
                          <span>
                            <a
                              href="https://dominating12.com/user/62510"
                              class="chat-name chat-1"
                              style=""
                              >Heapsrob</a
                            >: Ive taken Korinthia
                          </span>
                        </div>
                      </li>
                      <li id="chat-row-7530308" data-user="62510">
                        <div class="chat-message-time">
                          17 Apr, 14:40
                        </div>
                        <div class="chat-message-body">
                          <span>
                            <a
                              href="https://dominating12.com/user/62510"
                              class="chat-name chat-1"
                              style=""
                              >Heapsrob</a
                            >: Should I leave those two in Arcadia and just put
                            reinforcements in Athens next go?&nbsp;
                          </span>
                        </div>
                      </li>
                      <li id="chat-row-7530413" data-user="60683">
                        <div class="chat-message-time">
                          17 Apr, 15:21
                        </div>
                        <div class="chat-message-body">
                          <span>
                            <a
                              href="https://dominating12.com/user/60683"
                              class="chat-name chat-7"
                              style=""
                              >alunturner</a
                            >: unlucky in chania
                          </span>
                        </div>
                      </li>
                      <li id="chat-row-7530415" data-user="60683">
                        <div class="chat-message-time">
                          17 Apr, 15:22
                        </div>
                        <div class="chat-message-body">
                          <span>
                            <a
                              href="https://dominating12.com/user/60683"
                              class="chat-name chat-7"
                              style=""
                              >alunturner</a
                            >: I think mike is probably going to help gordon
                            take the dark blue territoriesaround arcadia
                          </span>
                        </div>
                      </li>
                      <li id="chat-row-7530419" data-user="60683">
                        <div class="chat-message-time">
                          17 Apr, 15:23
                        </div>
                        <div class="chat-message-body">
                          <span>
                            <a
                              href="https://dominating12.com/user/60683"
                              class="chat-name chat-7"
                              style=""
                              >alunturner</a
                            >: whereas if you fortify the man from arcadia into
                            athens, on your next go you'd have 7 in athens after
                            reinforcement - easier to then get out to the easy
                            with that many men
                          </span>
                        </div>
                      </li>
                      <li id="chat-row-7530421" data-user="60683">
                        <div class="chat-message-time">
                          17 Apr, 15:24
                        </div>
                        <div class="chat-message-body">
                          <span>
                            <a
                              href="https://dominating12.com/user/60683"
                              class="chat-name chat-7"
                              style=""
                              >alunturner</a
                            >: *to the east
                          </span>
                        </div>
                      </li>
                      <li id="chat-row-7530574" data-user="60683">
                        <div class="chat-message-time">
                          17 Apr, 16:32
                        </div>
                        <div class="chat-message-body">
                          <span>
                            <a
                              href="https://dominating12.com/user/60683"
                              class="chat-name chat-7"
                              style=""
                              >alunturner</a
                            >: It looks like gus and hobbers might be
                            positioning for asia minor
                          </span>
                        </div>
                      </li>
                      <li id="chat-row-7544802" data-user="60683">
                        <div class="chat-message-time">
                          21 Apr, 15:04
                        </div>
                        <div class="chat-message-body">
                          <span>
                            <a
                              href="https://dominating12.com/user/60683"
                              class="chat-name chat-7"
                              style=""
                              >alunturner</a
                            >: Rob I actually think it will be doable for you to
                            take out hobbers next turn
                          </span>
                        </div>
                      </li>
                      <li id="chat-row-7544803" data-user="60683">
                        <div class="chat-message-time">
                          21 Apr, 15:04
                        </div>
                        <div class="chat-message-body">
                          <span>
                            <a
                              href="https://dominating12.com/user/60683"
                              class="chat-name chat-7"
                              style=""
                              >alunturner</a
                            >: depending on how many reinforcements gus ships
                            him
                          </span>
                        </div>
                      </li>
                    </ul>
                    <div
                      id="qoo-on-team-chat"
                      class="quick-on-off qoo-team-chat"
                    >
                      <a
                        href="#"
                        class="show-hide-link"
                        data-id="qoo-off-team-chat"
                        data-class="qoo-team-chat"
                      >
                        <i class="fa fa-caret-right"></i
                      ></a>
                      Server time:
                      <span
                        class="servertime"
                        data-timezone="UTC"
                        data-format="24h"
                        >09:33:12</span
                      ><span class="servertime-error"></span>
                    </div>
                    <div
                      id="qoo-off-team-chat"
                      class="quick-on-off qoo-team-chat off"
                      style="display: none;"
                    >
                      <a
                        href="#"
                        class="show-hide-link"
                        data-id="qoo-on-team-chat"
                        data-class="qoo-team-chat"
                      >
                        <i class="fa fa-caret-left"></i
                      ></a>
                    </div>
                    <input
                      type="hidden"
                      class="last_updated"
                      value="2020-04-21 15:04:31"
                    />
                    <form class="chat-form" autocomplete="off">
                      <div class="to">To team:</div>
                      <input
                        type="text"
                        class="body autofocus"
                        name="body"
                        placeholder="Send team chat message"
                        maxlength="220"
                      /><button type="submit">Send chat</button>
                    </form>
                  </div>
                </div>

                <div id="preset-chat" style="display: none;">
                  <div
                    id="preset-chat-menu"
                    class="tab-section preset-chat-menu"
                  >
                    <!-- The preset chat categories -->
                    <h2>Preset chat categories</h2>
                    <ul class="list-unstyled">
                      <li>
                        <a
                          href="#"
                          class="show-hide-link"
                          data-id="preset-chat-menu-game"
                          data-class="preset-chat-menu"
                          ><i class="fa fa-comments"></i>Game</a
                        >
                      </li>
                      <li>
                        <a
                          href="#"
                          class="show-hide-link"
                          data-id="preset-chat-menu-players"
                          data-class="preset-chat-menu"
                          ><i class="fa fa-comments"></i>Players</a
                        >
                      </li>
                      <li>
                        <a
                          href="#"
                          class="show-hide-link"
                          data-id="preset-chat-menu-setup"
                          data-class="preset-chat-menu"
                          ><i class="fa fa-comments"></i>Setup</a
                        >
                      </li>
                      <li>
                        <a
                          href="#"
                          class="show-hide-link"
                          data-id="preset-chat-menu-tips-and-tricks"
                          data-class="preset-chat-menu"
                          ><i class="fa fa-comments"></i>Tips and tricks</a
                        >
                      </li>
                      <li>
                        <a
                          href="#"
                          class="show-hide-link"
                          data-id="preset-chat-menu-admin"
                          data-class="preset-chat-menu"
                          ><i class="fa fa-comments"></i>Admin</a
                        >
                      </li>
                      <li>
                        <a
                          href="#"
                          class="show-hide-link"
                          data-id="preset-chat-menu-smilies"
                          data-class="preset-chat-menu"
                          ><i class="fa fa-comments"></i>Smilies</a
                        >
                      </li>
                    </ul>
                  </div>
                  <div
                    id="preset-chat-menu-game"
                    class="tab-section preset-chat-menu"
                  >
                    <!-- Header and back 'button' -->
                    <a
                      href="#"
                      class="back show-hide-link"
                      data-id="preset-chat-menu"
                      data-class="preset-chat-menu"
                      ><i class="fa fa-angle-double-left"></i>back to
                      categories</a
                    >
                    <h2>
                      <div class="ontop">
                        <i class="fa fa-comments"></i> Game
                      </div>
                    </h2>
                    <!-- The preset chats -->
                    <ul class="list-unstyled">
                      <li><a href="#" class="preset-chat-line">Yes</a></li>
                      <li><a href="#" class="preset-chat-line">No</a></li>
                      <li><a href="#" class="preset-chat-line">LOL</a></li>
                      <li>
                        <a href="#" class="preset-chat-line">Good game.</a>
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line">Good luck.</a>
                      </li>
                      <li><a href="#" class="preset-chat-line">GG</a></li>
                      <li><a href="#" class="preset-chat-line">GL</a></li>
                      <li><a href="#" class="preset-chat-line">Hello</a></li>
                      <li>
                        <a href="#" class="preset-chat-line">Hello everyone.</a>
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line">Yarrr! :pirate:</a>
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line">Thank you.</a>
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line">You're welcome.</a>
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line">I'm sorry.</a>
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >I made a mistake.</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >Epic fail by me.</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >Sorry, I was AFK (Away from keyboard).</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >I have to go now.</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >I'm sorry but I can't finish this game.</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >I do not understand your strategy.</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >You got a lucky drop.</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >I got a lucky drop.</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >You have been very lucky.</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >The dice are on your side today.</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >If you keep attacking me we will both lose.</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >I have no card set.</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >I lost too many troops last turn due to bad dice.</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >I am the greatest player who has ever lived. Bow down
                          to my superiority.</a
                        >
                      </li>
                    </ul>
                  </div>
                  <div
                    id="preset-chat-menu-players"
                    class="tab-section preset-chat-menu"
                  >
                    <!-- Header and back 'button' -->
                    <a
                      href="#"
                      class="back show-hide-link"
                      data-id="preset-chat-menu"
                      data-class="preset-chat-menu"
                      ><i class="fa fa-angle-double-left"></i>back to
                      categories</a
                    >
                    <h2>
                      <div class="ontop">
                        <i class="fa fa-comments"></i> Players
                      </div>
                    </h2>
                    <!-- The preset chats -->
                    <ul class="list-unstyled">
                      <li>
                        <a href="#" class="preset-chat-line"
                          >He/she logged out.</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >Quit manipulating everyone.</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >Don't believe him/her.</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >It will only help him/her and not you.</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >Interesting move.</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >Please take your turns faster.</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >Prepare to be owned!</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >I do not like playing with you.</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >Please do not join the games I create.</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >You are a worthy opponent.</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >I will not attack you until the game is balanced
                          again and everyone has an equal chance of winning.</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >Quit attacking me or I will retaliate with
                          vengeance.</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >If you can't kill me then protect me from those who
                          can.</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >If you don't break my region then I won't break
                          yours.</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line">@Black player:</a>
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line">@Blue player:</a>
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line">@Green player:</a>
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >@Light Blue player:</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line">@Orange player:</a>
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line">@Pink player:</a>
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line">@Purple player:</a>
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line">@Red player:</a>
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line">@Yellow player:</a>
                      </li>
                    </ul>
                  </div>
                  <div
                    id="preset-chat-menu-setup"
                    class="tab-section preset-chat-menu"
                  >
                    <!-- Header and back 'button' -->
                    <a
                      href="#"
                      class="back show-hide-link"
                      data-id="preset-chat-menu"
                      data-class="preset-chat-menu"
                      ><i class="fa fa-angle-double-left"></i>back to
                      categories</a
                    >
                    <h2>
                      <div class="ontop">
                        <i class="fa fa-comments"></i> Setup
                      </div>
                    </h2>
                    <!-- The preset chats -->
                    <ul class="list-unstyled">
                      <li>
                        <a href="#" class="preset-chat-line"
                          >I'm sorry, I don't have time to play right now.</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >I don't want to play on this map.</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >I don't like the Fog of War option.</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >I'm not interested in playing this setup.</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >I'll create a game with the settings I want and
                          invite you.</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >This game needs to start soon, otherwise I won't have
                          time to finish it.</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >I will play the next game.</a
                        >
                      </li>
                    </ul>
                  </div>
                  <div
                    id="preset-chat-menu-tips-and-tricks"
                    class="tab-section preset-chat-menu"
                  >
                    <!-- Header and back 'button' -->
                    <a
                      href="#"
                      class="back show-hide-link"
                      data-id="preset-chat-menu"
                      data-class="preset-chat-menu"
                      ><i class="fa fa-angle-double-left"></i>back to
                      categories</a
                    >
                    <h2>
                      <div class="ontop">
                        <i class="fa fa-comments"></i> Tips and tricks
                      </div>
                    </h2>
                    <!-- The preset chats -->
                    <ul class="list-unstyled">
                      <li>
                        <a href="#" class="preset-chat-line"
                          >You gave the other player the game by over attacking
                          me.</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >Don't target me because of my rank, target the person
                          who is going to win.</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >By weakening me you hurt the two of us and gave
                          everyone else an advantage.</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >Don't weaken the weakest player because then the
                          strongest player will be able to kill them for their
                          cards.</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >Thanks for opening an attack path for me ;)</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >Bad move, you opened an attack path for them.</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >This is a capitals game. If you lose your capital
                          then you are dead and all your other territories and
                          troops are then owned by the player who took your
                          capital.</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >For the love of Dominating12 keep your capital
                          strong!</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >Your capital is the territory with the white ring
                          around it.</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >Your capital is the territory that has extra troops
                          on it.</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >Capped Cards: The card turn in value will only
                          increase until the cap is reached.</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >In a domination game you have to conquer a specific
                          percentage of territories to win. So don't leave too
                          many 1's behind.</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >In an assassination game you have to kill your target
                          to win. If someone else kills your target you get your
                          previous target's target.</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >Your target is on the right side of the screen, just
                          above the chat.</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >All targets are divided randomly but circular (eg: A
                          -&gt; D -&gt; B -&gt; C -&gt; A). This means your
                          target never has to kill you (unless there's only two
                          players left).</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >Normal Cards: 5 or more cards are needed in order to
                          turn in a set after killing a player.</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >Advanced Cards: If you have a set after killing a
                          player then you can turn it in.</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >This is a team game. To see what team you are on,
                          look for the letter at the left of your username at
                          the bottom-left corner of the page.</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >This is a team game. Your partner is based on join
                          order. 1+2 vs 3+4 vs 5+6 etc.</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >Use team chat to cooperate with your teammate(s).</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >You can place troops on and fortify to your
                          teammates' territories.</a
                        >
                      </li>
                    </ul>
                  </div>
                  <div
                    id="preset-chat-menu-admin"
                    class="tab-section preset-chat-menu"
                  >
                    <!-- Header and back 'button' -->
                    <a
                      href="#"
                      class="back show-hide-link"
                      data-id="preset-chat-menu"
                      data-class="preset-chat-menu"
                      ><i class="fa fa-angle-double-left"></i>back to
                      categories</a
                    >
                    <h2>
                      <div class="ontop">
                        <i class="fa fa-comments"></i> Admin
                      </div>
                    </h2>
                    <!-- The preset chats -->
                    <ul class="list-unstyled">
                      <li>
                        <a href="#" class="preset-chat-line"
                          >This game is glitched.</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >Try messaging one of the [info]staff[/info]</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >This kind of teaming is not allowed. Please read the
                          site [info]rules[/info].</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >Murder-suicide: Excessively attacking a player
                          knowing beforehand that it will cause you both to
                          lose.</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >I am reporting this game to an Admin for review.</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >An Admin can reverse the points that were
                          rewarded.</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >Do you want me to ask an Admin or Moderator to cancel
                          this game?</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >Do you want me to ask an Admin or Moderator to change
                          the game to a long term (24 hour turns) game?</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >I'm sorry but my chat is limited to a list of preset
                          phrases because I failed to follow the site's
                          rules.</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >I cannot answer your question using the limited
                          phrases that I am allowed to send.</a
                        >
                      </li>
                      <li>
                        <a href="#" class="preset-chat-line"
                          >Boo on cigarettes!</a
                        >
                      </li>
                    </ul>
                  </div>
                  <div
                    id="preset-chat-menu-smilies"
                    class="tab-section preset-chat-menu"
                  >
                    <!-- Header and back 'button' -->
                    <a
                      href="#"
                      class="back show-hide-link"
                      data-id="preset-chat-menu"
                      data-class="preset-chat-menu"
                      ><i class="fa fa-angle-double-left"></i>back to
                      categories</a
                    >
                    <h2>
                      <div class="ontop">
                        <i class="fa fa-comments"></i> Smilies
                      </div>
                    </h2>
                    <!-- The preset chats -->
                    <ul class="list-unstyled">
                      <li><a href="#" class="preset-chat-line">:)</a></li>
                      <li><a href="#" class="preset-chat-line">;)</a></li>
                      <li><a href="#" class="preset-chat-line">:(</a></li>
                      <li><a href="#" class="preset-chat-line">:P</a></li>
                      <li><a href="#" class="preset-chat-line">:D</a></li>
                      <li><a href="#" class="preset-chat-line">:C</a></li>
                      <li><a href="#" class="preset-chat-line">:')</a></li>
                      <li><a href="#" class="preset-chat-line">(S)</a></li>
                      <li><a href="#" class="preset-chat-line">:S</a></li>
                      <li><a href="#" class="preset-chat-line">:o</a></li>
                      <li><a href="#" class="preset-chat-line">:]</a></li>
                      <li><a href="#" class="preset-chat-line">:'[</a></li>
                      <li><a href="#" class="preset-chat-line">o_O</a></li>
                      <li><a href="#" class="preset-chat-line">|)</a></li>
                      <li><a href="#" class="preset-chat-line">:|</a></li>
                      <li><a href="#" class="preset-chat-line">:,</a></li>
                      <li><a href="#" class="preset-chat-line">:3</a></li>
                      <li><a href="#" class="preset-chat-line">:X</a></li>
                      <li><a href="#" class="preset-chat-line">:{</a></li>
                      <li><a href="#" class="preset-chat-line">&gt;:D</a></li>
                      <li><a href="#" class="preset-chat-line">^^</a></li>
                      <li><a href="#" class="preset-chat-line">;D</a></li>
                      <li><a href="#" class="preset-chat-line">:-*</a></li>
                      <li><a href="#" class="preset-chat-line">&gt;:(</a></li>
                      <li><a href="#" class="preset-chat-line">B)</a></li>
                      <li><a href="#" class="preset-chat-line">B|</a></li>
                      <li><a href="#" class="preset-chat-line">:oooh:</a></li>
                      <li><a href="#" class="preset-chat-line">:roll:</a></li>
                      <li><a href="#" class="preset-chat-line">:pirate:</a></li>
                      <li><a href="#" class="preset-chat-line">:ninja:</a></li>
                      <li><a href="#" class="preset-chat-line">:hand:</a></li>
                      <li><a href="#" class="preset-chat-line">:blush:</a></li>
                      <li><a href="#" class="preset-chat-line">:thumbs:</a></li>
                    </ul>
                  </div>
                  <!-- The chat to target the preset lines to (will be initialised) -->
                  <div id="preset-chat-target">
                    <a href="#" class="button public"
                      >To all <i class="fa fa-comment-o"></i
                    ></a>
                  </div>
                </div>

                <div id="game-log" style="display: none;">
                  <div class="chat-wrapper">
                    <ul class="chat-messages" id="game-log-list">
                      <li id="logentry-86528528" data-entry-id="86528528">
                        <div class="chat-message-time">
                          22 Apr, 12:40:27
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60940"
                            class="player player-2"
                            style=""
                            >Excalibur_83</a
                          >
                          received 20 tokens.
                        </div>
                      </li>
                      <li id="logentry-86528527" data-entry-id="86528527">
                        <div class="chat-message-time">
                          22 Apr, 12:40:27
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60940"
                            class="player player-2"
                            style=""
                            >Excalibur_83</a
                          >
                          lost 23 rating.
                        </div>
                      </li>
                      <li id="logentry-86528526" data-entry-id="86528526">
                        <div class="chat-message-time">
                          22 Apr, 12:40:27
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >
                          received 20 tokens.
                        </div>
                      </li>
                      <li id="logentry-86528525" data-entry-id="86528525">
                        <div class="chat-message-time">
                          22 Apr, 12:40:27
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >
                          received 39 rating.
                        </div>
                      </li>
                      <li id="logentry-86528524" data-entry-id="86528524">
                        <div class="chat-message-time">
                          22 Apr, 12:40:27
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >
                          won the game.
                        </div>
                      </li>
                      <li id="logentry-86528523" data-entry-id="86528523">
                        <div class="chat-message-time">
                          22 Apr, 12:40:27
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >
                          received 20 tokens.
                        </div>
                      </li>
                      <li id="logentry-86528522" data-entry-id="86528522">
                        <div class="chat-message-time">
                          22 Apr, 12:40:27
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >
                          lost 17 rating.
                        </div>
                      </li>
                      <li id="logentry-86528521" data-entry-id="86528521">
                        <div class="chat-message-time">
                          22 Apr, 12:40:27
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >
                          received 20 tokens.
                        </div>
                      </li>
                      <li id="logentry-86528520" data-entry-id="86528520">
                        <div class="chat-message-time">
                          22 Apr, 12:40:27
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >
                          lost 18 rating.
                        </div>
                      </li>
                      <li id="logentry-86528519" data-entry-id="86528519">
                        <div class="chat-message-time">
                          22 Apr, 12:40:27
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >
                          received 20 tokens.
                        </div>
                      </li>
                      <li id="logentry-86528518" data-entry-id="86528518">
                        <div class="chat-message-time">
                          22 Apr, 12:40:27
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >
                          received 39 rating.
                        </div>
                      </li>
                      <li id="logentry-86528517" data-entry-id="86528517">
                        <div class="chat-message-time">
                          22 Apr, 12:40:27
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >
                          won the game.
                        </div>
                      </li>
                      <li id="logentry-86528516" data-entry-id="86528516">
                        <div class="chat-message-time">
                          22 Apr, 12:40:27
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >
                          received 20 tokens.
                        </div>
                      </li>
                      <li id="logentry-86528515" data-entry-id="86528515">
                        <div class="chat-message-time">
                          22 Apr, 12:40:27
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >
                          lost 20 rating.
                        </div>
                      </li>
                      <li id="logentry-86528514" data-entry-id="86528514">
                        <div class="chat-message-time">
                          22 Apr, 12:40:27
                        </div>
                        <div class="chat-message-body">
                          Game finished.
                        </div>
                      </li>
                      <li id="logentry-86528513" data-entry-id="86528513">
                        <div class="chat-message-time">
                          22 Apr, 12:40:27
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >
                          was defeated by
                          <a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >.
                        </div>
                      </li>
                      <li id="logentry-86528512" data-entry-id="86528512">
                        <div class="chat-message-time">
                          22 Apr, 12:40:27
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3380)"
                            >Locris</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3379)"
                            >Aetolia</a
                          >
                          (<a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >) conquering it, killing 1, losing 0.
                        </div>
                      </li>
                      <li id="logentry-86528502" data-entry-id="86528502">
                        <div class="chat-message-time">
                          22 Apr, 12:40:23
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3382)"
                            >Phocis</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3380)"
                            >Locris</a
                          >
                          with 7 troops.
                        </div>
                      </li>
                      <li id="logentry-86528500" data-entry-id="86528500">
                        <div class="chat-message-time">
                          22 Apr, 12:40:22
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3382)"
                            >Phocis</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3380)"
                            >Locris</a
                          >
                          (<a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >) conquering it, killing 1, losing 0.
                        </div>
                      </li>
                      <li id="logentry-86528484" data-entry-id="86528484">
                        <div class="chat-message-time">
                          22 Apr, 12:40:17
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3383)"
                            >Boeotia</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3382)"
                            >Phocis</a
                          >
                          with 8 troops.
                        </div>
                      </li>
                      <li id="logentry-86528477" data-entry-id="86528477">
                        <div class="chat-message-time">
                          22 Apr, 12:40:15
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3383)"
                            >Boeotia</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3382)"
                            >Phocis</a
                          >
                          (<a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >) conquering it, killing 1, losing 0.
                        </div>
                      </li>
                      <li id="logentry-86528467" data-entry-id="86528467">
                        <div class="chat-message-time">
                          22 Apr, 12:40:10
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3383)"
                            >Boeotia</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3385)"
                            >Euboea</a
                          >
                          with 1 troop.
                        </div>
                      </li>
                      <li id="logentry-86528441" data-entry-id="86528441">
                        <div class="chat-message-time">
                          22 Apr, 12:40:07
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3383)"
                            >Boeotia</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3385)"
                            >Euboea</a
                          >
                          (<a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >) conquering it, killing 8, losing 11.
                        </div>
                      </li>
                      <li id="logentry-86528424" data-entry-id="86528424">
                        <div class="chat-message-time">
                          22 Apr, 12:39:42
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3393)"
                            >Pelagonia</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3392)"
                            >Olympus</a
                          >
                          with 11 troops.
                        </div>
                      </li>
                      <li id="logentry-86528413" data-entry-id="86528413">
                        <div class="chat-message-time">
                          22 Apr, 12:39:37
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3393)"
                            >Pelagonia</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3392)"
                            >Olympus</a
                          >
                          (<a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >) conquering it, killing 1, losing 0.
                        </div>
                      </li>
                      <li id="logentry-86528403" data-entry-id="86528403">
                        <div class="chat-message-time">
                          22 Apr, 12:39:32
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3370)"
                            >Ionannina</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3393)"
                            >Pelagonia</a
                          >
                          with 12 troops.
                        </div>
                      </li>
                      <li id="logentry-86528395" data-entry-id="86528395">
                        <div class="chat-message-time">
                          22 Apr, 12:39:29
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3370)"
                            >Ionannina</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3393)"
                            >Pelagonia</a
                          >
                          (<a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >) conquering it, killing 5, losing 1.
                        </div>
                      </li>
                      <li id="logentry-86528383" data-entry-id="86528383">
                        <div class="chat-message-time">
                          22 Apr, 12:39:20
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3383)"
                            >Boeotia</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) was reinforced by
                          <a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >
                          with 12 troops.
                        </div>
                      </li>
                      <li id="logentry-86528376" data-entry-id="86528376">
                        <div class="chat-message-time">
                          22 Apr, 12:39:15
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3370)"
                            >Ionannina</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) was reinforced by
                          <a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >
                          with 8 troops.
                        </div>
                      </li>
                      <li id="logentry-86528363" data-entry-id="86528363">
                        <div class="chat-message-time">
                          22 Apr, 12:39:04
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >
                          received 20 troops for turning in cards
                          <a
                            onclick="highlightTerritory(3391)"
                            class="game-card color-3"
                            >Phthia</a
                          >,
                          <a
                            onclick="highlightTerritory(3398)"
                            class="game-card color-1"
                            >Thasos</a
                          >, and
                          <a
                            onclick="highlightTerritory(3388)"
                            class="game-card color-2"
                            >Magnesia</a
                          >.
                        </div>
                      </li>
                      <li id="logentry-86528362" data-entry-id="86528362">
                        <div class="chat-message-time">
                          22 Apr, 12:39:04
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >
                          received 2 troops on
                          <a
                            class="territory"
                            onclick="highlightTerritory(3388)"
                            >Magnesia</a
                          >
                        </div>
                      </li>
                      <li id="logentry-86528361" data-entry-id="86528361">
                        <div class="chat-message-time">
                          22 Apr, 12:39:04
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >
                          received 2 troops on
                          <a
                            class="territory"
                            onclick="highlightTerritory(3398)"
                            >Thasos</a
                          >
                        </div>
                      </li>
                      <li id="logentry-86528360" data-entry-id="86528360">
                        <div class="chat-message-time">
                          22 Apr, 12:39:04
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >
                          received 2 troops on
                          <a
                            class="territory"
                            onclick="highlightTerritory(3391)"
                            >Phthia</a
                          >
                        </div>
                      </li>
                      <li id="logentry-86528344" data-entry-id="86528344">
                        <div class="chat-message-time">
                          22 Apr, 12:38:52
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3407)"
                            >Samos</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3404)"
                            >Icaria</a
                          >
                          with 14 troops.
                        </div>
                      </li>
                      <li id="logentry-86528342" data-entry-id="86528342">
                        <div class="chat-message-time">
                          22 Apr, 12:38:49
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >
                          was defeated by
                          <a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >.
                        </div>
                      </li>
                      <li id="logentry-86528341" data-entry-id="86528341">
                        <div class="chat-message-time">
                          22 Apr, 12:38:49
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3407)"
                            >Samos</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3404)"
                            >Icaria</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) conquering it, killing 1, losing 0.
                        </div>
                      </li>
                      <li id="logentry-86528334" data-entry-id="86528334">
                        <div class="chat-message-time">
                          22 Apr, 12:38:44
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3406)"
                            >Ionia</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3407)"
                            >Samos</a
                          >
                          with 15 troops.
                        </div>
                      </li>
                      <li id="logentry-86528321" data-entry-id="86528321">
                        <div class="chat-message-time">
                          22 Apr, 12:38:42
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3406)"
                            >Ionia</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3407)"
                            >Samos</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) conquering it, killing 4, losing 2.
                        </div>
                      </li>
                      <li id="logentry-86528319" data-entry-id="86528319">
                        <div class="chat-message-time">
                          22 Apr, 12:38:36
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3405)"
                            >Mysia</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3406)"
                            >Ionia</a
                          >
                          with 18 troops.
                        </div>
                      </li>
                      <li id="logentry-86528315" data-entry-id="86528315">
                        <div class="chat-message-time">
                          22 Apr, 12:38:34
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3405)"
                            >Mysia</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3406)"
                            >Ionia</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) conquering it, killing 1, losing 0.
                        </div>
                      </li>
                      <li id="logentry-86528310" data-entry-id="86528310">
                        <div class="chat-message-time">
                          22 Apr, 12:38:30
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3402)"
                            >Lesvos</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3405)"
                            >Mysia</a
                          >
                          with 19 troops.
                        </div>
                      </li>
                      <li id="logentry-86528307" data-entry-id="86528307">
                        <div class="chat-message-time">
                          22 Apr, 12:38:28
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3402)"
                            >Lesvos</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3405)"
                            >Mysia</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) conquering it, killing 1, losing 0.
                        </div>
                      </li>
                      <li id="logentry-86528299" data-entry-id="86528299">
                        <div class="chat-message-time">
                          22 Apr, 12:38:25
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3402)"
                            >Lesvos</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3403)"
                            >Chios</a
                          >
                          with 1 troop.
                        </div>
                      </li>
                      <li id="logentry-86528293" data-entry-id="86528293">
                        <div class="chat-message-time">
                          22 Apr, 12:38:21
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3402)"
                            >Lesvos</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3403)"
                            >Chios</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) conquering it, killing 1, losing 1.
                        </div>
                      </li>
                      <li id="logentry-86528285" data-entry-id="86528285">
                        <div class="chat-message-time">
                          22 Apr, 12:38:15
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3401)"
                            >Troy</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3402)"
                            >Lesvos</a
                          >
                          with 22 troops.
                        </div>
                      </li>
                      <li id="logentry-86528278" data-entry-id="86528278">
                        <div class="chat-message-time">
                          22 Apr, 12:38:14
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3401)"
                            >Troy</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3402)"
                            >Lesvos</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) conquering it, killing 1, losing 0.
                        </div>
                      </li>
                      <li id="logentry-86528256" data-entry-id="86528256">
                        <div class="chat-message-time">
                          22 Apr, 12:37:59
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3383)"
                            >Boeotia</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) was reinforced by
                          <a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >
                          with 6 troops.
                        </div>
                      </li>
                      <li id="logentry-86528234" data-entry-id="86528234">
                        <div class="chat-message-time">
                          22 Apr, 12:37:51
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3370)"
                            >Ionannina</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) was reinforced by
                          <a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >
                          with 5 troops.
                        </div>
                      </li>
                      <li id="logentry-86528138" data-entry-id="86528138">
                        <div class="chat-message-time">
                          22 Apr, 12:36:40
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >
                          received 1 troop for holding North Aegean Islands.
                        </div>
                      </li>
                      <li id="logentry-86528137" data-entry-id="86528137">
                        <div class="chat-message-time">
                          22 Apr, 12:36:40
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >
                          received 3 troops for holding Epirus.
                        </div>
                      </li>
                      <li id="logentry-86528136" data-entry-id="86528136">
                        <div class="chat-message-time">
                          22 Apr, 12:36:40
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >
                          received 7 troops for 21 territories.
                        </div>
                      </li>
                      <li id="logentry-86528135" data-entry-id="86528135">
                        <div class="chat-message-time">
                          22 Apr, 12:36:40
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >
                          started the turn.
                        </div>
                      </li>
                      <li id="logentry-86527936" data-entry-id="86527936">
                        <div class="chat-message-time">
                          22 Apr, 12:34:04
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >
                          ended the turn.
                        </div>
                      </li>
                      <li id="logentry-86527935" data-entry-id="86527935">
                        <div class="chat-message-time">
                          22 Apr, 12:34:04
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3407)"
                            >Samos</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) was fortified from
                          <a
                            class="territory"
                            onclick="highlightTerritory(3405)"
                            >Mysia</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) with 3 troops.
                        </div>
                      </li>
                      <li id="logentry-86527886" data-entry-id="86527886">
                        <div class="chat-message-time">
                          22 Apr, 12:33:29
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3405)"
                            >Mysia</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3401)"
                            >Troy</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) killing 0, losing 2.
                        </div>
                      </li>
                      <li id="logentry-86527764" data-entry-id="86527764">
                        <div class="chat-message-time">
                          22 Apr, 12:31:57
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3404)"
                            >Icaria</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3415)"
                            >North Cyclades</a
                          >
                          (<a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >) killing 0, losing 3.
                        </div>
                      </li>
                      <li id="logentry-86527759" data-entry-id="86527759">
                        <div class="chat-message-time">
                          22 Apr, 12:31:51
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3404)"
                            >Icaria</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) was reinforced by
                          <a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >
                          with 3 troops.
                        </div>
                      </li>
                      <li id="logentry-86527737" data-entry-id="86527737">
                        <div class="chat-message-time">
                          22 Apr, 12:31:25
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >
                          received 3 troops for 6 territories.
                        </div>
                      </li>
                      <li id="logentry-86527736" data-entry-id="86527736">
                        <div class="chat-message-time">
                          22 Apr, 12:31:25
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >
                          started the turn.
                        </div>
                      </li>
                      <li id="logentry-86526878" data-entry-id="86526878">
                        <div class="chat-message-time">
                          22 Apr, 12:22:25
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >
                          ended the turn.
                        </div>
                      </li>
                      <li id="logentry-86526877" data-entry-id="86526877">
                        <div class="chat-message-time">
                          22 Apr, 12:22:25
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >
                          received a card.
                        </div>
                      </li>
                      <li id="logentry-86526876" data-entry-id="86526876">
                        <div class="chat-message-time">
                          22 Apr, 12:22:25
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3385)"
                            >Euboea</a
                          >
                          (<a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >) was fortified from
                          <a
                            class="territory"
                            onclick="highlightTerritory(3380)"
                            >Locris</a
                          >
                          (<a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >) with 2 troops.
                        </div>
                      </li>
                      <li id="logentry-86526850" data-entry-id="86526850">
                        <div class="chat-message-time">
                          22 Apr, 12:22:15
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3380)"
                            >Locris</a
                          >
                          (<a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3379)"
                            >Aetolia</a
                          >
                          with 1 troop.
                        </div>
                      </li>
                      <li id="logentry-86526665" data-entry-id="86526665">
                        <div class="chat-message-time">
                          22 Apr, 12:20:32
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3380)"
                            >Locris</a
                          >
                          (<a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3379)"
                            >Aetolia</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) conquering it, killing 4, losing 0.
                        </div>
                      </li>
                      <li id="logentry-86526659" data-entry-id="86526659">
                        <div class="chat-message-time">
                          22 Apr, 12:20:22
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3380)"
                            >Locris</a
                          >
                          (<a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >) was reinforced by
                          <a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >
                          with 3 troops.
                        </div>
                      </li>
                      <li id="logentry-86526604" data-entry-id="86526604">
                        <div class="chat-message-time">
                          22 Apr, 12:19:42
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >
                          received 3 troops for 5 territories.
                        </div>
                      </li>
                      <li id="logentry-86526603" data-entry-id="86526603">
                        <div class="chat-message-time">
                          22 Apr, 12:19:42
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >
                          started the turn.
                        </div>
                      </li>
                      <li id="logentry-86525691" data-entry-id="86525691">
                        <div class="chat-message-time">
                          22 Apr, 12:10:03
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >
                          ended the turn.
                        </div>
                      </li>
                      <li id="logentry-86525690" data-entry-id="86525690">
                        <div class="chat-message-time">
                          22 Apr, 12:10:03
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >
                          received a card.
                        </div>
                      </li>
                      <li id="logentry-86525689" data-entry-id="86525689">
                        <div class="chat-message-time">
                          22 Apr, 12:10:03
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3401)"
                            >Troy</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) was fortified from
                          <a
                            class="territory"
                            onclick="highlightTerritory(3409)"
                            >Cos</a
                          >
                          (<a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >) with 22 troops.
                        </div>
                      </li>
                      <li id="logentry-86525383" data-entry-id="86525383">
                        <div class="chat-message-time">
                          22 Apr, 12:07:37
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3381)"
                            >Doris</a
                          >
                          (<a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3379)"
                            >Aetolia</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) killing 4, losing 6.
                        </div>
                      </li>
                      <li id="logentry-86525355" data-entry-id="86525355">
                        <div class="chat-message-time">
                          22 Apr, 12:07:16
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3390)"
                            >Malia</a
                          >
                          (<a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3381)"
                            >Doris</a
                          >
                          with 7 troops.
                        </div>
                      </li>
                      <li id="logentry-86525345" data-entry-id="86525345">
                        <div class="chat-message-time">
                          22 Apr, 12:07:13
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3390)"
                            >Malia</a
                          >
                          (<a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3381)"
                            >Doris</a
                          >
                          (<a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >) conquering it, killing 1, losing 1.
                        </div>
                      </li>
                      <li id="logentry-86525219" data-entry-id="86525219">
                        <div class="chat-message-time">
                          22 Apr, 12:06:03
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3408)"
                            >Caria</a
                          >
                          (<a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3409)"
                            >Cos</a
                          >
                          with 23 troops.
                        </div>
                      </li>
                      <li id="logentry-86525214" data-entry-id="86525214">
                        <div class="chat-message-time">
                          22 Apr, 12:06:01
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >
                          was defeated by
                          <a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >.
                        </div>
                      </li>
                      <li id="logentry-86525213" data-entry-id="86525213">
                        <div class="chat-message-time">
                          22 Apr, 12:06:01
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3408)"
                            >Caria</a
                          >
                          (<a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3409)"
                            >Cos</a
                          >
                          (<a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >) conquering it, killing 1, losing 0.
                        </div>
                      </li>
                      <li id="logentry-86525207" data-entry-id="86525207">
                        <div class="chat-message-time">
                          22 Apr, 12:05:56
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3410)"
                            >Rhodes</a
                          >
                          (<a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3408)"
                            >Caria</a
                          >
                          with 24 troops.
                        </div>
                      </li>
                      <li id="logentry-86525188" data-entry-id="86525188">
                        <div class="chat-message-time">
                          22 Apr, 12:05:54
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3410)"
                            >Rhodes</a
                          >
                          (<a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3408)"
                            >Caria</a
                          >
                          (<a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >) conquering it, killing 1, losing 1.
                        </div>
                      </li>
                      <li id="logentry-86525178" data-entry-id="86525178">
                        <div class="chat-message-time">
                          22 Apr, 12:05:38
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3411)"
                            >Karpathos</a
                          >
                          (<a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3410)"
                            >Rhodes</a
                          >
                          with 26 troops.
                        </div>
                      </li>
                      <li id="logentry-86525172" data-entry-id="86525172">
                        <div class="chat-message-time">
                          22 Apr, 12:05:36
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3411)"
                            >Karpathos</a
                          >
                          (<a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3410)"
                            >Rhodes</a
                          >
                          (<a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >) conquering it, killing 1, losing 0.
                        </div>
                      </li>
                      <li id="logentry-86525160" data-entry-id="86525160">
                        <div class="chat-message-time">
                          22 Apr, 12:05:30
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3412)"
                            >Dicte</a
                          >
                          (<a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3411)"
                            >Karpathos</a
                          >
                          with 27 troops.
                        </div>
                      </li>
                      <li id="logentry-86525144" data-entry-id="86525144">
                        <div class="chat-message-time">
                          22 Apr, 12:05:27
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3412)"
                            >Dicte</a
                          >
                          (<a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3411)"
                            >Karpathos</a
                          >
                          (<a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >) conquering it, killing 3, losing 0.
                        </div>
                      </li>
                      <li id="logentry-86525115" data-entry-id="86525115">
                        <div class="chat-message-time">
                          22 Apr, 12:05:07
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3415)"
                            >North Cyclades</a
                          >
                          (<a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3417)"
                            >East Cyclades</a
                          >
                          with 1 troop.
                        </div>
                      </li>
                      <li id="logentry-86525088" data-entry-id="86525088">
                        <div class="chat-message-time">
                          22 Apr, 12:04:52
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3415)"
                            >North Cyclades</a
                          >
                          (<a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3417)"
                            >East Cyclades</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) conquering it, killing 1, losing 1.
                        </div>
                      </li>
                      <li id="logentry-86525081" data-entry-id="86525081">
                        <div class="chat-message-time">
                          22 Apr, 12:04:46
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3416)"
                            >West Cyclades</a
                          >
                          (<a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3415)"
                            >North Cyclades</a
                          >
                          with 4 troops.
                        </div>
                      </li>
                      <li id="logentry-86525072" data-entry-id="86525072">
                        <div class="chat-message-time">
                          22 Apr, 12:04:43
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3416)"
                            >West Cyclades</a
                          >
                          (<a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3415)"
                            >North Cyclades</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) conquering it, killing 3, losing 1.
                        </div>
                      </li>
                      <li id="logentry-86525067" data-entry-id="86525067">
                        <div class="chat-message-time">
                          22 Apr, 12:04:36
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3423)"
                            >Sparta</a
                          >
                          (<a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3416)"
                            >West Cyclades</a
                          >
                          with 6 troops.
                        </div>
                      </li>
                      <li id="logentry-86525060" data-entry-id="86525060">
                        <div class="chat-message-time">
                          22 Apr, 12:04:34
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3423)"
                            >Sparta</a
                          >
                          (<a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3416)"
                            >West Cyclades</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) conquering it, killing 1, losing 1.
                        </div>
                      </li>
                      <li id="logentry-86525044" data-entry-id="86525044">
                        <div class="chat-message-time">
                          22 Apr, 12:04:23
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3384)"
                            >Athens</a
                          >
                          (<a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3416)"
                            >West Cyclades</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) killing 2, losing 0.
                        </div>
                      </li>
                      <li id="logentry-86525014" data-entry-id="86525014">
                        <div class="chat-message-time">
                          22 Apr, 12:04:07
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3412)"
                            >Dicte</a
                          >
                          (<a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >) was reinforced by
                          <a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >
                          with 18 troops.
                        </div>
                      </li>
                      <li id="logentry-86525006" data-entry-id="86525006">
                        <div class="chat-message-time">
                          22 Apr, 12:04:02
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3390)"
                            >Malia</a
                          >
                          (<a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >) was reinforced by
                          <a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >
                          with 6 troops.
                        </div>
                      </li>
                      <li id="logentry-86521135" data-entry-id="86521135">
                        <div class="chat-message-time">
                          22 Apr, 11:27:44
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >
                          received 15 troops for turning in cards
                          <a
                            onclick="highlightTerritory(3371)"
                            class="game-card color-3"
                            >Thesprotia</a
                          >,
                          <a
                            onclick="highlightTerritory(3382)"
                            class="game-card color-3"
                            >Phocis</a
                          >, and
                          <a
                            onclick="highlightTerritory(3420)"
                            class="game-card color-3"
                            >Argolis</a
                          >.
                        </div>
                      </li>
                      <li id="logentry-86521134" data-entry-id="86521134">
                        <div class="chat-message-time">
                          22 Apr, 11:27:44
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >
                          received 2 troops on
                          <a
                            class="territory"
                            onclick="highlightTerritory(3420)"
                            >Argolis</a
                          >
                        </div>
                      </li>
                      <li id="logentry-86521112" data-entry-id="86521112">
                        <div class="chat-message-time">
                          22 Apr, 11:27:36
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >
                          received 4 troops for holding Peloponnesus.
                        </div>
                      </li>
                      <li id="logentry-86521111" data-entry-id="86521111">
                        <div class="chat-message-time">
                          22 Apr, 11:27:36
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >
                          received 1 troop for holding Crete.
                        </div>
                      </li>
                      <li id="logentry-86521110" data-entry-id="86521110">
                        <div class="chat-message-time">
                          22 Apr, 11:27:36
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >
                          received 4 troops for 14 territories.
                        </div>
                      </li>
                      <li id="logentry-86521109" data-entry-id="86521109">
                        <div class="chat-message-time">
                          22 Apr, 11:27:36
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >
                          started the turn.
                        </div>
                      </li>
                      <li id="logentry-86520393" data-entry-id="86520393">
                        <div class="chat-message-time">
                          22 Apr, 11:20:30
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >
                          ended the turn.
                        </div>
                      </li>
                      <li id="logentry-86520392" data-entry-id="86520392">
                        <div class="chat-message-time">
                          22 Apr, 11:20:30
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3405)"
                            >Mysia</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) was fortified from
                          <a
                            class="territory"
                            onclick="highlightTerritory(3408)"
                            >Caria</a
                          >
                          (<a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >) with 3 troops.
                        </div>
                      </li>
                      <li id="logentry-86520375" data-entry-id="86520375">
                        <div class="chat-message-time">
                          22 Apr, 11:20:20
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3379)"
                            >Aetolia</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) was reinforced by
                          <a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >
                          with 5 troops.
                        </div>
                      </li>
                      <li id="logentry-86519584" data-entry-id="86519584">
                        <div class="chat-message-time">
                          22 Apr, 11:11:47
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >
                          received 2 troops for holding Dodecannese.
                        </div>
                      </li>
                      <li id="logentry-86519583" data-entry-id="86519583">
                        <div class="chat-message-time">
                          22 Apr, 11:11:47
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >
                          received 3 troops for 4 territories.
                        </div>
                      </li>
                      <li id="logentry-86519582" data-entry-id="86519582">
                        <div class="chat-message-time">
                          22 Apr, 11:11:47
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >
                          started the turn.
                        </div>
                      </li>
                      <li id="logentry-86517243" data-entry-id="86517243">
                        <div class="chat-message-time">
                          22 Apr, 10:43:04
                        </div>
                        <div class="chat-message-body">
                          Round 6 started.
                        </div>
                      </li>
                      <li id="logentry-86517242" data-entry-id="86517242">
                        <div class="chat-message-time">
                          22 Apr, 10:43:04
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >
                          ended the turn.
                        </div>
                      </li>
                      <li id="logentry-86517241" data-entry-id="86517241">
                        <div class="chat-message-time">
                          22 Apr, 10:43:04
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >
                          received a card.
                        </div>
                      </li>
                      <li id="logentry-86517240" data-entry-id="86517240">
                        <div class="chat-message-time">
                          22 Apr, 10:43:04
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3412)"
                            >Dicte</a
                          >
                          (<a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >) was fortified from
                          <a
                            class="territory"
                            onclick="highlightTerritory(3370)"
                            >Ionannina</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) with 7 troops.
                        </div>
                      </li>
                      <li id="logentry-86517082" data-entry-id="86517082">
                        <div class="chat-message-time">
                          22 Apr, 10:41:35
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3377)"
                            >Dolopia</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3379)"
                            >Aetolia</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) killing 0, losing 2.
                        </div>
                      </li>
                      <li id="logentry-86516255" data-entry-id="86516255">
                        <div class="chat-message-time">
                          22 Apr, 10:34:36
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3399)"
                            >Samothrace</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3400)"
                            >Lemnos</a
                          >
                          with 1 troop.
                        </div>
                      </li>
                      <li id="logentry-86516245" data-entry-id="86516245">
                        <div class="chat-message-time">
                          22 Apr, 10:34:32
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3399)"
                            >Samothrace</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3400)"
                            >Lemnos</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) conquering it, killing 1, losing 0.
                        </div>
                      </li>
                      <li id="logentry-86516238" data-entry-id="86516238">
                        <div class="chat-message-time">
                          22 Apr, 10:34:29
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3399)"
                            >Samothrace</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3401)"
                            >Troy</a
                          >
                          with 1 troop.
                        </div>
                      </li>
                      <li id="logentry-86516182" data-entry-id="86516182">
                        <div class="chat-message-time">
                          22 Apr, 10:34:14
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3399)"
                            >Samothrace</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3401)"
                            >Troy</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) conquering it, killing 3, losing 3.
                        </div>
                      </li>
                      <li id="logentry-86516161" data-entry-id="86516161">
                        <div class="chat-message-time">
                          22 Apr, 10:34:00
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3398)"
                            >Thasos</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3399)"
                            >Samothrace</a
                          >
                          with 9 troops.
                        </div>
                      </li>
                      <li id="logentry-86516157" data-entry-id="86516157">
                        <div class="chat-message-time">
                          22 Apr, 10:33:58
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3398)"
                            >Thasos</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3399)"
                            >Samothrace</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) conquering it, killing 1, losing 0.
                        </div>
                      </li>
                      <li id="logentry-86516147" data-entry-id="86516147">
                        <div class="chat-message-time">
                          22 Apr, 10:33:54
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3397)"
                            >Chalcidice</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3398)"
                            >Thasos</a
                          >
                          with 10 troops.
                        </div>
                      </li>
                      <li id="logentry-86516141" data-entry-id="86516141">
                        <div class="chat-message-time">
                          22 Apr, 10:33:52
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3397)"
                            >Chalcidice</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3398)"
                            >Thasos</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) conquering it, killing 1, losing 0.
                        </div>
                      </li>
                      <li id="logentry-86516130" data-entry-id="86516130">
                        <div class="chat-message-time">
                          22 Apr, 10:33:47
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3396)"
                            >Thessalonica</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3397)"
                            >Chalcidice</a
                          >
                          with 11 troops.
                        </div>
                      </li>
                      <li id="logentry-86516122" data-entry-id="86516122">
                        <div class="chat-message-time">
                          22 Apr, 10:33:45
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3396)"
                            >Thessalonica</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3397)"
                            >Chalcidice</a
                          >
                          (<a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >) conquering it, killing 1, losing 0.
                        </div>
                      </li>
                      <li id="logentry-86516111" data-entry-id="86516111">
                        <div class="chat-message-time">
                          22 Apr, 10:33:41
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3394)"
                            >Macedon</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3396)"
                            >Thessalonica</a
                          >
                          with 12 troops.
                        </div>
                      </li>
                      <li id="logentry-86516104" data-entry-id="86516104">
                        <div class="chat-message-time">
                          22 Apr, 10:33:37
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3394)"
                            >Macedon</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3396)"
                            >Thessalonica</a
                          >
                          (<a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >) conquering it, killing 1, losing 0.
                        </div>
                      </li>
                      <li id="logentry-86516090" data-entry-id="86516090">
                        <div class="chat-message-time">
                          22 Apr, 10:33:32
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3395)"
                            >Piera</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3394)"
                            >Macedon</a
                          >
                          with 13 troops.
                        </div>
                      </li>
                      <li id="logentry-86516079" data-entry-id="86516079">
                        <div class="chat-message-time">
                          22 Apr, 10:33:30
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3395)"
                            >Piera</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3394)"
                            >Macedon</a
                          >
                          (<a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >) conquering it, killing 1, losing 0.
                        </div>
                      </li>
                      <li id="logentry-86516066" data-entry-id="86516066">
                        <div class="chat-message-time">
                          22 Apr, 10:33:23
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3389)"
                            >Thessaly</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3395)"
                            >Piera</a
                          >
                          with 14 troops.
                        </div>
                      </li>
                      <li id="logentry-86516041" data-entry-id="86516041">
                        <div class="chat-message-time">
                          22 Apr, 10:33:16
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3389)"
                            >Thessaly</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3395)"
                            >Piera</a
                          >
                          (<a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >) conquering it, killing 1, losing 0.
                        </div>
                      </li>
                      <li id="logentry-86516026" data-entry-id="86516026">
                        <div class="chat-message-time">
                          22 Apr, 10:33:10
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3389)"
                            >Thessaly</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3391)"
                            >Phthia</a
                          >
                          with 1 troop.
                        </div>
                      </li>
                      <li id="logentry-86516009" data-entry-id="86516009">
                        <div class="chat-message-time">
                          22 Apr, 10:33:04
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3389)"
                            >Thessaly</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3391)"
                            >Phthia</a
                          >
                          (<a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >) conquering it, killing 1, losing 0.
                        </div>
                      </li>
                      <li id="logentry-86515998" data-entry-id="86515998">
                        <div class="chat-message-time">
                          22 Apr, 10:32:59
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3388)"
                            >Magnesia</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3389)"
                            >Thessaly</a
                          >
                          with 16 troops.
                        </div>
                      </li>
                      <li id="logentry-86515965" data-entry-id="86515965">
                        <div class="chat-message-time">
                          22 Apr, 10:32:52
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3388)"
                            >Magnesia</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3389)"
                            >Thessaly</a
                          >
                          (<a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >) conquering it, killing 6, losing 3.
                        </div>
                      </li>
                      <li id="logentry-86515933" data-entry-id="86515933">
                        <div class="chat-message-time">
                          22 Apr, 10:32:37
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3387)"
                            >Sporades</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3388)"
                            >Magnesia</a
                          >
                          with 20 troops.
                        </div>
                      </li>
                      <li id="logentry-86515916" data-entry-id="86515916">
                        <div class="chat-message-time">
                          22 Apr, 10:32:33
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3387)"
                            >Sporades</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3388)"
                            >Magnesia</a
                          >
                          (<a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >) conquering it, killing 1, losing 1.
                        </div>
                      </li>
                      <li id="logentry-86515904" data-entry-id="86515904">
                        <div class="chat-message-time">
                          22 Apr, 10:32:26
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3387)"
                            >Sporades</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) was reinforced by
                          <a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >
                          with 18 troops.
                        </div>
                      </li>
                      <li id="logentry-86413427" data-entry-id="86413427">
                        <div class="chat-message-time">
                          21 Apr, 21:13:26
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >
                          received 12 troops for turning in cards
                          <a
                            onclick="highlightTerritory(3387)"
                            class="game-card color-1"
                            >Sporades</a
                          >,
                          <a
                            onclick="highlightTerritory(3410)"
                            class="game-card color-2"
                            >Rhodes</a
                          >, and
                          <a
                            onclick="highlightTerritory(3421)"
                            class="game-card color-3"
                            >Arcadia</a
                          >.
                        </div>
                      </li>
                      <li id="logentry-86413426" data-entry-id="86413426">
                        <div class="chat-message-time">
                          21 Apr, 21:13:26
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >
                          received 2 troops on
                          <a
                            class="territory"
                            onclick="highlightTerritory(3387)"
                            >Sporades</a
                          >
                        </div>
                      </li>
                      <li id="logentry-86413386" data-entry-id="86413386">
                        <div class="chat-message-time">
                          21 Apr, 21:13:14
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >
                          received 3 troops for holding Epirus.
                        </div>
                      </li>
                      <li id="logentry-86413385" data-entry-id="86413385">
                        <div class="chat-message-time">
                          21 Apr, 21:13:14
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >
                          received 3 troops for 10 territories.
                        </div>
                      </li>
                      <li id="logentry-86413384" data-entry-id="86413384">
                        <div class="chat-message-time">
                          21 Apr, 21:13:14
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >
                          started the turn.
                        </div>
                      </li>
                      <li id="logentry-86413328" data-entry-id="86413328">
                        <div class="chat-message-time">
                          21 Apr, 21:12:59
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >
                          ended the turn.
                        </div>
                      </li>
                      <li id="logentry-86413327" data-entry-id="86413327">
                        <div class="chat-message-time">
                          21 Apr, 21:12:59
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >
                          received a card.
                        </div>
                      </li>
                      <li id="logentry-86413326" data-entry-id="86413326">
                        <div class="chat-message-time">
                          21 Apr, 21:12:59
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3389)"
                            >Thessaly</a
                          >
                          (<a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >) was fortified from
                          <a
                            class="territory"
                            onclick="highlightTerritory(3399)"
                            >Samothrace</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) with 5 troops.
                        </div>
                      </li>
                      <li id="logentry-86412732" data-entry-id="86412732">
                        <div class="chat-message-time">
                          21 Apr, 21:10:45
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3399)"
                            >Samothrace</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3400)"
                            >Lemnos</a
                          >
                          with 1 troop.
                        </div>
                      </li>
                      <li id="logentry-86412471" data-entry-id="86412471">
                        <div class="chat-message-time">
                          21 Apr, 21:09:46
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3399)"
                            >Samothrace</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3400)"
                            >Lemnos</a
                          >
                          (<a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >) conquering it, killing 1, losing 0.
                        </div>
                      </li>
                      <li id="logentry-86412445" data-entry-id="86412445">
                        <div class="chat-message-time">
                          21 Apr, 21:09:40
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3406)"
                            >Ionia</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3405)"
                            >Mysia</a
                          >
                          with 3 troops.
                        </div>
                      </li>
                      <li id="logentry-86412350" data-entry-id="86412350">
                        <div class="chat-message-time">
                          21 Apr, 21:09:16
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3406)"
                            >Ionia</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3405)"
                            >Mysia</a
                          >
                          (<a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >) conquering it, killing 1, losing 1.
                        </div>
                      </li>
                      <li id="logentry-86412332" data-entry-id="86412332">
                        <div class="chat-message-time">
                          21 Apr, 21:09:10
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3407)"
                            >Samos</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3406)"
                            >Ionia</a
                          >
                          with 5 troops.
                        </div>
                      </li>
                      <li id="logentry-86412316" data-entry-id="86412316">
                        <div class="chat-message-time">
                          21 Apr, 21:09:08
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3407)"
                            >Samos</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3406)"
                            >Ionia</a
                          >
                          (<a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >) conquering it, killing 2, losing 2.
                        </div>
                      </li>
                      <li id="logentry-86412286" data-entry-id="86412286">
                        <div class="chat-message-time">
                          21 Apr, 21:09:00
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3404)"
                            >Icaria</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3407)"
                            >Samos</a
                          >
                          with 8 troops.
                        </div>
                      </li>
                      <li id="logentry-86412274" data-entry-id="86412274">
                        <div class="chat-message-time">
                          21 Apr, 21:08:57
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3404)"
                            >Icaria</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3407)"
                            >Samos</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) conquering it, killing 3, losing 1.
                        </div>
                      </li>
                      <li id="logentry-86412246" data-entry-id="86412246">
                        <div class="chat-message-time">
                          21 Apr, 21:08:50
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3404)"
                            >Icaria</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) was reinforced by
                          <a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >
                          with 9 troops.
                        </div>
                      </li>
                      <li id="logentry-86412229" data-entry-id="86412229">
                        <div class="chat-message-time">
                          21 Apr, 21:08:46
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3416)"
                            >West Cyclades</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) was reinforced by
                          <a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >
                          with 1 troop.
                        </div>
                      </li>
                      <li id="logentry-86409625" data-entry-id="86409625">
                        <div class="chat-message-time">
                          21 Apr, 20:57:41
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >
                          received 10 troops for turning in cards
                          <a
                            onclick="highlightTerritory(3415)"
                            class="game-card color-2"
                            >North Cyclades</a
                          >,
                          <a
                            onclick="highlightTerritory(3389)"
                            class="game-card color-2"
                            >Thessaly</a
                          >, and
                          <a
                            onclick="highlightTerritory(3419)"
                            class="game-card color-2"
                            >Achaia</a
                          >.
                        </div>
                      </li>
                      <li id="logentry-86409624" data-entry-id="86409624">
                        <div class="chat-message-time">
                          21 Apr, 20:57:41
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >
                          received 2 troops on
                          <a
                            class="territory"
                            onclick="highlightTerritory(3415)"
                            >North Cyclades</a
                          >
                        </div>
                      </li>
                      <li id="logentry-86409373" data-entry-id="86409373">
                        <div class="chat-message-time">
                          21 Apr, 20:56:40
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3399)"
                            >Samothrace</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3398)"
                            >Thasos</a
                          >
                          with 1 troop.
                        </div>
                      </li>
                      <li id="logentry-86409294" data-entry-id="86409294">
                        <div class="chat-message-time">
                          21 Apr, 20:56:25
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60940"
                            class="player player-2"
                            style=""
                            >Excalibur_83</a
                          >
                          was defeated by
                          <a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >.
                        </div>
                      </li>
                      <li id="logentry-86409293" data-entry-id="86409293">
                        <div class="chat-message-time">
                          21 Apr, 20:56:25
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3399)"
                            >Samothrace</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3398)"
                            >Thasos</a
                          >
                          (<a
                            href="https://dominating12.com/user/60940"
                            class="player player-2"
                            style=""
                            >Excalibur_83</a
                          >) conquering it, killing 1, losing 0.
                        </div>
                      </li>
                      <li id="logentry-86409282" data-entry-id="86409282">
                        <div class="chat-message-time">
                          21 Apr, 20:56:20
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3401)"
                            >Troy</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3399)"
                            >Samothrace</a
                          >
                          with 8 troops.
                        </div>
                      </li>
                      <li id="logentry-86408949" data-entry-id="86408949">
                        <div class="chat-message-time">
                          21 Apr, 20:55:08
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3401)"
                            >Troy</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3399)"
                            >Samothrace</a
                          >
                          (<a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >) conquering it, killing 1, losing 0.
                        </div>
                      </li>
                      <li id="logentry-86407546" data-entry-id="86407546">
                        <div class="chat-message-time">
                          21 Apr, 20:48:57
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3402)"
                            >Lesvos</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3401)"
                            >Troy</a
                          >
                          with 11 troops.
                        </div>
                      </li>
                      <li id="logentry-86407477" data-entry-id="86407477">
                        <div class="chat-message-time">
                          21 Apr, 20:48:45
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3402)"
                            >Lesvos</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3401)"
                            >Troy</a
                          >
                          (<a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >) conquering it, killing 2, losing 0.
                        </div>
                      </li>
                      <li id="logentry-86407440" data-entry-id="86407440">
                        <div class="chat-message-time">
                          21 Apr, 20:48:40
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3403)"
                            >Chios</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3402)"
                            >Lesvos</a
                          >
                          with 12 troops.
                        </div>
                      </li>
                      <li id="logentry-86407429" data-entry-id="86407429">
                        <div class="chat-message-time">
                          21 Apr, 20:48:38
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3403)"
                            >Chios</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3402)"
                            >Lesvos</a
                          >
                          (<a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >) conquering it, killing 1, losing 0.
                        </div>
                      </li>
                      <li id="logentry-86407406" data-entry-id="86407406">
                        <div class="chat-message-time">
                          21 Apr, 20:48:33
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3404)"
                            >Icaria</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3403)"
                            >Chios</a
                          >
                          with 13 troops.
                        </div>
                      </li>
                      <li id="logentry-86407319" data-entry-id="86407319">
                        <div class="chat-message-time">
                          21 Apr, 20:48:16
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3404)"
                            >Icaria</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3403)"
                            >Chios</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) conquering it, killing 3, losing 0.
                        </div>
                      </li>
                      <li id="logentry-86407295" data-entry-id="86407295">
                        <div class="chat-message-time">
                          21 Apr, 20:48:10
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3415)"
                            >North Cyclades</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3404)"
                            >Icaria</a
                          >
                          with 14 troops.
                        </div>
                      </li>
                      <li id="logentry-86407252" data-entry-id="86407252">
                        <div class="chat-message-time">
                          21 Apr, 20:48:04
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3415)"
                            >North Cyclades</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3404)"
                            >Icaria</a
                          >
                          (<a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >) conquering it, killing 1, losing 1.
                        </div>
                      </li>
                      <li id="logentry-86407166" data-entry-id="86407166">
                        <div class="chat-message-time">
                          21 Apr, 20:47:43
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3417)"
                            >East Cyclades</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3415)"
                            >North Cyclades</a
                          >
                          with 16 troops.
                        </div>
                      </li>
                      <li id="logentry-86407071" data-entry-id="86407071">
                        <div class="chat-message-time">
                          21 Apr, 20:47:25
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3417)"
                            >East Cyclades</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3415)"
                            >North Cyclades</a
                          >
                          (<a
                            href="https://dominating12.com/user/60940"
                            class="player player-2"
                            style=""
                            >Excalibur_83</a
                          >) conquering it, killing 4, losing 1.
                        </div>
                      </li>
                      <li id="logentry-86407048" data-entry-id="86407048">
                        <div class="chat-message-time">
                          21 Apr, 20:47:17
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3417)"
                            >East Cyclades</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) was reinforced by
                          <a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >
                          with 11 troops.
                        </div>
                      </li>
                      <li id="logentry-86407014" data-entry-id="86407014">
                        <div class="chat-message-time">
                          21 Apr, 20:47:08
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >
                          received 8 troops for turning in cards
                          <a
                            onclick="highlightTerritory(3375)"
                            class="game-card color-1"
                            >Cephalonica</a
                          >,
                          <a
                            onclick="highlightTerritory(3413)"
                            class="game-card color-3"
                            >Knossos</a
                          >, and
                          <a
                            onclick="highlightTerritory(3417)"
                            class="game-card color-2"
                            >East Cyclades</a
                          >.
                        </div>
                      </li>
                      <li id="logentry-86407012" data-entry-id="86407012">
                        <div class="chat-message-time">
                          21 Apr, 20:47:08
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >
                          received 2 troops on
                          <a
                            class="territory"
                            onclick="highlightTerritory(3417)"
                            >East Cyclades</a
                          >
                        </div>
                      </li>
                      <li id="logentry-86406947" data-entry-id="86406947">
                        <div class="chat-message-time">
                          21 Apr, 20:46:56
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >
                          received 3 troops for 3 territories.
                        </div>
                      </li>
                      <li id="logentry-86406946" data-entry-id="86406946">
                        <div class="chat-message-time">
                          21 Apr, 20:46:56
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >
                          started the turn.
                        </div>
                      </li>
                      <li id="logentry-86387471" data-entry-id="86387471">
                        <div class="chat-message-time">
                          21 Apr, 19:20:17
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >
                          ended the turn.
                        </div>
                      </li>
                      <li id="logentry-86387470" data-entry-id="86387470">
                        <div class="chat-message-time">
                          21 Apr, 19:20:17
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >
                          received a card.
                        </div>
                      </li>
                      <li id="logentry-86387468" data-entry-id="86387468">
                        <div class="chat-message-time">
                          21 Apr, 19:20:17
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3385)"
                            >Euboea</a
                          >
                          (<a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >) was fortified from
                          <a
                            class="territory"
                            onclick="highlightTerritory(3382)"
                            >Phocis</a
                          >
                          (<a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >) with 3 troops.
                        </div>
                      </li>
                      <li id="logentry-86387375" data-entry-id="86387375">
                        <div class="chat-message-time">
                          21 Apr, 19:19:48
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3382)"
                            >Phocis</a
                          >
                          (<a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3380)"
                            >Locris</a
                          >
                          with 1 troop.
                        </div>
                      </li>
                      <li id="logentry-86387322" data-entry-id="86387322">
                        <div class="chat-message-time">
                          21 Apr, 19:19:35
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3382)"
                            >Phocis</a
                          >
                          (<a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3380)"
                            >Locris</a
                          >
                          (<a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >) conquering it, killing 1, losing 2.
                        </div>
                      </li>
                      <li id="logentry-86387307" data-entry-id="86387307">
                        <div class="chat-message-time">
                          21 Apr, 19:19:25
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3381)"
                            >Doris</a
                          >
                          (<a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3382)"
                            >Phocis</a
                          >
                          with 7 troops.
                        </div>
                      </li>
                      <li id="logentry-86387223" data-entry-id="86387223">
                        <div class="chat-message-time">
                          21 Apr, 19:19:00
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3381)"
                            >Doris</a
                          >
                          (<a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3382)"
                            >Phocis</a
                          >
                          (<a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >) conquering it, killing 2, losing 0.
                        </div>
                      </li>
                      <li id="logentry-86387209" data-entry-id="86387209">
                        <div class="chat-message-time">
                          21 Apr, 19:18:55
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3392)"
                            >Olympus</a
                          >
                          (<a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3393)"
                            >Pelagonia</a
                          >
                          with 5 troops.
                        </div>
                      </li>
                      <li id="logentry-86387201" data-entry-id="86387201">
                        <div class="chat-message-time">
                          21 Apr, 19:18:52
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3392)"
                            >Olympus</a
                          >
                          (<a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3393)"
                            >Pelagonia</a
                          >
                          (<a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >) conquering it, killing 1, losing 0.
                        </div>
                      </li>
                      <li id="logentry-86387170" data-entry-id="86387170">
                        <div class="chat-message-time">
                          21 Apr, 19:18:45
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3381)"
                            >Doris</a
                          >
                          (<a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >) was reinforced by
                          <a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >
                          with 3 troops.
                        </div>
                      </li>
                      <li id="logentry-86387111" data-entry-id="86387111">
                        <div class="chat-message-time">
                          21 Apr, 19:18:28
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >
                          received 3 troops for 9 territories.
                        </div>
                      </li>
                      <li id="logentry-86387110" data-entry-id="86387110">
                        <div class="chat-message-time">
                          21 Apr, 19:18:28
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >
                          started the turn.
                        </div>
                      </li>
                      <li id="logentry-86386807" data-entry-id="86386807">
                        <div class="chat-message-time">
                          21 Apr, 19:17:03
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >
                          ended the turn.
                        </div>
                      </li>
                      <li id="logentry-86386806" data-entry-id="86386806">
                        <div class="chat-message-time">
                          21 Apr, 19:17:03
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >
                          received a card.
                        </div>
                      </li>
                      <li id="logentry-86386804" data-entry-id="86386804">
                        <div class="chat-message-time">
                          21 Apr, 19:17:03
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3384)"
                            >Athens</a
                          >
                          (<a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >) was fortified from
                          <a
                            class="territory"
                            onclick="highlightTerritory(3423)"
                            >Sparta</a
                          >
                          (<a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >) with 2 troops.
                        </div>
                      </li>
                      <li id="logentry-86384276" data-entry-id="86384276">
                        <div class="chat-message-time">
                          21 Apr, 19:06:53
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3384)"
                            >Athens</a
                          >
                          (<a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3416)"
                            >West Cyclades</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) killing 2, losing 2.
                        </div>
                      </li>
                      <li id="logentry-86384170" data-entry-id="86384170">
                        <div class="chat-message-time">
                          21 Apr, 19:05:21
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3425)"
                            >Corinthia</a
                          >
                          (<a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3384)"
                            >Athens</a
                          >
                          with 6 troops.
                        </div>
                      </li>
                      <li id="logentry-86384159" data-entry-id="86384159">
                        <div class="chat-message-time">
                          21 Apr, 19:05:17
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3425)"
                            >Corinthia</a
                          >
                          (<a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3384)"
                            >Athens</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) conquering it, killing 1, losing 0.
                        </div>
                      </li>
                      <li id="logentry-86384109" data-entry-id="86384109">
                        <div class="chat-message-time">
                          21 Apr, 19:05:05
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3413)"
                            >Knossos</a
                          >
                          (<a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3412)"
                            >Dicte</a
                          >
                          with 3 troops.
                        </div>
                      </li>
                      <li id="logentry-86384101" data-entry-id="86384101">
                        <div class="chat-message-time">
                          21 Apr, 19:05:03
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3413)"
                            >Knossos</a
                          >
                          (<a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3412)"
                            >Dicte</a
                          >
                          (<a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >) conquering it, killing 1, losing 0.
                        </div>
                      </li>
                      <li id="logentry-86384067" data-entry-id="86384067">
                        <div class="chat-message-time">
                          21 Apr, 19:04:54
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3423)"
                            >Sparta</a
                          >
                          (<a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3414)"
                            >Chania</a
                          >
                          with 1 troop.
                        </div>
                      </li>
                      <li id="logentry-86384023" data-entry-id="86384023">
                        <div class="chat-message-time">
                          21 Apr, 19:04:45
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3423)"
                            >Sparta</a
                          >
                          (<a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3414)"
                            >Chania</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) conquering it, killing 2, losing 1.
                        </div>
                      </li>
                      <li id="logentry-86383969" data-entry-id="86383969">
                        <div class="chat-message-time">
                          21 Apr, 19:04:22
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3423)"
                            >Sparta</a
                          >
                          (<a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >) was reinforced by
                          <a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >
                          with 6 troops.
                        </div>
                      </li>
                      <li id="logentry-86383931" data-entry-id="86383931">
                        <div class="chat-message-time">
                          21 Apr, 19:04:10
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3413)"
                            >Knossos</a
                          >
                          (<a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >) was reinforced by
                          <a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >
                          with 1 troop.
                        </div>
                      </li>
                      <li id="logentry-86383611" data-entry-id="86383611">
                        <div class="chat-message-time">
                          21 Apr, 19:02:26
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >
                          received 4 troops for holding Peloponnesus.
                        </div>
                      </li>
                      <li id="logentry-86383610" data-entry-id="86383610">
                        <div class="chat-message-time">
                          21 Apr, 19:02:26
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >
                          received 3 troops for 11 territories.
                        </div>
                      </li>
                      <li id="logentry-86383609" data-entry-id="86383609">
                        <div class="chat-message-time">
                          21 Apr, 19:02:26
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >
                          started the turn.
                        </div>
                      </li>
                      <li id="logentry-86340367" data-entry-id="86340367">
                        <div class="chat-message-time">
                          21 Apr, 14:55:09
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >
                          ended the turn.
                        </div>
                      </li>
                      <li id="logentry-86340366" data-entry-id="86340366">
                        <div class="chat-message-time">
                          21 Apr, 14:55:09
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >
                          received a card.
                        </div>
                      </li>
                      <li id="logentry-86340363" data-entry-id="86340363">
                        <div class="chat-message-time">
                          21 Apr, 14:55:09
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3411)"
                            >Karpathos</a
                          >
                          (<a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >) was fortified from
                          <a
                            class="territory"
                            onclick="highlightTerritory(3408)"
                            >Caria</a
                          >
                          (<a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >) with 1 troop.
                        </div>
                      </li>
                      <li id="logentry-86340263" data-entry-id="86340263">
                        <div class="chat-message-time">
                          21 Apr, 14:54:47
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3404)"
                            >Icaria</a
                          >
                          (<a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3415)"
                            >North Cyclades</a
                          >
                          (<a
                            href="https://dominating12.com/user/60940"
                            class="player player-2"
                            style=""
                            >Excalibur_83</a
                          >) killing 1, losing 2.
                        </div>
                      </li>
                      <li id="logentry-86340136" data-entry-id="86340136">
                        <div class="chat-message-time">
                          21 Apr, 14:54:12
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3396)"
                            >Thessalonica</a
                          >
                          (<a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3397)"
                            >Chalcidice</a
                          >
                          (<a
                            href="https://dominating12.com/user/60940"
                            class="player player-2"
                            style=""
                            >Excalibur_83</a
                          >) conquering it, killing 1, losing 1.
                        </div>
                      </li>
                      <li id="logentry-86340125" data-entry-id="86340125">
                        <div class="chat-message-time">
                          21 Apr, 14:54:06
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3394)"
                            >Macedon</a
                          >
                          (<a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3396)"
                            >Thessalonica</a
                          >
                          with 3 troops.
                        </div>
                      </li>
                      <li id="logentry-86340112" data-entry-id="86340112">
                        <div class="chat-message-time">
                          21 Apr, 14:54:05
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3394)"
                            >Macedon</a
                          >
                          (<a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3396)"
                            >Thessalonica</a
                          >
                          (<a
                            href="https://dominating12.com/user/60940"
                            class="player player-2"
                            style=""
                            >Excalibur_83</a
                          >) conquering it, killing 1, losing 1.
                        </div>
                      </li>
                      <li id="logentry-86340099" data-entry-id="86340099">
                        <div class="chat-message-time">
                          21 Apr, 14:54:00
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3394)"
                            >Macedon</a
                          >
                          (<a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3393)"
                            >Pelagonia</a
                          >
                          with 1 troop.
                        </div>
                      </li>
                      <li id="logentry-86340073" data-entry-id="86340073">
                        <div class="chat-message-time">
                          21 Apr, 14:53:57
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3394)"
                            >Macedon</a
                          >
                          (<a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3393)"
                            >Pelagonia</a
                          >
                          (<a
                            href="https://dominating12.com/user/60940"
                            class="player player-2"
                            style=""
                            >Excalibur_83</a
                          >) conquering it, killing 2, losing 1.
                        </div>
                      </li>
                      <li id="logentry-86340056" data-entry-id="86340056">
                        <div class="chat-message-time">
                          21 Apr, 14:53:52
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3395)"
                            >Piera</a
                          >
                          (<a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3394)"
                            >Macedon</a
                          >
                          with 7 troops.
                        </div>
                      </li>
                      <li id="logentry-86340053" data-entry-id="86340053">
                        <div class="chat-message-time">
                          21 Apr, 14:53:51
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3395)"
                            >Piera</a
                          >
                          (<a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3394)"
                            >Macedon</a
                          >
                          (<a
                            href="https://dominating12.com/user/60940"
                            class="player player-2"
                            style=""
                            >Excalibur_83</a
                          >) conquering it, killing 1, losing 0.
                        </div>
                      </li>
                      <li id="logentry-86340048" data-entry-id="86340048">
                        <div class="chat-message-time">
                          21 Apr, 14:53:48
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3389)"
                            >Thessaly</a
                          >
                          (<a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3395)"
                            >Piera</a
                          >
                          with 8 troops.
                        </div>
                      </li>
                      <li id="logentry-86340040" data-entry-id="86340040">
                        <div class="chat-message-time">
                          21 Apr, 14:53:47
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3389)"
                            >Thessaly</a
                          >
                          (<a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3395)"
                            >Piera</a
                          >
                          (<a
                            href="https://dominating12.com/user/60940"
                            class="player player-2"
                            style=""
                            >Excalibur_83</a
                          >) conquering it, killing 5, losing 6.
                        </div>
                      </li>
                      <li id="logentry-86340026" data-entry-id="86340026">
                        <div class="chat-message-time">
                          21 Apr, 14:53:36
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3389)"
                            >Thessaly</a
                          >
                          (<a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3391)"
                            >Phthia</a
                          >
                          with 1 troop.
                        </div>
                      </li>
                      <li id="logentry-86340011" data-entry-id="86340011">
                        <div class="chat-message-time">
                          21 Apr, 14:53:33
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3389)"
                            >Thessaly</a
                          >
                          (<a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3391)"
                            >Phthia</a
                          >
                          (<a
                            href="https://dominating12.com/user/60940"
                            class="player player-2"
                            style=""
                            >Excalibur_83</a
                          >) conquering it, killing 2, losing 0.
                        </div>
                      </li>
                      <li id="logentry-86340002" data-entry-id="86340002">
                        <div class="chat-message-time">
                          21 Apr, 14:53:30
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3382)"
                            >Phocis</a
                          >
                          (<a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3380)"
                            >Locris</a
                          >
                          with 1 troop.
                        </div>
                      </li>
                      <li id="logentry-86339990" data-entry-id="86339990">
                        <div class="chat-message-time">
                          21 Apr, 14:53:26
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3382)"
                            >Phocis</a
                          >
                          (<a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3380)"
                            >Locris</a
                          >
                          (<a
                            href="https://dominating12.com/user/60940"
                            class="player player-2"
                            style=""
                            >Excalibur_83</a
                          >) conquering it, killing 1, losing 0.
                        </div>
                      </li>
                      <li id="logentry-86339980" data-entry-id="86339980">
                        <div class="chat-message-time">
                          21 Apr, 14:53:23
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3389)"
                            >Thessaly</a
                          >
                          (<a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >) was reinforced by
                          <a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >
                          with 11 troops.
                        </div>
                      </li>
                      <li id="logentry-86339969" data-entry-id="86339969">
                        <div class="chat-message-time">
                          21 Apr, 14:53:20
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >
                          received 6 troops for turning in cards
                          <a
                            onclick="highlightTerritory(3386)"
                            class="game-card color-2"
                            >Scycros</a
                          >,
                          <a
                            onclick="highlightTerritory(3407)"
                            class="game-card color-1"
                            >Samos</a
                          >, and
                          <a
                            onclick="highlightTerritory(3414)"
                            class="game-card color-3"
                            >Chania</a
                          >.
                        </div>
                      </li>
                      <li id="logentry-86323423" data-entry-id="86323423">
                        <div class="chat-message-time">
                          21 Apr, 12:52:27
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >
                          received 2 troops for holding Dodecannese.
                        </div>
                      </li>
                      <li id="logentry-86323422" data-entry-id="86323422">
                        <div class="chat-message-time">
                          21 Apr, 12:52:27
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >
                          received 3 troops for 9 territories.
                        </div>
                      </li>
                      <li id="logentry-86323421" data-entry-id="86323421">
                        <div class="chat-message-time">
                          21 Apr, 12:52:27
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >
                          started the turn.
                        </div>
                      </li>
                      <li id="logentry-86322284" data-entry-id="86322284">
                        <div class="chat-message-time">
                          21 Apr, 12:40:56
                        </div>
                        <div class="chat-message-body">
                          Round 5 started.
                        </div>
                      </li>
                      <li id="logentry-86322283" data-entry-id="86322283">
                        <div class="chat-message-time">
                          21 Apr, 12:40:56
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60940"
                            class="player player-2"
                            style=""
                            >Excalibur_83</a
                          >
                          ended the turn.
                        </div>
                      </li>
                      <li id="logentry-86322282" data-entry-id="86322282">
                        <div class="chat-message-time">
                          21 Apr, 12:40:56
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60940"
                            class="player player-2"
                            style=""
                            >Excalibur_83</a
                          >
                          received a card.
                        </div>
                      </li>
                      <li id="logentry-86322278" data-entry-id="86322278">
                        <div class="chat-message-time">
                          21 Apr, 12:40:56
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3381)"
                            >Doris</a
                          >
                          (<a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >) was fortified from
                          <a
                            class="territory"
                            onclick="highlightTerritory(3380)"
                            >Locris</a
                          >
                          (<a
                            href="https://dominating12.com/user/60940"
                            class="player player-2"
                            style=""
                            >Excalibur_83</a
                          >) with 2 troops.
                        </div>
                      </li>
                      <li id="logentry-86321864" data-entry-id="86321864">
                        <div class="chat-message-time">
                          21 Apr, 12:36:45
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3395)"
                            >Piera</a
                          >
                          (<a
                            href="https://dominating12.com/user/60940"
                            class="player player-2"
                            style=""
                            >Excalibur_83</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3394)"
                            >Macedon</a
                          >
                          with 1 troop.
                        </div>
                      </li>
                      <li id="logentry-86321856" data-entry-id="86321856">
                        <div class="chat-message-time">
                          21 Apr, 12:36:41
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3395)"
                            >Piera</a
                          >
                          (<a
                            href="https://dominating12.com/user/60940"
                            class="player player-2"
                            style=""
                            >Excalibur_83</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3394)"
                            >Macedon</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) conquering it, killing 1, losing 0.
                        </div>
                      </li>
                      <li id="logentry-86321849" data-entry-id="86321849">
                        <div class="chat-message-time">
                          21 Apr, 12:36:37
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3395)"
                            >Piera</a
                          >
                          (<a
                            href="https://dominating12.com/user/60940"
                            class="player player-2"
                            style=""
                            >Excalibur_83</a
                          >) was reinforced by
                          <a
                            href="https://dominating12.com/user/60940"
                            class="player player-2"
                            style=""
                            >Excalibur_83</a
                          >
                          with 2 troops.
                        </div>
                      </li>
                      <li id="logentry-86321844" data-entry-id="86321844">
                        <div class="chat-message-time">
                          21 Apr, 12:36:34
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3393)"
                            >Pelagonia</a
                          >
                          (<a
                            href="https://dominating12.com/user/60940"
                            class="player player-2"
                            style=""
                            >Excalibur_83</a
                          >) was reinforced by
                          <a
                            href="https://dominating12.com/user/60940"
                            class="player player-2"
                            style=""
                            >Excalibur_83</a
                          >
                          with 1 troop.
                        </div>
                      </li>
                      <li id="logentry-86321834" data-entry-id="86321834">
                        <div class="chat-message-time">
                          21 Apr, 12:36:29
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60940"
                            class="player player-2"
                            style=""
                            >Excalibur_83</a
                          >
                          received 3 troops for 8 territories.
                        </div>
                      </li>
                      <li id="logentry-86321833" data-entry-id="86321833">
                        <div class="chat-message-time">
                          21 Apr, 12:36:29
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60940"
                            class="player player-2"
                            style=""
                            >Excalibur_83</a
                          >
                          started the turn.
                        </div>
                      </li>
                      <li id="logentry-86317224" data-entry-id="86317224">
                        <div class="chat-message-time">
                          21 Apr, 11:51:06
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >
                          ended the turn.
                        </div>
                      </li>
                      <li id="logentry-86317223" data-entry-id="86317223">
                        <div class="chat-message-time">
                          21 Apr, 11:51:06
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >
                          received a card.
                        </div>
                      </li>
                      <li id="logentry-86316961" data-entry-id="86316961">
                        <div class="chat-message-time">
                          21 Apr, 11:47:03
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3386)"
                            >Scycros</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3387)"
                            >Sporades</a
                          >
                          with 2 troops.
                        </div>
                      </li>
                      <li id="logentry-86316871" data-entry-id="86316871">
                        <div class="chat-message-time">
                          21 Apr, 11:45:57
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3386)"
                            >Scycros</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3387)"
                            >Sporades</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) conquering it, killing 1, losing 0.
                        </div>
                      </li>
                      <li id="logentry-86316805" data-entry-id="86316805">
                        <div class="chat-message-time">
                          21 Apr, 11:45:10
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3370)"
                            >Ionannina</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) was reinforced by
                          <a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >
                          with 4 troops.
                        </div>
                      </li>
                      <li id="logentry-86316775" data-entry-id="86316775">
                        <div class="chat-message-time">
                          21 Apr, 11:44:56
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3423)"
                            >Sparta</a
                          >
                          (<a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >) was reinforced by
                          <a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >
                          with 2 troops.
                        </div>
                      </li>
                      <li id="logentry-86316330" data-entry-id="86316330">
                        <div class="chat-message-time">
                          21 Apr, 11:38:36
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >
                          received 3 troops for holding Epirus.
                        </div>
                      </li>
                      <li id="logentry-86316329" data-entry-id="86316329">
                        <div class="chat-message-time">
                          21 Apr, 11:38:36
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >
                          received 3 troops for 11 territories.
                        </div>
                      </li>
                      <li id="logentry-86316328" data-entry-id="86316328">
                        <div class="chat-message-time">
                          21 Apr, 11:38:36
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >
                          started the turn.
                        </div>
                      </li>
                      <li id="logentry-86200928" data-entry-id="86200928">
                        <div class="chat-message-time">
                          20 Apr, 20:45:05
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >
                          ended the turn.
                        </div>
                      </li>
                      <li id="logentry-86200927" data-entry-id="86200927">
                        <div class="chat-message-time">
                          20 Apr, 20:45:05
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >
                          received a card.
                        </div>
                      </li>
                      <li id="logentry-86200926" data-entry-id="86200926">
                        <div class="chat-message-time">
                          20 Apr, 20:45:05
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3417)"
                            >East Cyclades</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) was fortified from
                          <a
                            class="territory"
                            onclick="highlightTerritory(3416)"
                            >West Cyclades</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) with 2 troops.
                        </div>
                      </li>
                      <li id="logentry-86200609" data-entry-id="86200609">
                        <div class="chat-message-time">
                          20 Apr, 20:43:56
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3384)"
                            >Athens</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3416)"
                            >West Cyclades</a
                          >
                          with 6 troops.
                        </div>
                      </li>
                      <li id="logentry-86199992" data-entry-id="86199992">
                        <div class="chat-message-time">
                          20 Apr, 20:41:05
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3384)"
                            >Athens</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3416)"
                            >West Cyclades</a
                          >
                          (<a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >) conquering it, killing 1, losing 0.
                        </div>
                      </li>
                      <li id="logentry-86199967" data-entry-id="86199967">
                        <div class="chat-message-time">
                          20 Apr, 20:40:56
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3384)"
                            >Athens</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) was reinforced by
                          <a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >
                          with 3 troops.
                        </div>
                      </li>
                      <li id="logentry-86199943" data-entry-id="86199943">
                        <div class="chat-message-time">
                          20 Apr, 20:40:52
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >
                          received 3 troops for 6 territories.
                        </div>
                      </li>
                      <li id="logentry-86199942" data-entry-id="86199942">
                        <div class="chat-message-time">
                          20 Apr, 20:40:52
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >
                          started the turn.
                        </div>
                      </li>
                      <li id="logentry-86196616" data-entry-id="86196616">
                        <div class="chat-message-time">
                          20 Apr, 20:27:20
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >
                          ended the turn.
                        </div>
                      </li>
                      <li id="logentry-86196615" data-entry-id="86196615">
                        <div class="chat-message-time">
                          20 Apr, 20:27:20
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >
                          received a card.
                        </div>
                      </li>
                      <li id="logentry-86196612" data-entry-id="86196612">
                        <div class="chat-message-time">
                          20 Apr, 20:27:19
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3415)"
                            >North Cyclades</a
                          >
                          (<a
                            href="https://dominating12.com/user/60940"
                            class="player player-2"
                            style=""
                            >Excalibur_83</a
                          >) was fortified from
                          <a
                            class="territory"
                            onclick="highlightTerritory(3416)"
                            >West Cyclades</a
                          >
                          (<a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >) with 2 troops.
                        </div>
                      </li>
                      <li id="logentry-86196139" data-entry-id="86196139">
                        <div class="chat-message-time">
                          20 Apr, 20:25:29
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3401)"
                            >Troy</a
                          >
                          (<a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3402)"
                            >Lesvos</a
                          >
                          with 1 troop.
                        </div>
                      </li>
                      <li id="logentry-86195754" data-entry-id="86195754">
                        <div class="chat-message-time">
                          20 Apr, 20:24:07
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3401)"
                            >Troy</a
                          >
                          (<a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3402)"
                            >Lesvos</a
                          >
                          (<a
                            href="https://dominating12.com/user/60940"
                            class="player player-2"
                            style=""
                            >Excalibur_83</a
                          >) conquering it, killing 1, losing 1.
                        </div>
                      </li>
                      <li id="logentry-86192398" data-entry-id="86192398">
                        <div class="chat-message-time">
                          20 Apr, 20:12:30
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3392)"
                            >Olympus</a
                          >
                          (<a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3389)"
                            >Thessaly</a
                          >
                          (<a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >) killing 0, losing 4.
                        </div>
                      </li>
                      <li id="logentry-86183458" data-entry-id="86183458">
                        <div class="chat-message-time">
                          20 Apr, 19:37:14
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3392)"
                            >Olympus</a
                          >
                          (<a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >) was reinforced by
                          <a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >
                          with 7 troops.
                        </div>
                      </li>
                      <li id="logentry-86183405" data-entry-id="86183405">
                        <div class="chat-message-time">
                          20 Apr, 19:37:01
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >
                          received 4 troops for turning in cards
                          <a
                            onclick="highlightTerritory(3392)"
                            class="game-card color-3"
                            >Olympus</a
                          >,
                          <a
                            onclick="highlightTerritory(3402)"
                            class="game-card color-3"
                            >Lesvos</a
                          >, and
                          <a
                            onclick="highlightTerritory(3424)"
                            class="game-card color-3"
                            >Cythera</a
                          >.
                        </div>
                      </li>
                      <li id="logentry-86183404" data-entry-id="86183404">
                        <div class="chat-message-time">
                          20 Apr, 19:37:01
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >
                          received 2 troops on
                          <a
                            class="territory"
                            onclick="highlightTerritory(3392)"
                            >Olympus</a
                          >
                        </div>
                      </li>
                      <li id="logentry-86173038" data-entry-id="86173038">
                        <div class="chat-message-time">
                          20 Apr, 18:46:44
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >
                          received 3 troops for 9 territories.
                        </div>
                      </li>
                      <li id="logentry-86173037" data-entry-id="86173037">
                        <div class="chat-message-time">
                          20 Apr, 18:46:44
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >
                          started the turn.
                        </div>
                      </li>
                      <li id="logentry-86097335" data-entry-id="86097335">
                        <div class="chat-message-time">
                          20 Apr, 10:00:56
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >
                          ended the turn.
                        </div>
                      </li>
                      <li id="logentry-86097334" data-entry-id="86097334">
                        <div class="chat-message-time">
                          20 Apr, 10:00:56
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >
                          received a card.
                        </div>
                      </li>
                      <li id="logentry-86097333" data-entry-id="86097333">
                        <div class="chat-message-time">
                          20 Apr, 10:00:56
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3423)"
                            >Sparta</a
                          >
                          (<a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >) was fortified from
                          <a
                            class="territory"
                            onclick="highlightTerritory(3421)"
                            >Arcadia</a
                          >
                          (<a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >) with 1 troop.
                        </div>
                      </li>
                      <li id="logentry-86097139" data-entry-id="86097139">
                        <div class="chat-message-time">
                          20 Apr, 09:58:15
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3425)"
                            >Corinthia</a
                          >
                          (<a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3419)"
                            >Achaia</a
                          >
                          with 1 troop.
                        </div>
                      </li>
                      <li id="logentry-86097136" data-entry-id="86097136">
                        <div class="chat-message-time">
                          20 Apr, 09:58:09
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3425)"
                            >Corinthia</a
                          >
                          (<a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3419)"
                            >Achaia</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) conquering it, killing 1, losing 0.
                        </div>
                      </li>
                      <li id="logentry-86097129" data-entry-id="86097129">
                        <div class="chat-message-time">
                          20 Apr, 09:58:04
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3423)"
                            >Sparta</a
                          >
                          (<a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3424)"
                            >Cythera</a
                          >
                          with 1 troop.
                        </div>
                      </li>
                      <li id="logentry-86097120" data-entry-id="86097120">
                        <div class="chat-message-time">
                          20 Apr, 09:57:59
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3423)"
                            >Sparta</a
                          >
                          (<a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3424)"
                            >Cythera</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) conquering it, killing 1, losing 0.
                        </div>
                      </li>
                      <li id="logentry-86097115" data-entry-id="86097115">
                        <div class="chat-message-time">
                          20 Apr, 09:57:52
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3425)"
                            >Corinthia</a
                          >
                          (<a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >) was reinforced by
                          <a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >
                          with 2 troops.
                        </div>
                      </li>
                      <li id="logentry-86097109" data-entry-id="86097109">
                        <div class="chat-message-time">
                          20 Apr, 09:57:48
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3423)"
                            >Sparta</a
                          >
                          (<a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >) was reinforced by
                          <a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >
                          with 1 troop.
                        </div>
                      </li>
                      <li id="logentry-86092194" data-entry-id="86092194">
                        <div class="chat-message-time">
                          20 Apr, 08:36:46
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >
                          received 3 troops for 9 territories.
                        </div>
                      </li>
                      <li id="logentry-86092193" data-entry-id="86092193">
                        <div class="chat-message-time">
                          20 Apr, 08:36:46
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >
                          started the turn.
                        </div>
                      </li>
                      <li id="logentry-86087203" data-entry-id="86087203">
                        <div class="chat-message-time">
                          20 Apr, 07:41:05
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >
                          ended the turn.
                        </div>
                      </li>
                      <li id="logentry-86087202" data-entry-id="86087202">
                        <div class="chat-message-time">
                          20 Apr, 07:41:05
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >
                          received a card.
                        </div>
                      </li>
                      <li id="logentry-86087147" data-entry-id="86087147">
                        <div class="chat-message-time">
                          20 Apr, 07:40:28
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3410)"
                            >Rhodes</a
                          >
                          (<a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3408)"
                            >Caria</a
                          >
                          with 5 troops.
                        </div>
                      </li>
                      <li id="logentry-86087139" data-entry-id="86087139">
                        <div class="chat-message-time">
                          20 Apr, 07:40:25
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3410)"
                            >Rhodes</a
                          >
                          (<a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3408)"
                            >Caria</a
                          >
                          (<a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >) conquering it, killing 1, losing 0.
                        </div>
                      </li>
                      <li id="logentry-86087136" data-entry-id="86087136">
                        <div class="chat-message-time">
                          20 Apr, 07:40:22
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3410)"
                            >Rhodes</a
                          >
                          (<a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >) was reinforced by
                          <a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >
                          with 3 troops.
                        </div>
                      </li>
                      <li id="logentry-86086321" data-entry-id="86086321">
                        <div class="chat-message-time">
                          20 Apr, 07:31:11
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >
                          received 3 troops for 8 territories.
                        </div>
                      </li>
                      <li id="logentry-86086320" data-entry-id="86086320">
                        <div class="chat-message-time">
                          20 Apr, 07:31:11
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >
                          started the turn.
                        </div>
                      </li>
                      <li id="logentry-85977432" data-entry-id="85977432">
                        <div class="chat-message-time">
                          19 Apr, 19:24:42
                        </div>
                        <div class="chat-message-body">
                          Round 4 started.
                        </div>
                      </li>
                      <li id="logentry-85977431" data-entry-id="85977431">
                        <div class="chat-message-time">
                          19 Apr, 19:24:42
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60940"
                            class="player player-2"
                            style=""
                            >Excalibur_83</a
                          >
                          ended the turn.
                        </div>
                      </li>
                      <li id="logentry-85977430" data-entry-id="85977430">
                        <div class="chat-message-time">
                          19 Apr, 19:24:42
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60940"
                            class="player player-2"
                            style=""
                            >Excalibur_83</a
                          >
                          received a card.
                        </div>
                      </li>
                      <li id="logentry-85977427" data-entry-id="85977427">
                        <div class="chat-message-time">
                          19 Apr, 19:24:42
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3395)"
                            >Piera</a
                          >
                          (<a
                            href="https://dominating12.com/user/60940"
                            class="player player-2"
                            style=""
                            >Excalibur_83</a
                          >) was fortified from
                          <a
                            class="territory"
                            onclick="highlightTerritory(3396)"
                            >Thessalonica</a
                          >
                          (<a
                            href="https://dominating12.com/user/60940"
                            class="player player-2"
                            style=""
                            >Excalibur_83</a
                          >) with 2 troops.
                        </div>
                      </li>
                      <li id="logentry-85977183" data-entry-id="85977183">
                        <div class="chat-message-time">
                          19 Apr, 19:23:45
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3397)"
                            >Chalcidice</a
                          >
                          (<a
                            href="https://dominating12.com/user/60940"
                            class="player player-2"
                            style=""
                            >Excalibur_83</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3396)"
                            >Thessalonica</a
                          >
                          with 3 troops.
                        </div>
                      </li>
                      <li id="logentry-85977127" data-entry-id="85977127">
                        <div class="chat-message-time">
                          19 Apr, 19:23:31
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3397)"
                            >Chalcidice</a
                          >
                          (<a
                            href="https://dominating12.com/user/60940"
                            class="player player-2"
                            style=""
                            >Excalibur_83</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3396)"
                            >Thessalonica</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) conquering it, killing 1, losing 1.
                        </div>
                      </li>
                      <li id="logentry-85977088" data-entry-id="85977088">
                        <div class="chat-message-time">
                          19 Apr, 19:23:18
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3398)"
                            >Thasos</a
                          >
                          (<a
                            href="https://dominating12.com/user/60940"
                            class="player player-2"
                            style=""
                            >Excalibur_83</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3397)"
                            >Chalcidice</a
                          >
                          with 5 troops.
                        </div>
                      </li>
                      <li id="logentry-85977075" data-entry-id="85977075">
                        <div class="chat-message-time">
                          19 Apr, 19:23:15
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3398)"
                            >Thasos</a
                          >
                          (<a
                            href="https://dominating12.com/user/60940"
                            class="player player-2"
                            style=""
                            >Excalibur_83</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3397)"
                            >Chalcidice</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) conquering it, killing 3, losing 0.
                        </div>
                      </li>
                      <li id="logentry-85977057" data-entry-id="85977057">
                        <div class="chat-message-time">
                          19 Apr, 19:23:07
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3398)"
                            >Thasos</a
                          >
                          (<a
                            href="https://dominating12.com/user/60940"
                            class="player player-2"
                            style=""
                            >Excalibur_83</a
                          >) was reinforced by
                          <a
                            href="https://dominating12.com/user/60940"
                            class="player player-2"
                            style=""
                            >Excalibur_83</a
                          >
                          with 3 troops.
                        </div>
                      </li>
                      <li id="logentry-85976901" data-entry-id="85976901">
                        <div class="chat-message-time">
                          19 Apr, 19:22:12
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60940"
                            class="player player-2"
                            style=""
                            >Excalibur_83</a
                          >
                          received 3 troops for 7 territories.
                        </div>
                      </li>
                      <li id="logentry-85976899" data-entry-id="85976899">
                        <div class="chat-message-time">
                          19 Apr, 19:22:12
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60940"
                            class="player player-2"
                            style=""
                            >Excalibur_83</a
                          >
                          started the turn.
                        </div>
                      </li>
                      <li id="logentry-85910210" data-entry-id="85910210">
                        <div class="chat-message-time">
                          19 Apr, 14:09:07
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >
                          ended the turn.
                        </div>
                      </li>
                      <li id="logentry-85910209" data-entry-id="85910209">
                        <div class="chat-message-time">
                          19 Apr, 14:09:07
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >
                          received a card.
                        </div>
                      </li>
                      <li id="logentry-85910208" data-entry-id="85910208">
                        <div class="chat-message-time">
                          19 Apr, 14:09:07
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3370)"
                            >Ionannina</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) was fortified from
                          <a
                            class="territory"
                            onclick="highlightTerritory(3369)"
                            >Chaonia</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) with 1 troop.
                        </div>
                      </li>
                      <li id="logentry-85910131" data-entry-id="85910131">
                        <div class="chat-message-time">
                          19 Apr, 14:08:42
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3369)"
                            >Chaonia</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3372)"
                            >Corcyra</a
                          >
                          with 1 troop.
                        </div>
                      </li>
                      <li id="logentry-85910092" data-entry-id="85910092">
                        <div class="chat-message-time">
                          19 Apr, 14:08:28
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3369)"
                            >Chaonia</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3372)"
                            >Corcyra</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) conquering it, killing 2, losing 0.
                        </div>
                      </li>
                      <li id="logentry-85910069" data-entry-id="85910069">
                        <div class="chat-message-time">
                          19 Apr, 14:08:22
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3371)"
                            >Thesprotia</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3369)"
                            >Chaonia</a
                          >
                          with 3 troops.
                        </div>
                      </li>
                      <li id="logentry-85910042" data-entry-id="85910042">
                        <div class="chat-message-time">
                          19 Apr, 14:08:18
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3371)"
                            >Thesprotia</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3369)"
                            >Chaonia</a
                          >
                          (<a
                            href="https://dominating12.com/user/60940"
                            class="player player-2"
                            style=""
                            >Excalibur_83</a
                          >) conquering it, killing 3, losing 5.
                        </div>
                      </li>
                      <li id="logentry-85910022" data-entry-id="85910022">
                        <div class="chat-message-time">
                          19 Apr, 14:08:05
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3371)"
                            >Thesprotia</a
                          >
                          (<a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >) was reinforced by
                          <a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >
                          with 3 troops.
                        </div>
                      </li>
                      <li id="logentry-85909248" data-entry-id="85909248">
                        <div class="chat-message-time">
                          19 Apr, 14:03:37
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >
                          received 3 troops for 11 territories.
                        </div>
                      </li>
                      <li id="logentry-85909247" data-entry-id="85909247">
                        <div class="chat-message-time">
                          19 Apr, 14:03:37
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60946"
                            class="player player-9"
                            style=""
                            >LeRenard</a
                          >
                          started the turn.
                        </div>
                      </li>
                      <li id="logentry-85906331" data-entry-id="85906331">
                        <div class="chat-message-time">
                          19 Apr, 13:40:59
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >
                          ended the turn.
                        </div>
                      </li>
                      <li id="logentry-85906330" data-entry-id="85906330">
                        <div class="chat-message-time">
                          19 Apr, 13:40:59
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >
                          received a card.
                        </div>
                      </li>
                      <li id="logentry-85906329" data-entry-id="85906329">
                        <div class="chat-message-time">
                          19 Apr, 13:40:59
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3397)"
                            >Chalcidice</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) was fortified from
                          <a
                            class="territory"
                            onclick="highlightTerritory(3396)"
                            >Thessalonica</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) with 1 troop.
                        </div>
                      </li>
                      <li id="logentry-85906207" data-entry-id="85906207">
                        <div class="chat-message-time">
                          19 Apr, 13:40:09
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3396)"
                            >Thessalonica</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3394)"
                            >Macedon</a
                          >
                          with 1 troop.
                        </div>
                      </li>
                      <li id="logentry-85906152" data-entry-id="85906152">
                        <div class="chat-message-time">
                          19 Apr, 13:39:45
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3396)"
                            >Thessalonica</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3394)"
                            >Macedon</a
                          >
                          (<a
                            href="https://dominating12.com/user/60940"
                            class="player player-2"
                            style=""
                            >Excalibur_83</a
                          >) conquering it, killing 1, losing 1.
                        </div>
                      </li>
                      <li id="logentry-85906139" data-entry-id="85906139">
                        <div class="chat-message-time">
                          19 Apr, 13:39:40
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3396)"
                            >Thessalonica</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) was reinforced by
                          <a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >
                          with 3 troops.
                        </div>
                      </li>
                      <li id="logentry-85901572" data-entry-id="85901572">
                        <div class="chat-message-time">
                          19 Apr, 12:58:27
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >
                          received 3 troops for 8 territories.
                        </div>
                      </li>
                      <li id="logentry-85901571" data-entry-id="85901571">
                        <div class="chat-message-time">
                          19 Apr, 12:58:27
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >
                          started the turn.
                        </div>
                      </li>
                      <li id="logentry-85899752" data-entry-id="85899752">
                        <div class="chat-message-time">
                          19 Apr, 12:39:47
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >
                          ended the turn.
                        </div>
                      </li>
                      <li id="logentry-85899751" data-entry-id="85899751">
                        <div class="chat-message-time">
                          19 Apr, 12:39:47
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >
                          received a card.
                        </div>
                      </li>
                      <li id="logentry-85899750" data-entry-id="85899750">
                        <div class="chat-message-time">
                          19 Apr, 12:39:47
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3406)"
                            >Ionia</a
                          >
                          (<a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >) was fortified from
                          <a
                            class="territory"
                            onclick="highlightTerritory(3408)"
                            >Caria</a
                          >
                          (<a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >) with 1 troop.
                        </div>
                      </li>
                      <li id="logentry-85899682" data-entry-id="85899682">
                        <div class="chat-message-time">
                          19 Apr, 12:39:08
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3406)"
                            >Ionia</a
                          >
                          (<a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3408)"
                            >Caria</a
                          >
                          with 2 troops.
                        </div>
                      </li>
                      <li id="logentry-85899630" data-entry-id="85899630">
                        <div class="chat-message-time">
                          19 Apr, 12:39:03
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3406)"
                            >Ionia</a
                          >
                          (<a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3408)"
                            >Caria</a
                          >
                          (<a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >) conquering it, killing 7, losing 7.
                        </div>
                      </li>
                      <li id="logentry-85899618" data-entry-id="85899618">
                        <div class="chat-message-time">
                          19 Apr, 12:38:37
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3406)"
                            >Ionia</a
                          >
                          (<a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >) was reinforced by
                          <a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >
                          with 3 troops.
                        </div>
                      </li>
                      <li id="logentry-85894720" data-entry-id="85894720">
                        <div class="chat-message-time">
                          19 Apr, 11:45:58
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >
                          received 3 troops for 9 territories.
                        </div>
                      </li>
                      <li id="logentry-85894719" data-entry-id="85894719">
                        <div class="chat-message-time">
                          19 Apr, 11:45:58
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60938"
                            class="player player-6"
                            style=""
                            >Gusreynolds</a
                          >
                          started the turn.
                        </div>
                      </li>
                      <li id="logentry-85891726" data-entry-id="85891726">
                        <div class="chat-message-time">
                          19 Apr, 11:09:57
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >
                          ended the turn.
                        </div>
                      </li>
                      <li id="logentry-85891725" data-entry-id="85891725">
                        <div class="chat-message-time">
                          19 Apr, 11:09:57
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >
                          received a card.
                        </div>
                      </li>
                      <li id="logentry-85891723" data-entry-id="85891723">
                        <div class="chat-message-time">
                          19 Apr, 11:09:57
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3425)"
                            >Corinthia</a
                          >
                          (<a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >) was fortified from
                          <a
                            class="territory"
                            onclick="highlightTerritory(3376)"
                            >Zacynthos</a
                          >
                          (<a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >) with 4 troops.
                        </div>
                      </li>
                      <li id="logentry-85891498" data-entry-id="85891498">
                        <div class="chat-message-time">
                          19 Apr, 11:08:07
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3376)"
                            >Zacynthos</a
                          >
                          (<a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3372)"
                            >Corcyra</a
                          >
                          (<a
                            href="https://dominating12.com/user/62510"
                            class="player player-1"
                            style=""
                            >Heapsrob</a
                          >) killing 1, losing 1.
                        </div>
                      </li>
                      <li id="logentry-85891484" data-entry-id="85891484">
                        <div class="chat-message-time">
                          19 Apr, 11:07:59
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3418)"
                            >Ellis</a
                          >
                          (<a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3376)"
                            >Zacynthos</a
                          >
                          with 6 troops.
                        </div>
                      </li>
                      <li id="logentry-85891319" data-entry-id="85891319">
                        <div class="chat-message-time">
                          19 Apr, 11:07:55
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3418)"
                            >Ellis</a
                          >
                          (<a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3376)"
                            >Zacynthos</a
                          >
                          (<a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >) conquering it, killing 3, losing 0.
                        </div>
                      </li>
                      <li id="logentry-85888579" data-entry-id="85888579">
                        <div class="chat-message-time">
                          19 Apr, 10:30:31
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3422)"
                            >Messinia</a
                          >
                          (<a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3418)"
                            >Ellis</a
                          >
                          with 7 troops.
                        </div>
                      </li>
                      <li id="logentry-85888567" data-entry-id="85888567">
                        <div class="chat-message-time">
                          19 Apr, 10:30:28
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3422)"
                            >Messinia</a
                          >
                          (<a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3418)"
                            >Ellis</a
                          >
                          (<a
                            href="https://dominating12.com/user/60940"
                            class="player player-2"
                            style=""
                            >Excalibur_83</a
                          >) conquering it, killing 3, losing 0.
                        </div>
                      </li>
                      <li id="logentry-85888539" data-entry-id="85888539">
                        <div class="chat-message-time">
                          19 Apr, 10:30:19
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3422)"
                            >Messinia</a
                          >
                          (<a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >) was reinforced by
                          <a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >
                          with 3 troops.
                        </div>
                      </li>
                      <li id="logentry-85888531" data-entry-id="85888531">
                        <div class="chat-message-time">
                          19 Apr, 10:30:14
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >
                          received 3 troops for 7 territories.
                        </div>
                      </li>
                      <li id="logentry-85888530" data-entry-id="85888530">
                        <div class="chat-message-time">
                          19 Apr, 10:30:14
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60841"
                            class="player player-4"
                            style=""
                            >OrderoftheBath</a
                          >
                          started the turn.
                        </div>
                      </li>
                      <li id="logentry-85882029" data-entry-id="85882029">
                        <div class="chat-message-time">
                          19 Apr, 08:43:34
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >
                          ended the turn.
                        </div>
                      </li>
                      <li id="logentry-85882028" data-entry-id="85882028">
                        <div class="chat-message-time">
                          19 Apr, 08:43:34
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >
                          received a card.
                        </div>
                      </li>
                      <li id="logentry-85882027" data-entry-id="85882027">
                        <div class="chat-message-time">
                          19 Apr, 08:43:34
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3408)"
                            >Caria</a
                          >
                          (<a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >) was fortified from
                          <a
                            class="territory"
                            onclick="highlightTerritory(3409)"
                            >Cos</a
                          >
                          (<a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >) with 2 troops.
                        </div>
                      </li>
                      <li id="logentry-85882024" data-entry-id="85882024">
                        <div class="chat-message-time">
                          19 Apr, 08:43:28
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3411)"
                            >Karpathos</a
                          >
                          (<a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >) occupied
                          <a
                            class="territory"
                            onclick="highlightTerritory(3412)"
                            >Dicte</a
                          >
                          with 1 troop.
                        </div>
                      </li>
                      <li id="logentry-85882023" data-entry-id="85882023">
                        <div class="chat-message-time">
                          19 Apr, 08:43:25
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3411)"
                            >Karpathos</a
                          >
                          (<a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3412)"
                            >Dicte</a
                          >
                          (<a
                            href="https://dominating12.com/user/60940"
                            class="player player-2"
                            style=""
                            >Excalibur_83</a
                          >) conquering it, killing 1, losing 0.
                        </div>
                      </li>
                      <li id="logentry-85881990" data-entry-id="85881990">
                        <div class="chat-message-time">
                          19 Apr, 08:43:03
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3389)"
                            >Thessaly</a
                          >
                          (<a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >) attacked
                          <a
                            class="territory"
                            onclick="highlightTerritory(3391)"
                            >Phthia</a
                          >
                          (<a
                            href="https://dominating12.com/user/60940"
                            class="player player-2"
                            style=""
                            >Excalibur_83</a
                          >) killing 3, losing 5.
                        </div>
                      </li>
                      <li id="logentry-85881976" data-entry-id="85881976">
                        <div class="chat-message-time">
                          19 Apr, 08:42:46
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3408)"
                            >Caria</a
                          >
                          (<a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >) was reinforced by
                          <a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >
                          with 2 troops.
                        </div>
                      </li>
                      <li id="logentry-85881973" data-entry-id="85881973">
                        <div class="chat-message-time">
                          19 Apr, 08:42:40
                        </div>
                        <div class="chat-message-body">
                          <a
                            class="territory"
                            onclick="highlightTerritory(3389)"
                            >Thessaly</a
                          >
                          (<a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >) was reinforced by
                          <a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >
                          with 3 troops.
                        </div>
                      </li>
                      <li id="logentry-85736228" data-entry-id="85736228">
                        <div class="chat-message-time">
                          18 Apr, 19:50:44
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >
                          received 2 troops for holding Dodecannese.
                        </div>
                      </li>
                      <li id="logentry-85736227" data-entry-id="85736227">
                        <div class="chat-message-time">
                          18 Apr, 19:50:44
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >
                          received 3 troops for 9 territories.
                        </div>
                      </li>
                      <li id="logentry-85736226" data-entry-id="85736226">
                        <div class="chat-message-time">
                          18 Apr, 19:50:44
                        </div>
                        <div class="chat-message-body">
                          <a
                            href="https://dominating12.com/user/60683"
                            class="player player-7"
                            style=""
                            >alunturner</a
                          >
                          started the turn.
                        </div>
                      </li>
                      <li id="logentry-85724362" data-entry-id="85724362">
                        <div class="chat-message-time">
                          18 Apr, 19:01:25
                        </div>
                        <div class="chat-message-body">
                          Round 3 started.
                        </div>
                      </li>
                      <li class="more">
                        <div class="chat-message-body">
                          <a id="load-log">
                            Load full log
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div
                  id="player-notes"
                  class="notes-wrapper"
                  style="display: none;"
                >
                  <div class="top">
                    <textarea id="notes"></textarea>
                  </div>
                  <div class="bottom">
                    <button id="notes-btn-save">Save notes</button>
                    <span id="notes-status-save"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="game-footer">
          <div class="container">
            <ul class="game-settings">
              <li>Cards: <strong>Capped (20)</strong></li>
              <li>Fortification: <strong>Chained</strong></li>
              <li class="timer" id="turn-timer">
                <strong>88:88:88</strong>
                <span class="servertime-error"></span>
              </li>
              <li>Fog of war: <strong>No</strong></li>
              <li>Dice: <strong>Original</strong></li>
            </ul>
          </div>
        </div>

        <audio preload="auto" id="sound_turn-alert">
          <source
            src="https://dominating12.com/assets/sound/your-turn.ogg"
            type="audio/ogg"
          />
          <source
            src="https://dominating12.com/assets/sound/your-turn.mp3"
            type="audio/mpeg"
          />
        </audio>
        <audio preload="auto" id="sound_time-alert">
          <source
            src="https://dominating12.com/assets/sound/time-up.ogg"
            type="audio/ogg"
          />
          <source
            src="https://dominating12.com/assets/sound/time-up.mp3"
            type="audio/mpeg"
          />
        </audio>
      </main>
      <div class="clearfix"></div>

      <footer class="footer">
        Risk, strategy, and world domination online and free. Not Associated
        with Risk or Hasbro®.
        <ul>
          <li><a href="https://dominating12.com/contact">Contact us</a></li>
          <li>•</li>
          <li>
            <a href="https://dominating12.com/legal/privacy">Privacy policy</a>
          </li>
          <li>•</li>
          <li>
            <a href="https://dominating12.com/legal/terms">Terms of use</a>
          </li>
        </ul>
        Copyright 2009-2020 @ Dominating12.com
      </footer>

      <div class="game-footer-spacing"></div>
    </div>

    <div id="modal-container"></div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <script src="/assets/js/bundle.js"></script>
    <script src="/build/assets/js/app-c78687a04d.coffee.js"></script>
    <script>
      $(document).ready(function () {
        playGame = new PlayGame(997721, {
          status: 3,
        });

        publicChat = new Chat("#game-chat .chat-wrapper", 0, 997721);

        teamChat = null;

        teamChat = new Chat("#team-chat .chat-wrapper", 1, 997721, true);

        mapDisplay = new Map(72, 1024, 795);
      });
    </script>
  </body>
</html>;


`;

const root = parse(pagedata);
const playerData = [];
for (let i = 1; i < 7; i++) {
  playerData.push(root.querySelector(`#playerrow-${i} .name`).text.trim());
}
console.log(playerData);
