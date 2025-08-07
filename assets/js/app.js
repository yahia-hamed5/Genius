let currentIndex=0;
function renderQuestion() {
    const allQuestions =[
        {q:'مهــــــــارات',a:'نعمل على تطوير مهارات طفلك الشخصية والعلمية...',img:"1",icon:'1'},
        {q:'مهــــــــارات',a:'نعمل على تطوير مهارات طفلك الشخصية والعلمية...',img:"2",icon:'2'},
        {q:'مهــــــــارات',a:'نعمل على تطوير مهارات طفلك الشخصية والعلمية...',img:"3",icon:'3'},
        {q:'مهــــــــارات',a:'نعمل على تطوير مهارات طفلك الشخصية والعلمية...',img:"4",icon:'4'}
    ];
    let questions = document.querySelector(".all");
    questions.innerHTML = "";
    allQuestions.forEach((question,index) => {
        questions.innerHTML +=`
            <div class="qustion transition-all duration-300 flex flex-col pb-[24px] gap-[27px] bg-[#000000] ${index === 0 ?'h-[186px]' : 'h-[71.5px]'} overflow-hidden bg-[#F4A90540] rounded-[10px] " onclick="toggle(${index},'${question.img}')">
                <div class="w-full flex items-center gap-[14px] bg-[#F5A805] py-[17px] pr-[19px] rounded-[10px]">
                  <div class="icone w-[30px] h-[30px]">
                    <img src="./assets/images/icons/${question.icon}.svg" class="w-full h-full object-cover" alt="" />
                  </div>
                  <p class="text-[25px] font-700 text-[#FFFFFF]">${question.q}</p>
                </div>
                <p class="pl-[158px] pr-[19px]">${question.a}</p>
            </div>
        `;
    });
}

function showQustion(index,image) {
    const questions=document.querySelectorAll(".qustion")
    const immg=document.querySelector(".img")
    questions.forEach((el,i)=>{
        el.classList.replace("h-[186px]","h-[71.5px]");
        if (i === index) {
            immg.innerHTML = ''
            immg.innerHTML = `
            <img src="./assets/images/change/${image}.png" alt="">
            `
            el.classList.replace("h-[71.5px]","h-[186px]");
        }
    });
    currentIndex = index;
    updateButtons(); // تحديث حالة الأزرار
}

function toggle(index,img) {
    showQustion(index,img);
}

function updateButtons() {
    const count=document.querySelectorAll(".qustion").length;
    const right = document.querySelector(".right");
    const left = document.querySelector(".left");
    
    // تحكم في اليمين
    if (currentIndex >= count - 1) {
        right.classList.add("opacity-50","pointer-events-none");
    } else {
        right.classList.remove("opacity-50","pointer-events-none");
    }
    
    // تحكم في اليسار
    if (currentIndex <= 0) {
        left.classList.add("opacity-50","pointer-events-none");
    } else {
        left.classList.remove("opacity-50","pointer-events-none");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    renderQuestion();
    updateButtons();
showQustion(currentIndex, "1"); // عرض السؤال الأول بشكل افتراضي
    document.querySelector(".right").addEventListener("click",()=>{
        const count=document.querySelectorAll(".qustion").length;
        if (currentIndex < count - 1) {
            currentIndex++;طب 
            showQustion(currentIndex);
        }
    });

    document.querySelector(".left").addEventListener("click",()=>{
        if (currentIndex > 0) {
            currentIndex--;
            showQustion(currentIndex);
        }
    });
});
