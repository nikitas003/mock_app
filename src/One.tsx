import React, { useEffect } from 'react';
// import {useParams} from 'react-router-dom';
// import { useState } from 'react';



const One = () => {
  const screenType='subsj';
  // const [storyContent,setStoryContent]=useState("");
  const API_URL='https://stage.tsbdev.co/api/v1';
  const clientId="5f92a62013332e0f667794dc";
  const storyId="Client-Story-Id-4"
  // let value = true;

    const initializePaywall =  async() => {
      console.log('---------------------------------')
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
              const url = 'https://stage.tsbdev.co/api/v1/content?clientContentId=Client-Story-Id-1&clientId=5f92a62013332e0f667794dc&userDateTime=2022-07-20T12:45:03.136Z';
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

 
      // useEffect(()=>{
      //   // initializePaywall()
      //   setTimeout(() => {
      //   initializePaywall()
      // }, 10000);
      // },[])

      useEffect(()=>{

        // setTimeout(()=>{
        //   initializePaywall()
        // },10000)
        initializePaywall()
       
      })
      
    
    return(
      <>
       <h1  >Client 1</h1>
       <p>mumbo jumbo mumbo jumbo mumbo jumbo mumbo jumbo mumbo jumbo mumbo jumbo mumbo jumbo 
       mumbo jumbo mumbo jumbo mumbo jumbo mumbo jumbo mumbo jumbo mumbo jumbo 
       </p>
       <div id="embed"  ></div>
       
       <div id="text">jhvuyl</div>
       </>
       
    )
}
export default One;
