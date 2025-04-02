export default defineNuxtRouteMiddleware((to, from) => {
    const user = useCookie('user');

    if (user.value.role !== 'admin') {
        return showError({
            statusCode: 403,
            message: 'Требуется авторизация',
        });
    }
});