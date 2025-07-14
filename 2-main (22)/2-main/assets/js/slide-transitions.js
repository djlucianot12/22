document.addEventListener('DOMContentLoaded', () => {
    barba.init({
        transitions: [{
            name: 'project-transition',
            leave(data) {
                return gsap.to(data.current.container, {
                    opacity: 0
                });
            },
            enter(data) {
                return gsap.from(data.next.container, {
                    opacity: 0
                });
            }
        }],
        views: [{
            namespace: 'home',
            beforeEnter(data) {
                // do something before the new page is loaded
            }
        }, {
            namespace: 'project',
            beforeEnter(data) {
                // do something before the new page is loaded
            }
        }]
    });
});
