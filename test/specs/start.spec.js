describe('Menu forms', () => {
    it('acessar o menu forms', async () => {
        await $('~Forms').click()
        await $('~text-input').setValue('exercicio m16')
        expect(await $('~text-input')).toBeDisplayed()
    });

    
});