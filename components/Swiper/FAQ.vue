<template>
  <section class="faq slide">
    <p class="faq__title">FAQ</p>
    <div class="faq__accordions">
      <UIAccordion header="Чем я могу помочь в роли тестировщика?">
        Во время тестирования проекта, достаточно просто пользоваться всем
        функционалом сайта. Делай, что тебе угодно и при нахождении багов
        или ошибок сообщай нам, мы будем очень признательны! А если у тебя
        есть опыт в тестировании проектов, то это ещё лучше!
      </UIAccordion>
      <UIAccordion
        disabled
        header="Что ещё я получу за тестирование проекта?"
      />
      <UIAccordion disabled header="Могу ли я помочь в разработке проекта?" />
    </div>
  </section>
</template>
<style lang="scss" scoped>
.faq {
  display: flex;
  flex-direction: column;
  gap: 35px;
  justify-content: center;
  align-items: flex-start;

  &__title {
    font-size: 46px;
  }

  &__accordions {
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 25px;
  }
}
</style>
