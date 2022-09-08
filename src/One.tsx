import React from 'react';
// import {useParams} from 'react-router-dom';
import { useState } from 'react';



const One=()=>{
  const screenType='subsj';
  const [storyContent,setStoryContent]=useState("");
  const API_URL='http://localhost:3001/api/v1';
  const clientId="5f92a62013332e0f667794dc";
  const storyId="Client-Story-Id-4"

    const initializePaywall = () => {
        let storyTitle: string = '';
        let storySubTitle: string = '';
        let storyCategory: string = '';
    
        try {
          const story = {
            category: "story",
          id: "Client-Story-Id-1",
          subTitle: "subTitle 1",
          title: "Client-Story-Id-1"};
          storyTitle = story.title;
          storySubTitle = story.subTitle;
          storyCategory = story.category;
        } catch (e) {
          console.log('story title retrieval failed');
        }
    
        // @ts-ignore
        const csc = window._csc as any;
        if (screenType !== 'subs') {
          csc('init', {
            debug: true,
            storyId,
            hashCode: '',
            subscriptionUrl:"",
            accentColor:"",
            screenType,
            signInUrl: 'https://www.google.com',
            title: storyTitle,
            subTitle: storySubTitle,
            category: storyCategory,
            clientId: clientId,
            wrappingElementId: 'embed',
            fullScreenMode:"true",
            successCallback: async (validationObject: any) => {
              console.log('Initiating verification with conscent backend');
              const xhttp = new XMLHttpRequest(); // using vanilla javascript to make a post request (works everywhere)
              const url = 'http://localhost:3001/api/v1/content?clientContentId=Client-Story-Id-1&clientId=5f92a62013332e0f667794dc&userDateTime=2022-07-20T12:45:03.136Z';
              xhttp.open('POST', url, true);
    
              // e is the response event
              xhttp.onload = (e) => {
                // @ts-ignore
                const backendConfirmationData = JSON.parse(e.target.response);
             
                // verifying that the validation received matches the backend data
                if (
                  validationObject.consumptionId === backendConfirmationData.consumptionId &&
                  validationObject.payload.clientId === backendConfirmationData.payload.clientId &&
                  validationObject.payload.contentId === backendConfirmationData.payload.contentId
                ) {
                  // Validation successful
                  console.log('successful validation');
                  setStoryContent(`
                    Early use Scientists are still debating when people started wearing clothes. Estimates by various experts have
                    ranged from 40,000 to 3 million years ago. Some more recent studies involving the evolution of body lice have
                    implied a more recent development with some indicating a development of around 170,000 years ago and others
                    indicating as little as 40,000. No single estimate is widely accepted.[1][2][3][4] Ralf Kittler, Manfred Kayser
                    and Mark Stoneking, anthropologists at the Max Planck Institute for Evolutionary Anthropology, conducted a
                    genetic analysis of human body lice that suggests clothing originated around 170,000 years ago. Body lice are an
                    indicator of clothes-wearing, since most humans have sparse body hair, and lice thus require human clothing to
                    survive. Their research suggests that the invention of clothing may have coincided with the northward migration
                    of modern Homo sapiens away from the warm climate of Africa, thought to have begun between 50,000 and 100,000
                    years ago. However, a second group of researchers using similar genetic methods estimate that clothing
                    originated around 540,000 years ago.[5] According to archaeologists and anthropologists, the earliest clothing
                    likely consisted of fur, leather, leaves, or grass that were draped, wrapped, or tied around the body. Knowledge
                    of such clothing remains inferential, since clothing materials deteriorate quickly compared to stone, bone,
                    shell and metal artifacts. Archeologists have identified very early sewing needles of bone and ivory from about
                    30,000 BC, found near Kostenki, Russia in 1988.[6] Dyed flax fibers that could have been used in clothing have
                    been found in a prehistoric cave in the Republic of Georgia that date back to 34,000 BC.[7][8] Making clothing
                    See also: Garment industry, knitting, and weaving Sari Hindu Indian lady wearing sari, painting by Raja Ravi
                    Varma. One of the most ancient and popular pieces of clothing in the Indian subcontinent Some human cultures,
                    such as the various peoples of the Arctic Circle, traditionally make their clothing entirely of prepared and
                    decorated furs and skins. Other cultures supplemented or replaced leather and skins with cloth: woven, knitted,
                    or twined from various animal and vegetable fibers including wool, linen, cotton, silk, hemp, and ramie.
                    Although modern consumers may take the production of clothing for granted, making fabric by hand is a tedious
                    and labor-intensive process involving fiber making, spinning, and weaving. The textile industry was the first to
                    be mechanized – with the powered loom – during the Industrial Revolution. Different cultures have evolved
                    various ways of creating clothes out of cloth. One approach simply involves draping the cloth. Many people wore,
                    and still wear, garments consisting of rectangles of cloth wrapped to fit – for example, the dhoti for men and
                    the sari for women in the Indian subcontinent, the Scottish kilt and the Javanese sarong. The clothes may simply
                    be tied up (dhoti and sari); or pins or belts hold the garments in place (kilt and sarong). The cloth remains
                    uncut, and people of various sizes can wear the garment. Another approach involves measuring, cutting, and
                    sewing the cloth by hand or with a sewing machine. Clothing can be cut from a sewing pattern and adjusted by a
                    tailor to the wearer's measurements. An adjustable sewing mannequin or dress form is used to create form-fitting
                    clothing. If the fabric is expensive, the tailor tries to use every bit of the cloth rectangle in constructing
                    the clothing; perhaps cutting triangular pieces from one corner of the cloth, and adding them elsewhere as
                    gussets. Traditional European patterns for men's shirts and women's chemises take this approach. These remnants
                    can also be reused to make patchwork hats, vests, and skirts. Modern European fashion treats cloth much less
                    conservatively, typically cutting in such a way as to leave various odd-shaped cloth remnants. Industrial sewing
                    operations sell these as waste; home sewers may turn them into quilts. In the thousands of years that humans
                    have been making clothing, they have created an astonishing array of styles, many of which have been
                    reconstructed from surviving garments, photos, paintings, mosaics, etc., as well as from written descriptions.
                    Costume history can inspire current fashion designers, as well as costumiers for plays, films, television, and
                    historical reenactment. Functions A baby wearing many items of winter clothing: headband, cap, fur-lined coat,
                    scarf and sweater Four types of women's clothing which end above the knees: (clockwise from top) minidress,
                    miniskirt, shorts and romper, all worn by the same model The most obvious function of clothing is to protect the
                    wearer from the elements. In hot weather, clothing provides protection from sunburn or wind damage. In the cold,
                    it offers thermal insulation. Shelter can reduce the functional need for clothing. For example, coats, hats,
                    gloves and other outer layers are normally removed when entering a warm place. Similarly, clothing has seasonal
                    and regional aspects so that thinner materials and fewer layers of clothing are generally worn in warmer regions
                    and seasons than in colder ones. Further information: [[: Clothing comfort]] Clothing has been made from a very
                    wide variety of materials, ranging from leather and furs to woven fabrics to elaborate and exotic natural and
                    synthetic fabrics. Not all body coverings are regarded as clothing. Articles carried rather than worn (such as
                    purses), worn on a single part of the body and easily removed (scarves), worn purely for adornment (jewelry), or
                    those that serve a function other than protection (eyeglasses), are normally considered accessories rather than
                    clothing. Clothing protects against many things that might injure or irritate the uncovered human body,
                    including rain, snow, wind, and other weather, as well as from the sun. Garments that are too sheer, thin, small
                    or tight offer less protection. Appropriate clothes can also reduce risk during activities such as work or
                    sport. Some clothing protects from specific hazards, such as insects, noxious chemicals, weather, weapons, and
                    contact with abrasive substances. Humans have devised clothing solutions to environmental or other hazards: such
                    as space suits, air conditioned clothing, armor, diving suits, swimsuits, bee-keeper gear, motorcycle leathers,
                    high-visibility clothing, and other pieces of protective clothing. The distinction between clothing and
                    protective equipment is not always clear-cut, since clothes designed to be fashionable often have protective
                    value and clothes designed for function often consider fashion in their design. The choice of clothes also has
                    social implications. They cover parts of the body that social norms require to be covered, act as a form of
                    adornment, and serve other social purposes. Someone who lacks the means to procure reasonable clothing due to
                    poverty or affordability, or simply lack of inclination, is sometimes said to be scruffy, ragged, or shabby.[9]
                    Clothing performs a range of social and cultural functions, such as individual, occupational and gender
                    differentiation, and social status.[10] In many societies, norms about clothing reflect standards of modesty,
                    religion, gender, and social status. Clothing may also function as adornment and an expression of personal taste
                    or style. Scholarship Function of clothing Serious books on clothing and its functions appear from the 19th
                    century as imperialists dealt with new environments such as India and the tropics.[11] Some scientific research
                    into the multiple functions of clothing in the first half of the 20th century, with publications such as J.C.
                    Flügel's Psychology of Clothes in 1930,[10] and Newburgh's seminal Physiology of Heat Regulation and The Science
                    of Clothing in 1949.[12] By 1968, the field of environmental physiology had advanced and expanded significantly,
                    but the science of clothing in relation to environmental physiology had changed little.[13] There has since been
                    considerable research, and the knowledge base has grown significantly, but the main concepts remain unchanged,
                    and indeed Newburgh's book is still cited by contemporary authors, including those attempting to develop
                    thermoregulatory models of clothing development.[14][further explanation needed] History of clothing Clothing
                    reveals much about human history. According to Professor Kiki Smith of Smith College, garments preserved in
                    collections are resources for study similar to books and paintings.[15] Scholars around the world have studied a
                    wide range of topics, including the history of specific items of clothing [16],[17]clothing styles in different
                    cultural groups[18] and the business of clothing and fashion.[19] The textile curator Linda Baumgarten writes
                    that "clothing provides a remarkable picture of the daily lives, beliefs, expectations, and hopes of those who
                    lived in the past. [20] Clothing presents a number of challenges to historians. Clothing made of textiles or
                    skins are subject to decay, and the erosion of physical integrity can be seen as a loss of cultural
                    information.[21] Costume collections often focus on important pieces of clothing considered unique or otherwise
                    significant, limiting the opportunities scholars have to study everyday clothing.[22]`);
                }
              };
              xhttp.send();
            },
    
            successCallbackForUserDetails: async (userDetailsObject: any) => {
              console.log('Success callback received from conscent login in init', userDetailsObject);
            },
            unauthorizedCallback: () => {
              console.log('unauthorized callback called');
            },
          });
        }
    
        if (screenType === 'subs') {
          csc('subs', {
            debug: true,
            clientId: clientId,
            contentId: storyId,
            title: storyTitle,
            url: window.location.href,
            internalUserId: '',
            defaultEmail:  'a@gmai;.com',
            defaultName:  'something',
            defaultPhone:  '98989898988',
            hiddenElemId:  'hidden-text',
            wrappingElementId: 'embed',
            fullScreenMode: 'true',
            translucencyId: 'text',
            successCallback: async (validationObject: any) => {
              console.log('Success callback received from conscent with a validationObject', validationObject);
    
              console.log('Initiating verification with conscent backend');
              const xhttp = new XMLHttpRequest(); // using vanilla javascript to make a post request (works everywhere)
              const url = `${API_URL}/content/consumption/${validationObject.consumptionId}`;
              xhttp.open('POST', url, true);
              // e is the response event
              xhttp.onload = (e) => {
                // @ts-ignore
                const backendConfirmationData = JSON.parse(e.target.response);
                // verifying that the validation received matches the backend data
                if (
                  validationObject.consumptionId === backendConfirmationData.consumptionId &&
                  validationObject.payload.clientId === backendConfirmationData.payload.clientId &&
                  validationObject.payload.contentId === backendConfirmationData.payload.contentId
                ) {
                  // Validation successful
                  console.log('successful validation');
                  setStoryContent(`
                    Early use Scientists are still debating when people started wearing clothes. Estimates by various experts have
                    ranged from 40,000 to 3 million years ago. Some more recent studies involving the evolution of body lice have
                    implied a more recent development with some indicating a development of around 170,000 years ago and others
                    indicating as little as 40,000. No single estimate is widely accepted.[1][2][3][4] Ralf Kittler, Manfred Kayser
                    and Mark Stoneking, anthropologists at the Max Planck Institute for Evolutionary Anthropology, conducted a
                    genetic analysis of human body lice that suggests clothing originated around 170,000 years ago. Body lice are an
                    indicator of clothes-wearing, since most humans have sparse body hair, and lice thus require human clothing to
                    survive. Their research suggests that the invention of clothing may have coincided with the northward migration
                    of modern Homo sapiens away from the warm climate of Africa, thought to have begun between 50,000 and 100,000
                    years ago. However, a second group of researchers using similar genetic methods estimate that clothing
                    originated around 540,000 years ago.[5] According to archaeologists and anthropologists, the earliest clothing
                    likely consisted of fur, leather, leaves, or grass that were draped, wrapped, or tied around the body. Knowledge
                    of such clothing remains inferential, since clothing materials deteriorate quickly compared to stone, bone,
                    shell and metal artifacts. Archeologists have identified very early sewing needles of bone and ivory from about
                    30,000 BC, found near Kostenki, Russia in 1988.[6] Dyed flax fibers that could have been used in clothing have
                    been found in a prehistoric cave in the Republic of Georgia that date back to 34,000 BC.[7][8] Making clothing
                    See also: Garment industry, knitting, and weaving Sari Hindu Indian lady wearing sari, painting by Raja Ravi
                    Varma. One of the most ancient and popular pieces of clothing in the Indian subcontinent Some human cultures,
                    such as the various peoples of the Arctic Circle, traditionally make their clothing entirely of prepared and
                    decorated furs and skins. Other cultures supplemented or replaced leather and skins with cloth: woven, knitted,
                    or twined from various animal and vegetable fibers including wool, linen, cotton, silk, hemp, and ramie.
                    Although modern consumers may take the production of clothing for granted, making fabric by hand is a tedious
                    and labor-intensive process involving fiber making, spinning, and weaving. The textile industry was the first to
                    be mechanized – with the powered loom – during the Industrial Revolution. Different cultures have evolved
                    various ways of creating clothes out of cloth. One approach simply involves draping the cloth. Many people wore,
                    and still wear, garments consisting of rectangles of cloth wrapped to fit – for example, the dhoti for men and
                    the sari for women in the Indian subcontinent, the Scottish kilt and the Javanese sarong. The clothes may simply
                    be tied up (dhoti and sari); or pins or belts hold the garments in place (kilt and sarong). The cloth remains
                    uncut, and people of various sizes can wear the garment. Another approach involves measuring, cutting, and
                    sewing the cloth by hand or with a sewing machine. Clothing can be cut from a sewing pattern and adjusted by a
                    tailor to the wearer's measurements. An adjustable sewing mannequin or dress form is used to create form-fitting
                    clothing. If the fabric is expensive, the tailor tries to use every bit of the cloth rectangle in constructing
                    the clothing; perhaps cutting triangular pieces from one corner of the cloth, and adding them elsewhere as
                    gussets. Traditional European patterns for men's shirts and women's chemises take this approach. These remnants
                    can also be reused to make patchwork hats, vests, and skirts. Modern European fashion treats cloth much less
                    conservatively, typically cutting in such a way as to leave various odd-shaped cloth remnants. Industrial sewing
                    operations sell these as waste; home sewers may turn them into quilts. In the thousands of years that humans
                    have been making clothing, they have created an astonishing array of styles, many of which have been
                    reconstructed from surviving garments, photos, paintings, mosaics, etc., as well as from written descriptions.
                    Costume history can inspire current fashion designers, as well as costumiers for plays, films, television, and
                    historical reenactment. Functions A baby wearing many items of winter clothing: headband, cap, fur-lined coat,
                    scarf and sweater Four types of women's clothing which end above the knees: (clockwise from top) minidress,
                    miniskirt, shorts and romper, all worn by the same model The most obvious function of clothing is to protect the
                    wearer from the elements. In hot weather, clothing provides protection from sunburn or wind damage. In the cold,
                    it offers thermal insulation. Shelter can reduce the functional need for clothing. For example, coats, hats,
                    gloves and other outer layers are normally removed when entering a warm place. Similarly, clothing has seasonal
                    and regional aspects so that thinner materials and fewer layers of clothing are generally worn in warmer regions
                    and seasons than in colder ones. Further information: [[: Clothing comfort]] Clothing has been made from a very
                    wide variety of materials, ranging from leather and furs to woven fabrics to elaborate and exotic natural and
                    synthetic fabrics. Not all body coverings are regarded as clothing. Articles carried rather than worn (such as
                    purses), worn on a single part of the body and easily removed (scarves), worn purely for adornment (jewelry), or
                    those that serve a function other than protection (eyeglasses), are normally considered accessories rather than
                    clothing. Clothing protects against many things that might injure or irritate the uncovered human body,
                    including rain, snow, wind, and other weather, as well as from the sun. Garments that are too sheer, thin, small
                    or tight offer less protection. Appropriate clothes can also reduce risk during activities such as work or
                    sport. Some clothing protects from specific hazards, such as insects, noxious chemicals, weather, weapons, and
                    contact with abrasive substances. Humans have devised clothing solutions to environmental or other hazards: such
                    as space suits, air conditioned clothing, armor, diving suits, swimsuits, bee-keeper gear, motorcycle leathers,
                    high-visibility clothing, and other pieces of protective clothing. The distinction between clothing and
                    protective equipment is not always clear-cut, since clothes designed to be fashionable often have protective
                    value and clothes designed for function often consider fashion in their design. The choice of clothes also has
                    social implications. They cover parts of the body that social norms require to be covered, act as a form of
                    adornment, and serve other social purposes. Someone who lacks the means to procure reasonable clothing due to
                    poverty or affordability, or simply lack of inclination, is sometimes said to be scruffy, ragged, or shabby.[9]
                    Clothing performs a range of social and cultural functions, such as individual, occupational and gender
                    differentiation, and social status.[10] In many societies, norms about clothing reflect standards of modesty,
                    religion, gender, and social status. Clothing may also function as adornment and an expression of personal taste
                    or style. Scholarship Function of clothing Serious books on clothing and its functions appear from the 19th
                    century as imperialists dealt with new environments such as India and the tropics.[11] Some scientific research
                    into the multiple functions of clothing in the first half of the 20th century, with publications such as J.C.
                    Flügel's Psychology of Clothes in 1930,[10] and Newburgh's seminal Physiology of Heat Regulation and The Science
                    of Clothing in 1949.[12] By 1968, the field of environmental physiology had advanced and expanded significantly,
                    but the science of clothing in relation to environmental physiology had changed little.[13] There has since been
                    considerable research, and the knowledge base has grown significantly, but the main concepts remain unchanged,
                    and indeed Newburgh's book is still cited by contemporary authors, including those attempting to develop
                    thermoregulatory models of clothing development.[14][further explanation needed] History of clothing Clothing
                    reveals much about human history. According to Professor Kiki Smith of Smith College, garments preserved in
                    collections are resources for study similar to books and paintings.[15] Scholars around the world have studied a
                    wide range of topics, including the history of specific items of clothing [16],[17]clothing styles in different
                    cultural groups[18] and the business of clothing and fashion.[19] The textile curator Linda Baumgarten writes
                    that "clothing provides a remarkable picture of the daily lives, beliefs, expectations, and hopes of those who
                    lived in the past. [20] Clothing presents a number of challenges to historians. Clothing made of textiles or
                    skins are subject to decay, and the erosion of physical integrity can be seen as a loss of cultural
                    information.[21] Costume collections often focus on important pieces of clothing considered unique or otherwise
                    significant, limiting the opportunities scholars have to study everyday clothing.[22]`);
                }
              };
              xhttp.send();
            },
            unauthorizedCallback: () => {
              console.log('unauthorized callback called');
            },
          });
        }
    
    
      };
    
    return(
      <>
       <h1 onClick={()=>{initializePaywall()}}>Client 1</h1>
       <p>kfnrvjkdhgjvhfjg jkfrgjkhrgkh</p>
       <div id="embed"  >{storyContent}</div>
       <div id="text">ghjkhkjnklnk jbjj</div>
       </>
       
    )
}
export default One;
