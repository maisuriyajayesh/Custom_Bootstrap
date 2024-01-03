import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-header-inside',
  templateUrl: './header-inside.component.html',
  styleUrls: ['./header-inside.component.scss']
})
export class HeaderInsideComponent implements OnInit {
  public title: string = '';  // Make the title public
  public isHeaderVisible: boolean = true;  // Add a flag to control visibility
  public showLogoutButton: boolean = false;
  public showBackToDashboardButton: boolean = true;
  constructor(
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private router: Router,
  ) { }
  private setPageTitle(): void {
    const defaultPageTitle = 'Page Not Found';
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.getPageTitle())
    ).subscribe((newTitle: string) => this.updatePageTitle(newTitle));
  }
  private getPageTitle(): string {
    const defaultPageTitle = 'Page Not Found';
    let child = this.activatedRoute.firstChild;
  
    if (!child) {
      return this.activatedRoute.snapshot.data['title'] || defaultPageTitle;
    }
    while (child.firstChild) {
      child = child.firstChild;
    }
    const routePath = child.snapshot.routeConfig?.path;
    this.updateVisibilityFlags(routePath);
    if (this.isHeaderVisible && child.snapshot.data['title']) {
      return child.snapshot.data['title'];
    }
    return defaultPageTitle;
  }
  private updateVisibilityFlags(routePath: string | undefined): void {
    this.isHeaderVisible = !['login', 'signup'].includes(routePath ?? '');
    this.showLogoutButton = routePath === 'dashboard';
    this.showBackToDashboardButton = !['dashboard'].includes(routePath ?? '');
  }
  private updatePageTitle(newTitle: string): void {
    this.title = newTitle;
    this.titleService.setTitle(newTitle);
  }
  ngOnInit(): void {
    this.setPageTitle();
  }
}
