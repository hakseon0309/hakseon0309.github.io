class npcAbility extends HTMLElement {
  connectedCallback() {
    let _spellId = this.getAttribute('_spellId')
    let _name = this.getAttribute('_name')
    let _enName = this.getAttribute('_enName')
    let _feature = this.getAttribute('_feature')
    let _dmgType = this.getAttribute('_dmgType')
    let _iconUrl = this.getAttribute('_iconUrl')
    let _gifUrl = this.getAttribute('_gifUrl')
    let _desc = this.getAttribute('_desc')
    this.innerHTML = `
    <div class="npcAbility">
        <div class="left">
            <div class="ability">
                <img class="icon" src="
                  ${_iconUrl}
                " alt="">
                <div class="text">
                    <div class="name">
                      ${_name}
                    </div>
                    <div class="enName">
                      ${_enName}
                    </div>
                </div>
                <div class="feature d-none d-md-block">
                    <div>${_feature}</div>
                    <div>${_dmgType}</div>
                    <div>${_spellId}</div>
                </div>
            </div>
            <div class="description">
                <p>
                  ${_desc}
                </p>
            </div>
        </div>
        <div class="right">
            <img class="gif" src="
              ${_gifUrl}
            " alt="">
        </div>                        
    </div>
    `;
  }
}
customElements.define('npcability-nm', npcAbility);



class qwe extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="title">
        <i class="fa-regular fa-hashtag" style="color: #a7a7a7;"></i>
        지옥벼림 카자라
    </div>
    <div class="content">
      <div class="mainImg text-center">
          <!-- IMG Here ! -->
          <img src="
          https://wow.zamimg.com/uploads/blog/images/33178-3-31.jpg
          " alt="">
      </div>
    <npcAbility-nm
    _spellId="401319"
    _name="지옥강철 학살"
    _enName="Hellsteel Carnage"
    _feature="중요"
    _dmgType="Shadowflame"
    _iconUrl="https://wow.zamimg.com/images/wow/icons/large/achievment_boss_spineofdeathwing.jpg"
    _gifUrl="img/wow/gifs/지옥강철 학살.gif"
    _desc="생명력이 80%, 60%, 40% 이하로 떨어지면 지옥강철 파편 발동, 모든 플레이어에게 122682 / 164217 암흑불길 피해"
    ></npcAbility-nm>

    <npcAbility-nm
    _spellId="408367"
    _name="지옥불 심장"
    _enName="Infernal Heart"
    _feature="치유 담당 주의"
    _dmgType="Shadowflame"
    _iconUrl="https://wow.zamimg.com/images/wow/icons/large/inv_ragnaros_heart.jpg"
    _gifUrl=""
    _desc="모든 플레이어에게 4초마다 40813 / 60213 암흑불길 피해
    지옥강철 학살 볼 때마다 주기 짧아짐"
    ></npcAbility-nm>

    <npcAbility-nm
    _spellId="407196"
    _name="공포의 균열"
    _enName="Dread Rifts"
    _feature=""
    _dmgType="Shadowflame"
    _iconUrl="https://wow.zamimg.com/images/wow/icons/large/inv_shadowflame_groundstate.jpg"
    _gifUrl=""
    _desc="5초 후 원형 바닥 생성, 지옥강철 학살마다 더 많은 대상 지정"
    ></npcAbility-nm>

    <npcAbility-nm
    _spellId="407069"
    _name="고뇌의 광선"
    _enName="Rays of Anguish"
    _feature="영웅 난이도 추가"
    _dmgType="Shadowflame"
    _iconUrl="https://wow.zamimg.com/images/wow/icons/large/ability_mage_firestarter.jpg"
    _gifUrl=""
    _desc="공포의 균열로부터 나오는 추적 레이저, 지나간 자리에 바닥, 공포의 균열로 유도해서 없애기, 영웅 난이도는 빨리 안없애면 공대피해"
    ></npcAbility-nm>

    <npcAbility-nm
    _spellId="400430"
    _name="지옥 광선"
    _enName="Hellbeam"
    _feature="치명적"
    _dmgType="Shadowflame"
    _iconUrl="https://wow.zamimg.com/images/wow/icons/large/ability_warlock_shadowflame.jpg"
    _gifUrl=""
    _desc="기력 100때 전방 브레스, 동시에 공대 피해도 옴"
    ></npcAbility-nm>

    <npcAbility-nm
    _spellId="403326"
    _name="멸종의 날개"
    _enName="Wings of Extinction"
    _feature="치유 담당 주의"
    _dmgType="Shadowflame"
    _iconUrl="https://wow.zamimg.com/images/wow/icons/large/inv_icon_wingbroken07d.jpg"
    _gifUrl=""
    _desc="공대피해주고 20초동안 2초마다 전원 디버프 부여"
    ></npcAbility-nm>

    <npcAbility-nm
    _spellId="404744"
    _name="공포의 발톱"
    _enName="Terror Claws"
    _feature="방어 담당 주의"
    _dmgType="Physical + Shadowflame"
    _iconUrl="https://wow.zamimg.com/images/wow/icons/large/inv_10_elementalshardfoozles_shadowflame.jpg"
    _gifUrl=""
    _desc="탱커 강한 피해, 25초동안 1초마다 데미지, 다음 중첩땐 200% 더 강하게 받음"
    ></npcAbility-nm>
    `;
  }
}
customElements.define('kazzara-heroic', qwe);

class rayout extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="banner">
    <img src="img/1839787544b35f811.gif" alt="">
</div>
<div class="profile">
    <div class="d-flex justify-content-center align-items-center">
        <img class="icon" src="https://wow.zamimg.com/images/wow/icons/large/inv_pet_cats_siamesecat.jpg" alt="">
        <div>
            <div class="character">
                학선양
            </div>
            <div class="server">
                KR-Azshara
            </div>
        </div>                        
    </div>
</div>
<div class="category">
    <ul class="list-group">
        <li class="list-group-item">
            지옥벼림 카자라
            <span class="position-absolute top-0 start-0 translate-middle badge rounded bg-primary">
            10.1
            </span>
            <a class="badge bg-secondary ms-1" href="#">New</a></li>
        <li class="list-group-item">융합체의 방</li>
        <li class="list-group-item">잊힌 실험체</li>
        <li class="list-group-item">자칼리의 습격</li>
        <li class="list-group-item">장로 라소크</li>
        <li class="list-group-item">경계하는 청지기 지스카른</li>
        <li class="list-group-item">마그모라</li>
        <li class="list-group-item">넬타리온의 메아리</li>
        <li class="list-group-item">비늘사령관 사카레스</li>
    </ul>
</div>
    `;
  }
}
customElements.define('main-layout', rayout);

