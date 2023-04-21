/*

spellId     : "000000" ,
name        : "이름" ,
name_en     : "이름영어" ,
feature     : null ,

derive      : null ,
beDerived   : ["공포의 균열"] ,

castTime    : null ,
range       : null ,
radius      : null ,
duration    : null ,
cooldown    : null ,
dotInterval : null ,

dmg_heroic  : 000000 ,
dmg_mythic  : 000000 ,

school      : "Shadowflame" ,
interupt    : null ,
dispel      : null ,

icon        : "이미지주소" ,
gif         : "이미지주소" ,

description : "설명 입력"

*/


const 지옥벼림카자라 = {
    지옥강철학살: {

        spellId     : "401319" ,
        name        : "지옥강철 학살" ,
        name_en     : "Hellsteel Carnage" ,
        feature     : "중요" ,

        derive      : ["지옥불 심장" , "공포의 균열" , "망령의 피"] ,
        beDerived   : null ,

        castTime    : "3 sec" ,
        range       : null ,
        radius      : null ,
        duration    : null ,
        cooldown    : null ,                     // 후에 작업
        dotInterval : null ,

        dmg_heroic  : 122682 ,
        dmg_mythic  : 164217 ,

        school      : "Shadowflame" ,
        interupt    : null ,
        dispel      : null ,
        
        icon        : "https://wow.zamimg.com/images/wow/icons/large/achievment_boss_spineofdeathwing.jpg" ,
        gif         : "" ,                       // 후에 작업

        description : ""                        // 후에 작업

    } ,
    지옥불심장: {

        spellId     : "408367" ,
        name        : "지옥불 심장" ,
        name_en     : "Infernal Heart" ,
        feature     : "치유 담당 주의" ,

        derive      : null ,
        beDerived   : ["지옥강철 학살"] ,

        castTime    : null ,
        range       : null ,
        radius      : null ,
        duration    : null ,
        cooldown    : null ,   // 후에 작업
        dotInterval : 4 ,

        dmg_heroic  : 40813 ,
        dmg_mythic  : 60213 ,

        school      : "Shadowflame" ,
        interupt    : null ,
        dispel      : null ,

        icon        : "https://wow.zamimg.com/images/wow/icons/large/inv_ragnaros_heart.jpg" ,
        gif         : "" , // 후에 작업

        description : "" // 후에 작업

    } ,
    지옥강철파편: {

        spellId     : "402461" ,
        name        : "지옥강철 파편" ,
        name_en     : "Hellsteel Fragment" ,
        feature     : null ,

        derive      : null ,
        beDerived   : ["지옥강철 학살"] ,

        castTime    : null ,
        range       : null ,
        radius      : 4 ,
        duration    : null ,
        cooldown    : null ,   // 후에 작업
        dotInterval : null ,

        dmg_heroic  : 204469 ,
        dmg_mythic  : 273695 ,

        school      : "Shadowflame" ,
        interupt    : null ,
        dispel      : null ,

        icon        : "https://wow.zamimg.com/images/wow/icons/large/inv_10_elementalcombinedfoozles_shadowflame.jpg" ,
        gif         : "" , // 후에 작업

        description : "" // 후에 작업

    } ,
    망령의피: {

        spellId     : "404789" ,
        name        : "망령의 피" ,
        name_en     : "Revenant's Blood" ,
        feature     : null ,

        derive      : null ,
        beDerived   : ["지옥강철 학살"] ,

        castTime    : null ,
        range       : null ,
        radius      : 3 ,
        duration    : null ,
        cooldown    : null ,   // 후에 작업
        dotInterval : null ,

        dmg_heroic  : 163575 ,
        dmg_mythic  : 218956 ,

        school      : "Shadowflame" ,
        interupt    : null ,
        dispel      : null ,

        icon        : "https://wow.zamimg.com/images/wow/icons/large/ability_deathwing_bloodcorruption_earth.jpg" ,
        gif         : "" , // 후에 작업

        description : "" // 후에 작업

    } ,
    공포의균열: {

        spellId     : "407196" ,
        name        : "공포의 균열" ,
        name_en     : "Dread Rifts" ,
        feature     : null ,

        derive      : ["균열 화상" , "타오르는 흉터"] ,
        beDerived   : null ,

        castTime    : null ,
        range       : null ,
        radius      : 5 ,
        duration    : 5 ,
        cooldown    : null ,   // 후에 작업
        dotInterval : null ,

        dmg_heroic  : 163575 ,
        dmg_mythic  : 273695 ,

        school      : "Shadowflame" ,
        interupt    : null ,
        dispel      : null ,

        icon        : "https://wow.zamimg.com/images/wow/icons/large/inv_shadowflame_groundstate.jpg" ,
        gif         : "" , // 후에 작업

        description : "" // 후에 작업

    } ,
    균열화상: {

        spellId     : "406530" ,
        name        : "균열화상" ,
        name_en     : "Riftburn" ,
        feature     : null ,

        derive      : null ,
        beDerived   : ["공포의 균열"] ,

        castTime    : null ,
        range       : null ,
        radius      : null ,
        duration    : null ,
        cooldown    : null ,   // 후에 작업
        dotInterval : 1 ,

        dmg_heroic  : 73652 ,
        dmg_mythic  : 109464 ,

        school      : "Shadowflame" ,
        interupt    : null ,
        dispel      : null ,

        icon        : "https://wow.zamimg.com/images/wow/icons/large/inv_shadowflames_wave.jpg" ,
        gif         : "" , // 후에 작업

        description : "" // 후에 작업
        
    } ,
    타오르는흉터: {

        spellId     : "402421" ,
        name        : "타오르는 흉터" ,
        name_en     : "Molten Scar" ,
        feature     : null ,
        
        derive      : null ,
        beDerived   : ["공포의 균열" , "고뇌의 광선"] ,
        
        castTime    : null ,
        range       : null ,
        radius      : null ,
        duration    : 7 ,
        cooldown    : null ,
        dotInterval : 1 ,
        
        dmg_heroic  : 73652 ,
        dmg_mythic  : 109478 ,
        
        school      : "Shadowflame" ,
        interupt    : null ,
        dispel      : null ,
        
        icon        : "https://wow.zamimg.com/images/wow/icons/large/spell_fire_moltenblood.jpg" ,
        gif         : "이미지주소" ,
        
        description : "설명 입력"
        
    } ,
    고뇌의광선: {

        spellId     : "407069" ,
        name        : "고뇌의 광선" ,
        name_en     : "Rays of Anguish" ,
        feature     : "영웅 난이도" ,
        
        derive      : ["냉혹한 고문" , "타오르는 흉터"]  ,
        beDerived   : null ,
        
        castTime    : 1 ,
        range       : null ,
        radius      : null ,
        duration    : null ,
        cooldown    : null ,
        dotInterval : 0.3 ,
        
        dmg_heroic  : 122682 ,
        dmg_mythic  : 191587 ,
        
        school      : "Shadowflame" ,
        interupt    : null ,
        dispel      : null ,
        
        icon        : "https://wow.zamimg.com/images/wow/icons/large/ability_mage_firestarter.jpg" ,
        gif         : "이미지주소" ,
        
        description : "설명 입력"
        
    } ,
    냉혹한고문: {

        spellId     : "000000" ,
        name        : "냉혹한 고문" ,
        name_en     : null ,
        feature     : null ,
        
        derive      : null ,
        beDerived   : ["고뇌의 광선"] ,
        
        castTime    : null ,
        range       : null ,
        radius      : null ,
        duration    : null ,
        cooldown    : null ,
        dotInterval : 2 ,
        
        dmg_heroic  : 40894 ,
        dmg_mythic  : 54739 ,
        
        school      : "Shadowflame" ,
        interupt    : null ,
        dispel      : null ,
        
        icon        : "이미지주소" ,
        gif         : "이미지주소" ,
        
        description : "설명 입력"
        
    } ,
    지옥광선: {

        spellId     : "400430" ,
        name        : "지옥광선" ,
        name_en     : "Hellbeam" ,
        feature     : "치명적" ,
        
        derive      : null ,
        beDerived   : null ,
        
        castTime    : 3.5 ,
        range       : null ,
        radius      : null ,
        duration    : 3 ,
        cooldown    : null ,
        dotInterval : 0.3 ,
        
        dmg_heroic  : 10223 ,
        dmg_mythic  : 16413 ,
        
        school      : "Shadowflame" ,
        interupt    : null ,
        dispel      : null ,
        
        icon        : "https://wow.zamimg.com/images/wow/icons/large/ability_warlock_shadowflame.jpg" ,
        gif         : "이미지주소" ,
        
        description : "설명 입력"
        
    } ,
    멸종의날개: {

        spellId     : "403326" ,
        name        : "멸종의 날개" ,
        name_en     : "Wings of Extinction" ,
        feature     : "치유 담당 주의" ,
        
        derive      : null ,
        beDerived   : null ,
        
        castTime    : 2 ,
        range       : null ,
        radius      : null ,
        duration    : 20 ,
        cooldown    : null ,
        dotInterval : 2 ,
        
        dmg_heroic  : 28626 ,
        dmg_mythic  : 49265 ,
        
        school      : "Shadowflame" ,
        interupt    : null ,
        dispel      : null ,
        
        icon        : "https://wow.zamimg.com/images/wow/icons/large/inv_icon_wingbroken07d.jpg" ,
        gif         : "이미지주소" ,
        
        description : "설명 입력"
        
    } ,
    공포의발톱: {

        spellId     : "404744" ,
        name        : "공포의 발톱" ,
        name_en     : "Terror Claws" ,
        feature     : "방어 전담 주의" ,
        
        derive      : null ,
        beDerived   : null ,
        
        castTime    : 1.5 ,
        range       : null ,
        radius      : null ,
        duration    : 25 ,
        cooldown    : null ,
        dotInterval : 1 ,
        
        dmg_heroic  : (613408 + 204469),
        dmg_mythic  : (273695 + 821086),
        
        school      : "Shadowflame+Physical" ,
        interupt    : null ,
        dispel      : null ,
        
        icon        : "https://wow.zamimg.com/images/wow/icons/large/inv_10_elementalshardfoozles_shadowflame.jpg" ,
        gif         : "이미지주소" ,
        
        description : "설명 입력"
        
    } ,
    불지옥융합: {

        spellId     : "408147" ,
        name        : "불지옥 융합" ,
        name_en     : "Infernal Fusion" ,
        feature     : "신화 난이도" ,
        
        derive      : null ,
        beDerived   : ["고뇌의 광선"] ,
        
        castTime    : null ,
        range       : null ,
        radius      : null ,
        duration    : null ,
        cooldown    : null ,
        dotInterval : null ,
        
        dmg_heroic  : null ,
        dmg_mythic  : 164217 ,
        
        school      : "Shadowflame" ,
        interupt    : null ,
        dispel      : null ,
        
        icon        : "https://wow.zamimg.com/images/wow/icons/large/inv_misc_volatilefire.jpg" ,
        gif         : "이미지주소" ,
        
        description : "설명 입력"

    }
}

