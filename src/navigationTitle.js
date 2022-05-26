export function navigationTitle (props) {
    const { children } = props
    return(
        <div class="sb-sidenav-menu-heading">{children}</div>
    );
}

export function navigationMenu (props) {
    const { children } = props
    return(
        <>
            <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                {children}
        </>
    );
}

export function collapseMenu (props) {
    const{children}=props
    return(
        <a class="nav-link" href="layout-static.html">{children}</a>
    );
}
