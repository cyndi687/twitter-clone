const mainPage=document.querySelector(".mainpage");
const loginPage=document.querySelector(".login-page");
const middleContent=document.querySelector(".middle-content");
const btnTop=document.querySelector(".btn-top");
const newsFeedPage=document.querySelector(".feeds-page");
const loginModel=document.querySelector(".login-model i");
const modelX=document.querySelector(".login-model ");
const loginFormBtn=document.querySelector(".login-form-btn");


const goToLoginPage= () =>{
    mainPage.style.display="none";
    loginPage.style.display="grid";
    
}
middleContent.addEventListener("click" ,(e) =>{
if (e.target.classList[1]==="main-btn")
{
    goToLoginPage();
}

})
btnTop.addEventListener( "click",(e) =>{
    const inputUserInfo=document.querySelector(".user-info");
    const inputPassword=document.querySelector(".password")

    if(inputUserInfo.value!==""&& inputPassword.value!==""){
        mainPage.style.display="none";
        newsFeedPage.style.display="block";
    }
    else{
        goToLoginPage();
        loginModel.style.display="block";
    }
})
modelX.addEventListener(click,()=>{
    loginModel.style.display="none";
})
loginFormBtn.addEventListener("click",()=>{
    const loginUserInfo=document.querySelector(".login-user-info");
    const loginPassword=document.querySelector(".login-password");
    if(loginUserInfo.value!==""&& loginPassword.value!==""){
        loginPage.style.display="none";
        newsFeedPage.style.display="block";
    }
    else{
        loginModel.style,display="block"
    }
});

