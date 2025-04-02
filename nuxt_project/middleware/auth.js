export default defineNuxtRouteMiddleware((to, from) => {
    debugger
    const user = useCookie('user');
    if (!user.value) {
        return navigateTo('/login')
    }
});