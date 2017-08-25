<template>
    <div class="read">
        <div id="prev" @click="leftClick" class="arrow">‹</div>
        <div id="area"></div>
        <div id="next" @click="rightClick" class="arrow">›</div>
    </div>
</template>
<script>
export default {
    props: ['id'],
    data() {
        return {
            css: `<style type="text/css">body { margin: 10px; font-size: 1.1em; } p { text-indent: 2em; line-height: 1.5em; margin-top: 0; margin-bottom: 0; } .catalog { margin: 1pt; padding: 0; text-indent: 2em; } h1 { text-align: right; margin-right: 2em; page-break-before: always; font-size: 1.6em; font-weight: bold; } h2 { display: block; font-size: 1.2em; font-weight: bold; margin-bottom: 0.83em; margin-left: 0; margin-right: 0; margin-top: 1em; page-break-before: always; } .mbppagebreak { display: block; margin-bottom: 0; margin-left: 0; margin-right: 0; margin-top: 0; page-break-after: always; } a { color: inherit; text-decoration: inherit; cursor: default } a[href] { color: blue; text-decoration: underline; cursor: pointer; } .italic { font-style: italic; }</style>`,
            count: 0,
            address: this.$route.query.address



        }
    },
    computed: {
        bookinfo() {
            return this.$store.state.bookinfo;
        }
    },
    mounted() {
        var id = this.$route.query.id;
        $.get(`/users/content?address=${this.address}&id=${id}`, res => {
            $('#area').html(`${res}${this.css}`)
        })
    },
    methods: {
        leftClick() {
            if (this.count > 0) {
                $.get(`/users/content?address=${this.address}&id=${this.bookinfo.bookList[--this.count].id}`, res => {
                    $('#area').html(`${res}${this.css}`)
                })
            }
        },
        rightClick() {
            console.log(this.bookinfo)

            if (this.count < this.bookinfo.bookList.length-1) {
                var id = this.bookinfo.bookList[++this.count].id;
                $.get(`/users/content?address=${this.address}&id=${id}`, res => {
                    $('#area').html(`${res}${this.css}`)
                })
            }
        }
    }
}

</script>
<style lang="less" scoped>
#main {
    position: absolute;
    width: 100%;
    height: 100%;
}

#area {
    width: 80%;
    height: 80%;
    margin: 5% auto;
    max-width: 1250px;
}
@media (max-width: 1000px) {
    #area{
        font-size: 40px;
    }
}

#area iframe {
    border: none;
}

#prev {
    left: 40px;
}

#next {
    right: 40px;
}

.arrow {
    position: fixed;
    top: 50%;
    margin-top: -32px;
    font-size: 64px;
    color: #E2E2E2;
    font-family: arial, sans-serif;
    font-weight: bold;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
}

.arrow:hover {
    color: #777;
}

.arrow:active {
    color: #000;
}

#loader {
    position: absolute;
    z-index: 10;
    left: 50%;
    top: 50%;
    margin: -33px 0 0 -33px;
}

#toc {
    position: absolute;
    top: 0;
    left: 0;
}

</style>
