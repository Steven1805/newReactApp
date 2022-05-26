import './App.css';
import { headTable, tableElements, renderPerson, renderTable } from './bigTable';
import { Footer } from './Footer';
import { FirstCard } from './Firstcard';
import {navigationTitle, navigationMenu, collapseMenu } from './navigationTitle';


function App() {
 
  return (
    <>
    <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            
            <a class="navbar-brand ps-3" href="index.html">Start Bootstrap</a>
           
            <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i class="fas fa-bars"></i></button>
            
            <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                <div class="input-group">
                    <input class="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                    <button class="btn btn-primary" id="btnNavbarSearch" type="button"><i class="fas fa-search"></i></button>
                </div>
            </form>
           
            <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#!">Settings</a></li>
                        <li><a class="dropdown-item" href="#!">Activity Log</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#!">Logout</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
        <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div class="sb-sidenav-menu">
                        <div class="nav">
                            <navigationTitle>
                                Core
                            </navigationTitle>
                                <a class="nav-link" href="index.html">
                                    <navigationMenu>Dashboard</navigationMenu>
                                </a>
                            <navigationTitle>
                                Interface
                            </navigationTitle>
                                <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                    <navigationMenu>
                                        Layouts
                                     </navigationMenu>
                                </a>
                                    <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                        <nav class="sb-sidenav-menu-nested nav">
                                            <collapseMenu>
                                                Static Navigation
                                            </collapseMenu>
                                            <collapseMenu>
                                                Light Sidenav
                                            </collapseMenu>
                                        </nav>
                                    </div>
                                <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                    <navigationMenu>
                                        Pages
                                    </navigationMenu>
                                </a>
                                    <div class="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                                        <nav class="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                                    <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                                      Authentication
                                                        <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                                    </a>
                                            <div class="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                                <nav class="sb-sidenav-menu-nested nav">
                                                    <collapseMenu>Log in</collapseMenu>
                                                    <collapseMenu>Register</collapseMenu>
                                                    <collapseMenu>Forgot password</collapseMenu>
                                                </nav>
                                            </div>
                                                    <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                                        Error
                                                        <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                                    </a>
                                            <div class="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                                <nav class="sb-sidenav-menu-nested nav">
                                                    <collapseMenu>401 Page</collapseMenu>
                                                    <collapseMenu>404 Page</collapseMenu>
                                                    <collapseMenu>500 Page</collapseMenu>
                                                </nav>
                                            </div>
                                        </nav>
                            </div>
                            <navigationTitle>
                                Addons
                            </navigationTitle>
                                <a class="nav-link" href="index.html">
                                    <navigationMenu>
                                        Charts
                                    </navigationMenu>
                                </a>
                                <a class="nav-link" href="index.html">
                                    <navigationMenu>
                                        Tables
                                    </navigationMenu>
                                </a>
                        </div>
                    </div>
                    <div class="sb-sidenav-footer">
                        <div class="small">Logged in as:</div>
                        Start Bootstrap
                    </div>
                </nav>
            </div>
            <div id="layoutSidenav_content">
                <main>
                    <div class="container-fluid px-4">
                        <h1 class="mt-4">Tables</h1>
                        <ol class="breadcrumb mb-4">
                            <li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                            <li class="breadcrumb-item active">Tables</li>
                        </ol>
                        <FirstCard></FirstCard>
                        <div class="card mb-4">
                            <div class="card-header">
                                <i class="fas fa-table me-1"></i>
                                DataTable Example
                            </div>
                            <div class="card-body">
                                <table id="datatablesSimple" class="table table-bordered">
                                    <thead>
                                        {headTable.map(renderTable)}
                                    </thead>
                                    <tfoot>
                                        {headTable.map(renderTable)}
                                    </tfoot>
                                    <tbody>
                                        {tableElements.map(renderPerson)}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>
                 <Footer></Footer>
            </div>
        </div>
    </>
  );
}

export default App;
