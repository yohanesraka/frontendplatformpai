import MainLayout from '@/layout/Admin/MainLayout.vue';
import MainLayoutPemateri from '@/layout/Pemateri/MainLayout.vue';

import EmptyResult from '@/components/EmptyResult.vue';

import DataTable from '@/components/DataTable.vue';
import Badge from '@/components/BadgeComp.vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseCheckbox from '@/components/Inputs/BaseCheckbox.vue';
import BaseDropdown from '@/components/BaseDropdown.vue';
import BaseHeader from '@/components/BaseHeader.vue';
import BaseInput from '@/components/Inputs/BaseInput.vue';
import BaseNav from '@/components/Navbar/BaseNav.vue';
import BasePagination from '@/components/BasePagination.vue';
import BaseProgress from '@/components/BaseProgress.vue';
import BaseRadio from '@/components/Inputs/BaseRadio.vue';
import BaseSwitch from '@/components/BaseSwitch.vue';
import Card from '@/components/Cards/Card.vue';
import StatsCard from '@/components/Cards/StatsCard.vue';

const GlobalComponents = {
  install(app) {
    app.component('MainLayout', MainLayout);
    app.component('MainLayoutPemateri', MainLayoutPemateri);
    app.component('EmptyResult', EmptyResult);
    app.component('DataTable', DataTable);
    app.component('BadgeComp', Badge);
    app.component('BaseButton', BaseButton);
    app.component('BaseCheckbox', BaseCheckbox);
    app.component('BaseDropdown', BaseDropdown);
    app.component('BaseInput', BaseInput);
    app.component('BaseNav', BaseNav);
    app.component('BaseHeader', BaseHeader);
    app.component('BasePagination', BasePagination);
    app.component('BaseProgress', BaseProgress);
    app.component('BaseRadio', BaseRadio);
    app.component('BaseSwitch', BaseSwitch);
    app.component('CardComp', Card);
    app.component('StatsCard', StatsCard);
  },
};

export default GlobalComponents;
