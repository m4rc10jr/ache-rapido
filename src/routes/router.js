import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from '@/components/pages/login/Login.vue';

import Homepage from '@/components/pages/homepage/Homepage.vue';

import Users from '@/components/pages/usuarios/Users.vue';

import ClienteSearch from '@/components/pages/clientes/Cliente.Search.vue';
import ClienteAdd from '@/components/pages/clientes/Cliente.Add.vue';
import ClienteEdit from '@/components/pages/clientes/Cliente.Edit.vue';

import ContratoSearch from '@/components/pages/contratos/Contrato.Search.vue';
import ContratoAdd from '@/components/pages/contratos/Contrato.Add.vue';
import ContratoEdit from '@/components/pages/contratos/Contrato.Edit.vue';

import ParcelaSearch from '@/components/pages/parcelas/Parcela.Search.vue';
import ParcelaAdd from '@/components/pages/parcelas/Parcela.Add.vue';
import ParcelaEdit from '@/components/pages/parcelas/Parcela.Edit.vue';

import RecebimentoSearch from '@/components/pages/recebimentos/Recebimento.Search.vue';
import RecebimentoAdd from '@/components/pages/recebimentos/Recebimento.Add.vue';
import RecebimentoEdit from '@/components/pages/recebimentos/Recebimento.Edit.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { 
            path: '/login',
            component: Login
        },
        { 
            path: '/',
            redirect: '/homepage',
        },
        { 
            path: '/homepage',
            component: Homepage
        },
        { 
            path: '/usuarios',
            component: Users
        },
        { 
            path: '/clientes',
            component: ClienteSearch
        },
        { 
            path: '/clientes/cadastrar',
            component: ClienteAdd
        },
        { 
            path: '/clientes/editar/:id',
            component: ClienteEdit
        },
        { 
            path: '/contratos',
            component: ContratoSearch
        },
        { 
            path: '/cliente/:id/contrato/cadastrar',
            component: ContratoAdd
        },
        { 
            path: '/contratos/editar/:id',
            component: ContratoEdit
        },
        { 
            path: '/contrato/:id/parcela/cadastrar',
            component: ParcelaAdd
        },
        { 
            path: '/parcelas',
            component: ParcelaSearch
        },
        { 
            path: '/parcelas/editar/:id',
            component: ParcelaEdit
        },
        { 
            path: '/recebimentos/',
            component: RecebimentoSearch
        },
        { 
            path: '/parcela/:id/recebimento/cadastrar',
            component: RecebimentoAdd
        },
        { 
            path: '/recebimentos/editar/:id',
            component: RecebimentoEdit
        },
    ],
    mode: 'history'
});

export default router;