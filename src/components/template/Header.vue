<template>
    <div>
        <div>
        <b-navbar class="shadow-sm p-3 mb-2 bg-white">
            <b-navbar-nav>
                <b-nav-item>
                    <router-link to ="/homepage"> 
                        <b-icon id="icon-nav" icon="house-fill"></b-icon> <a tabindex="1"> Homepage </a>
                    </router-link>
                </b-nav-item>
                <b-nav-item>
                    <router-link to ="/clientes"> 
                        <b-icon id="icon-nav" icon="person-circle"></b-icon> <a tabindex="1"> Clientes </a> 
                    </router-link>
                </b-nav-item>
                <b-nav-item> 
                    <router-link to ="/contratos">
                        <b-icon id="icon-nav" icon="briefcase-fill"></b-icon> <a tabindex="1"> Contratos </a> 
                    </router-link>
                </b-nav-item>
                <b-nav-item>
                    <router-link to ="/parcelas"> 
                        <b-icon id="icon-nav" icon="calendar3-week-fill"></b-icon> <a tabindex="1"> Parcelas </a> 
                    </router-link>
                </b-nav-item>
                <b-nav-item>
                    <router-link to ="/recebimentos"> 
                        <b-icon id="icon-nav" icon="cash-stack"></b-icon> <a tabindex="1"> Recebimentos </a> 
                    </router-link>
                </b-nav-item>
            </b-navbar-nav>
            <b-navbar-nav>
                <b-nav-item-dropdown id="config-item-nav">
                    <!-- Using 'button-content' slot -->
                    <template #button-content>
                        Configurações
                    </template>
                    <b-dropdown-item href="http://localhost:8080/usuarios">Usuários</b-dropdown-item>
                    <b-dropdown-item href="http://localhost:8080/login">Sair</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-navbar>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data(){
        return{
            menuActive: false
       
            }
    },
    methods:{

    }
}
</script>

<style scoped>

    #logo{
        width: 40px;
    }

    li a {
    text-decoration: none;
    color: inherit;
    font-weight: bold;
    }

    #icon-nav{
        color: var(--color-background-buttons);
    }

    li a:active {
        color: var(--color-background-buttons);
    }

    li a[tabindex]:focus {
        color: var(--color-background-buttons);
        outline: none;
    }

    #config-item-nav{
        right: 50px;
        position: absolute;
        top: 50%;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
    }

</style>
