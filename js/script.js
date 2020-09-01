window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    console.log("henlo");
    
    var tab = document.querySelectorAll('.info-header-tab'),
        tabContent=document.querySelectorAll('.info-tabcontent'),
        info=document.querySelector('.info-header');

    function hideTabContent(a){
        for(var i=a;i<tabContent.length;i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1);

    function showTabContent(b){
        if(tabContent[b].classList.contains('hide')){
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
            
        }
    }
    info.addEventListener('click', function(event){
        var target= event.target;
        if(target && target.classList.contains('info-header-tab')){
            for(var i=0;i<tab.length;i++){
                if(target==tab[i]){
                    hideTabContent(0);
                    showTabContent(i);
                    break;

                }
            } 
        }

    });
        //timer
        var deadline = '2020-09-02';

        function getTimeRemaining(endTime){
            var t= Date.parse(endTime)-Date.parse(new Date()),
                seconds=Math.floor((t/1000)%60),
                minutes=Math.floor((t/1000/60)%60),
                hours=Math.floor(t/(1000*60*60));
    
            return{
                'total':t,
                'hours':hours,
                'minutes': minutes,
                'seconds': seconds
            };
        }
        function setCLock(id, endTime){
            var timer=document.getElementById(id),
                hours=timer.querySelector('.hours'),
                minutes=timer.querySelector('.minutes'),
                seconds=timer.querySelector('.seconds'),
                timeInterval=setInterval(updateClock,1000);
    
            function updateClock(){
                var t=getTimeRemaining(endTime);
                hours.textContent= addZero(t.hours);
                minutes.textContent=addZero(t.minutes);
                seconds.textContent=addZero(t.seconds);

                if(t.total<=0){
                    clearInterval(timeInterval);
                }
            }
            function addZero(num){
                if (num <= 9) {
                    num = '0' + num;
                }
                
                return num;
            }
        }
        setCLock('timer', deadline);
});