const 융합체의방 = {

    페이즈_1: {
        원소의불안정: {

            spellId     : "408095" ,
            name        : "원소의 불안정" ,
            name_en     : "Elemental Instability" ,
            feature     : "중요, 치명적" ,
            
            derive      : null ,
            beDerived   : null ,
            
            castTime    : null ,
            range       : null ,
            radius      : null ,
            duration    : 25 ,
            cooldown    : null ,
            dotInterval : null ,
            
            dmg_heroic  : null ,
            dmg_mythic  : null ,
            
            school      : null ,
            interupt    : null ,
            dispel      : null ,
            
            icon        : "https://wow.zamimg.com/images/wow/icons/large/inv_10_elementalspiritfoozles_purifiedshadowflame.jpg" ,
            gif         : null ,
            
            description : "붙어있으면 공격력 200% 증가"

        } ,
        그림자의정수: {
            타락의어둠: {

                spellId     : "401809" ,
                name        : "타락의 어둠" ,
                name_en     : "Corrupting Shadow" ,
                feature     : "중요" ,
                
                derive      : ["그림자의 정수"] ,
                beDerived   : null ,
                
                castTime    : null ,
                range       : null ,
                radius      : 50 ,
                duration    : 20 ,
                cooldown    : null ,
                dotInterval : 5 ,
                
                dmg_heroic  : 8179 ,
                dmg_mythic  : 10948 ,
                
                school      : "Shadow" ,
                interupt    : null ,
                dispel      : null ,
                
                icon        : "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_deathsembrace.jpg" ,
                gif         : "이미지주소" ,
                
                description : "최대 생명력 1% 감소, 중첩됨"

            } ,
            응결되는공허: {

                spellId     : "403459" ,
                name        : "응결되는 공허" ,
                name_en     : "Coalescing Void" ,
                feature     : null ,
                
                derive      : ["그림자의 정수"] ,
                beDerived   : null ,
                
                castTime    : 3 ,
                range       : null ,
                radius      : 50 ,
                duration    : null ,
                cooldown    : null ,
                dotInterval : null ,
                
                dmg_heroic  : 327151 ,
                dmg_mythic  : 437912 ,
                
                school      : "Shadow" ,
                interupt    : null ,
                dispel      : null ,
                
                icon        : "https://wow.zamimg.com/images/wow/icons/large/inv_icon_shadowcouncilorb_purple.jpg" ,
                gif         : "이미지주소" ,
                
                description : "멀리 떨어질수록 받는 피해 감소"

            } ,
            암영의폭발: {

                spellId     : "405016" ,
                name        : "암영의 폭발" ,
                name_en     : "Umbral Detonation" ,
                feature     : null ,
                
                derive      : ["잔존하는 암영"] ,
                beDerived   : ["그림자의 정수"] ,
                
                castTime    : 2 ,
                range       : null ,
                radius      : 8 ,
                duration    : 6 ,
                cooldown    : null ,
                dotInterval : null ,
                
                dmg_heroic  : 102235 ,
                dmg_mythic  : 136848 ,
                
                school      : "Shadow" ,
                interupt    : null ,
                dispel      : null ,
                
                icon        : "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_shadowfury.jpg" ,
                gif         : "이미지주소" ,
                
                description : "나가서 바닥깔고와"

            } ,
            잔존하는암영: {

                spellId     : "405083" ,
                name        : "잔존하는 암영" ,
                name_en     : "Lingering Umbra" ,
                feature     : null ,
                
                derive      : null ,
                beDerived   : ["암영의 폭발"] ,
                
                castTime    : null ,
                range       : null ,
                radius      : null ,
                duration    : 120 ,
                cooldown    : null ,
                dotInterval : 1 ,
                
                dmg_heroic  : 44983 ,
                dmg_mythic  : 60213 ,
                
                school      : "Shadow" ,
                interupt    : null ,
                dispel      : null ,
                
                icon        : "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_shadetruesight.jpg" ,
                gif         : "이미지주소" ,
                
                description : "그림자의 정수로부터 깔린 바닥"

            } ,
            어둠의합일: {

                spellId     : "407640" ,
                name        : "어둠의 합일" ,
                name_en     : "Shadows Convergence" ,
                feature     : "영웅 난이도" ,
                
                derive      : null ,
                beDerived   : null ,
                
                castTime    : 2 ,
                range       : 50 ,
                radius      : null ,
                duration    : null ,
                cooldown    : null ,
                dotInterval : null ,
                
                dmg_heroic  : 204469 ,
                dmg_mythic  : 273695 ,
                
                school      : "Shadow" ,
                interupt    : null ,
                dispel      : null ,
                
                icon        : "https://wow.zamimg.com/images/wow/icons/large/spell_priest_shadoworbs.jpg" ,
                gif         : "이미지주소" ,
                
                description : "그냥 피해"

            } ,
            어둠의쐐기: {

                spellId     : "403699" ,
                name        : "어둠의 쐐기" ,
                name_en     : "Shadow Spike" ,
                feature     : "방어 담당 주의" ,
                
                derive      : null ,
                beDerived   : null ,
                
                castTime    : null ,
                range       : null ,
                radius      : null ,
                duration    : null ,
                cooldown    : null ,
                dotInterval : null ,
                
                dmg_heroic  : 143128 ,
                dmg_mythic  : 191587 ,
                
                school      : "Shadow" ,
                interupt    : null ,
                dispel      : null ,
                
                icon        : "https://wow.zamimg.com/images/wow/icons/large/ability_ironmaidens_convulsiveshadows.jpg" ,
                gif         : "이미지주소" ,
                
                description : "탱 아파"

            }
            

        } ,
        영원한불길: {
            타오르는열기: {

                spellId     : "402617" ,
                name        : "타오르는 열기" ,
                name_en     : "Blazing Heat" ,
                feature     : "중요" ,
                
                derive      : null ,
                beDerived   : null ,
                
                castTime    : null ,
                range       : 50 ,
                radius      : null ,
                duration    : 20 ,
                cooldown    : null ,
                dotInterval : 1 ,
                
                dmg_heroic  : 2045 ,
                dmg_mythic  : 2737 ,
                
                school      : "Flame" ,
                interupt    : null ,
                dispel      : null ,
                
                icon        : "https://wow.zamimg.com/images/wow/icons/large/ability_warlock_fireandbrimstone.jpg" ,
                gif         : "이미지주소" ,
                
                description : "중첩됨"

            } ,
            불타는유성: {

                spellId     : "404732" ,
                name        : "불타는 유성" ,
                name_en     : "Fiery Meteor" ,
                feature     : null ,
                
                derive      : null ,
                beDerived   : null ,
                
                castTime    : 5 ,
                range       : null ,
                radius      : 8 ,
                duration    : null ,
                cooldown    : null ,
                dotInterval : null ,
                
                dmg_heroic  : 1020000 ,
                dmg_mythic  : 1368476 ,
                
                school      : "Flame" ,
                interupt    : null ,
                dispel      : null ,
                
                icon        : "https://wow.zamimg.com/images/wow/icons/large/spell_mage_meteor.jpg" ,
                gif         : "이미지주소" ,
                
                description : "인원수에 비례해 최소 적중 플레이어 수 필요, 그렇지 않으면 공격대 피해 408939 / 547391"

            } ,
            타오르는폭발: {

                spellId     : "403101" ,
                name        : "타오르는 폭발" ,
                name_en     : "Molten Eruption" ,
                feature     : "영웅 난이도" ,
                
                derive      : null ,
                beDerived   : null ,
                
                castTime    : 1 ,
                range       : null ,
                radius      : 5 ,
                duration    : null ,
                cooldown    : null ,
                dotInterval : null ,
                
                dmg_heroic  : 81788 ,
                dmg_mythic  : 109478 ,
                
                school      : "Flame" ,
                interupt    : null ,
                dispel      : null ,
                
                icon        : "https://wow.zamimg.com/images/wow/icons/large/ability_rhyolith_volcano.jpg" ,
                gif         : "이미지주소" ,
                
                description : "여러개 등장하는 막아야 하는 바닥, 다 막지 못하면 공격대 피해 163575 / 218956"

            } ,
            소용돌이치는화염: {

                spellId     : "404896" ,
                name        : "소용돌이치는 화염" ,
                name_en     : "Swirling Flame" ,
                feature     : null ,
                
                derive      : null ,
                beDerived   : null ,
                
                castTime    : 2 ,
                range       : null ,
                radius      : null ,
                duration    : null ,
                cooldown    : null ,
                dotInterval : null ,
                
                dmg_heroic  : 163575 ,
                dmg_mythic  : 218956 ,
                
                school      : "Flame" ,
                interupt    : null ,
                dispel      : null ,
                
                icon        : "https://wow.zamimg.com/images/wow/icons/large/spell_shaman_lavasurge.jpg" ,
                gif         : "이미지주소" ,
                
                description : "토네이도 피해요"

            } ,
            화염베기: {

                spellId     : "403203" ,
                name        : "화염 베기" ,
                name_en     : "Flame Slash" ,
                feature     : "방어 담당 주의" ,
                
                derive      : null ,
                beDerived   : null ,
                
                castTime    : 2 ,
                range       : null ,
                radius      : null ,
                duration    : null ,
                cooldown    : null ,
                dotInterval : null ,
                
                dmg_heroic  : 143128 ,
                dmg_mythic  : 191587 ,
                
                school      : "Flame" ,
                interupt    : null ,
                dispel      : null ,
                
                icon        : "https://wow.zamimg.com/images/wow/icons/large/spell_fire_soulburn.jpg" ,
                gif         : "이미지주소" ,
                
                description : "탱 아파요"

            }
        }

    } ,
    페이즈_사잇단계: {
        분열된불꽃: {

            spellId     : "408714" ,
            name        : "분열된 불꽃" ,
            name_en     : "Splintered Flames" ,
            feature     : null ,
            
            derive      : null ,
            beDerived   : null ,
            
            castTime    : null ,
            range       : null ,
            radius      : null ,
            duration    : null ,
            cooldown    : null ,
            dotInterval : null ,
            
            dmg_heroic  : 122682 ,
            dmg_mythic  : 164217 ,
            
            school      : "Fire" ,
            interupt    : null ,
            dispel      : null ,
            
            icon        : "https://wow.zamimg.com/images/wow/icons/large/inv_ember.jpg" ,
            gif         : "이미지주소" ,
            
            description : "그냥 바닥 피해"

        } ,
        분열된암흑: {

            spellId     : "408717" ,
            name        : "분열된 암흑" ,
            name_en     : "Splintered Shadow" ,
            feature     : null ,
            
            derive      : null ,
            beDerived   : null ,
            
            castTime    : null ,
            range       : null ,
            radius      : null ,
            duration    : null ,
            cooldown    : null ,
            dotInterval : null ,
            
            dmg_heroic  : 122682 ,
            dmg_mythic  : 164217 ,
            
            school      : "Fire" ,
            interupt    : null ,
            dispel      : null ,
            
            icon        : "https://wow.zamimg.com/images/wow/icons/large/spell_fire_twilightflamestrike.jpg" ,
            gif         : "이미지주소" ,
            
            description : "그냥 바닥 피해"

        } ,
    } ,
    페이즈_2: {
        암흑불길융합체: {
            암흑불길오염: {

                spellId     : "406780" ,
                name        : "암흑불길 오염" ,
                name_en     : "Shadowflame Contamination" ,
                feature     : "중요, 치유 전담 주의" ,
                
                derive      : null ,
                beDerived   : null ,
                
                castTime    : null ,
                range       : 50 ,
                radius      : null ,
                duration    : null ,
                cooldown    : 10 ,
                dotInterval : 2 ,
                
                dmg_heroic  : 5112 ,
                dmg_mythic  : 6842 ,
                
                school      : "Shadowflame" ,
                interupt    : null ,
                dispel      : null ,
                
                icon        : "https://wow.zamimg.com/images/wow/icons/large/inv_shadowflame_debuff.jpg" ,
                gif         : "이미지주소" ,
                
                description : "최대 생명력 1% 감소, 중첩됨"

            } ,
            암울한겁화: {

                spellId     : "405437" ,
                name        : "암울한 겁화" ,
                name_en     : "Gloom Conflagration" ,
                feature     : null ,
                
                derive      : null ,
                beDerived   : null ,
                
                castTime    : 5 ,
                range       : null ,
                radius      : 8 ,
                duration    : null ,
                cooldown    : null ,
                dotInterval : null ,
                
                dmg_heroic  : 1840000 ,
                dmg_mythic  : 2463258 ,
                
                school      : "Shadowflame" ,
                interupt    : null ,
                dispel      : null ,
                
                icon        : "https://wow.zamimg.com/images/wow/icons/large/inv_shadowflame_nova.jpg" ,
                gif         : "이미지주소" ,
                
                description : "184만 데미지 나눠맞기, 최소 5명 이상 플레이어 적중 필요, 아닐시 공격대 피해 490726 / 547391, 이후 2차 폭발은 멀리 떨어지기"

            } ,
            맹렬한황혼: {

                spellId     : "405641" ,
                name        : "맹렬한 황혼" ,
                name_en     : "Blistering Twilight" ,
                feature     : null ,
                
                derive      : ["소용돌이치는 암흑불길", "휘몰아치는 열기"] ,
                beDerived   : null ,
                
                castTime    : 2 ,
                range       : null ,
                radius      : null ,
                duration    : 6 ,
                cooldown    : null ,
                dotInterval : null ,
                
                dmg_heroic  : 122682 ,
                dmg_mythic  : 6842 ,
                
                school      : "Shadowflame" ,
                interupt    : null ,
                dispel      : null ,
                
                icon        : "https://wow.zamimg.com/images/wow/icons/large/inv_shadowflame_groundstate.jpg" ,
                gif         : "이미지주소" ,
                
                description : "나가서 바닥 깔고 오기, 동시에 회오리도 생성됨" ,

                소용돌이치는암흑불길: {

                    spellId     : "405704" ,
                    name        : "소용돌이치는 암흑불길" ,
                    name_en     : "Swirling Shadowflame" ,
                    feature     : null ,
                    
                    derive      : null ,
                    beDerived   : "맹렬한 황혼" ,
                    
                    castTime    : null ,
                    range       : null ,
                    radius      : null ,
                    duration    : null ,
                    cooldown    : null ,
                    dotInterval : null ,
                    
                    dmg_heroic  : 204469 ,
                    dmg_mythic  : 273695 ,
                    
                    school      : "Shadowflame" ,
                    interupt    : null ,
                    dispel      : null ,
                    
                    icon        : "https://wow.zamimg.com/images/wow/icons/large/inv_shadowflames_wave.jpg" ,
                    gif         : "이미지주소" ,
                    
                    description : "나가서 깐 바닥으로부터 나오는 회오리"

                },
                휘몰아치는열기: {

                    spellId     : "405645" ,
                    name        : "휘몰아치는 열기" ,
                    name_en     : "Engulfing Heat" ,
                    feature     : null ,
                    
                    derive      : null ,
                    beDerived   : "맹렬한 황혼" ,
                    
                    castTime    : null ,
                    range       : null ,
                    radius      : null ,
                    duration    : null ,
                    cooldown    : null ,
                    dotInterval : 1 ,
                    
                    dmg_heroic  : 44983 ,
                    dmg_mythic  : 60213 ,
                    
                    school      : "Shadowflame" ,
                    interupt    : null ,
                    dispel      : null ,
                    
                    icon        : "https://wow.zamimg.com/images/wow/icons/large/inv_10_elementalshardfoozles_purifiedshadowflame.jpg" ,
                    gif         : "이미지주소" ,
                    
                    description : "나가서 깐 바닥"
                } ,
            } ,
            융합분출: {

                spellId     : "408193" ,
                name        : "융합 분출" ,
                name_en     : "Convergent Eruption" ,
                feature     : "영웅 난이도" ,
                
                derive      : null ,
                beDerived   : "맹렬한 황혼" ,
                
                castTime    : 1 ,
                range       : null ,
                radius      : null ,
                duration    : null ,
                cooldown    : null ,
                dotInterval : 1 ,
                
                dmg_heroic  : 89966 ,
                dmg_mythic  : 120426 ,
                
                school      : "Shadowflame" ,
                interupt    : null ,
                dispel      : null ,
                
                url         : "https://www.wowhead.com/ptr/spell=408193/convergent-eruption",
                icon        : "https://wow.zamimg.com/images/wow/icons/large/inv_10_elementalshardfoozles_purifiedshadowflame.jpg" ,
                gif         : "이미지주소" ,
                
                description : "모든 바닥 막기, 막고 나면 충격 지점으로 5방향에서 날아오는 구체 피하기"
                
            } ,            
            쇠약의약점: {

                spellId     : "408193" ,
                name        : "융합 분출" ,
                name_en     : "Convergent Eruption" ,
                feature     : "영웅 난이도" ,
                
                derive      : null ,
                beDerived   : "맹렬한 황혼" ,
                
                castTime    : 1 ,
                range       : null ,
                radius      : null ,
                duration    : null ,
                cooldown    : null ,
                dotInterval : 1 ,
                
                dmg_heroic  : 89966 ,
                dmg_mythic  : 120426 ,
                
                school      : "Shadowflame" ,
                interupt    : null ,
                dispel      : null ,
                
                url         : "https://www.wowhead.com/ptr/spell=408193/convergent-eruption",
                icon        : "https://wow.zamimg.com/images/wow/icons/large/inv_10_elementalshardfoozles_purifiedshadowflame.jpg" ,
                gif         : "이미지주소" ,
                
                description : "모든 바닥 막기, 막고 나면 충격 지점으로 5방향에서 날아오는 구체 피하기"
                
            } ,            
            융합분출: {

                spellId     : "408193" ,
                name        : "융합 분출" ,
                name_en     : "Convergent Eruption" ,
                feature     : "영웅 난이도" ,
                
                derive      : null ,
                beDerived   : "맹렬한 황혼" ,
                
                castTime    : 1 ,
                range       : null ,
                radius      : null ,
                duration    : null ,
                cooldown    : null ,
                dotInterval : 1 ,
                
                dmg_heroic  : 89966 ,
                dmg_mythic  : 120426 ,
                
                school      : "Shadowflame" ,
                interupt    : null ,
                dispel      : null ,
                
                url         : "https://www.wowhead.com/ptr/spell=408193/convergent-eruption",
                icon        : "https://wow.zamimg.com/images/wow/icons/large/inv_10_elementalshardfoozles_purifiedshadowflame.jpg" ,
                gif         : "이미지주소" ,
                
                description : "모든 바닥 막기, 막고 나면 충격 지점으로 5방향에서 날아오는 구체 피하기"
                
            } ,            
        }
    }

    
}