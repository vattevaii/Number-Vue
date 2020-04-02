
Vue.component('game',{
    template:`
    <div class="center-box">
        <div class="header">
            <h1 class="h1">Number Game</h1>
        </div>
        <div class="content">
            <div class="question">
                3 + 1 = __
            </div>
            <div class="check-answers">
                <div> 6 </div>
                <div> 4 </div>
                <div> 3 </div>
                <div> 5 </div>
            </div>
        </div>
        <a href="" class="next"><div>=>Next</div></a>
    </div>
    `
});

new Vue({
    el:"#game",
    computed:{

    }
});
