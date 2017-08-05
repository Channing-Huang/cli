<template>
    <div>
        <!-- <yd-button size="large" type="primary" @click.native="show1 = true">打开</yd-button> -->

        <yd-keyboard v-model="show1" :input-done="done1" ref="keyboardDemo1" :title="''"></yd-keyboard>
    </div>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                show1: true
            }
        },
        methods: {
            done1(val) {
                console.log('输入的密码是：' + val);
                this.$dialog.loading.open('验证支付密码');

                /* 模拟异步验证密码 */
                setTimeout(() => {
                    this.$refs.keyboardDemo1.$emit('ydui.keyboard.error', '对不起，您的支付密码不正确，请重新输入。');
                    this.$dialog.loading.close();
                }, 2000);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .keyboard-title{
        display: none; 
    }
</style>