class _header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header>HAKSEON LAB - WLB 10.1</header>
    `;
  }
}
customElements.define('custom-header', _header);



class test extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header>HAKSEON LAB - WLB 10.1</header>
    <div class="_hc-container">
        <aside>
            <img class="banner" src="img/1839787544b35f811.gif" alt="">
            <div class="profile">
                <div class="background">
                    <img class="icon" src="https://wow.zamimg.com/images/wow/icons/large/inv_pet_cats_siamesecat.jpg" alt="">
                    <div>
                        <div class="character">
                            학선양
                        </div>
                        <div class="server">
                            KR-Azshara
                        </div>
                    </div>    
                </div>                      
            </div>
            <div class="pad"></div>
            <div class="category">
                <div class="background">
                    <ul class="list-group">
                        <li class="list-group-item">
                            지옥벼림 카자라
                            <span class="position-absolute top-0 start-0 translate-middle badge rounded bg-primary">
                                10.1
                            </span>
                            <a class="badge bg-secondary ms-1" href="#">
                                New
                            </a>
                        </li>
                        <li class="list-group-item">융합체의 방</li>
                        <li class="list-group-item">잊힌 실험체</li>
                        <li class="list-group-item">자칼리의 습격</li>
                        <li class="list-group-item">장로 라소크</li>
                        <li class="list-group-item">경계하는 청지기 지스카른</li>
                        <li class="list-group-item">마그모라</li>
                        <li class="list-group-item">넬타리온의 메아리</li>
                        <li class="list-group-item">비늘사령관 사카레스</li>
                    </ul>
                </div>
            </div>
        </aside>
        <div class="_hc-post">
            <div class="title">
                여기에 제목을 입력하세요.                
            </div>
            <div class="content">
                여기에 내용을 입력하세요.
            </div>
        </div>
    </div>
    `;
  }
}
customElements.define('test-test', test);