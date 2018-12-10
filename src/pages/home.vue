<template>
    <div>
        <header>
            <ul class="clearfix">
                <li>推荐</li>
                <li>行业</li>
                <li>视频</li>
                <li>趣闻</li>
                <li>游戏</li>
                <li>公告</li>
            </ul>
        </header>
        <div class="container">
            <div class="newlist">
                <p class="new-title">狮大大和一休PK赖哥叛变到一休直播间狂刷，真是情义无价！</p>
                <div class="img-list">
                    <ul>
                        <li><img :src="img1"></li>
                        <li><img :src="img1"></li>
                        <li><img :src="img1"></li>
                    </ul>  
                </div>
                <div class="new-desc">
                    <span>巷子里吃火锅</span>
                    <span>154阅读</span>
                    <span>2分钟前</span>
                </div>
            </div>
        </div>
        <footer></footer>
    </div>
</template>

<script>
    import img1 from '@/assets/img1.jpg'
    import img2 from '@/assets/img1.jpg'
    import img3 from '@/assets/img1.jpg'
    export default {
        data() {
            return {
                img1,
                img2,
                img3
            }
        }
    }
</script>
<style>
    header{
        height: 1.173rem;
        line-height: 1.173rem;
        border-bottom: .013333rem solid #E6E6E6;
    }
    header ul {
        display: flex;
        justify-content: space-around;
        font-size: .426667rem;
    }
    header ul li{
        
        
    }
    .container {
        width: 90%;
        margin: 0 auto;
    }
    .newlist{
        padding: .533333rem 0;
        border-bottom: 1px solid #E6E6E6;
    }
    .newlist .new-title{
        font-size: .48rem;
    }
    .img-list ul {
        display: flex;
        justify-content: space-between;
        padding: .2rem 0;
    }
    .img-list img{
        display: block;
        width: 3.013333rem;
    }
    .new-desc {
        font-size: .16rem;
    }
</style>