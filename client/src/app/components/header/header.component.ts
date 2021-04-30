import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
    
  categories = [
    { name: 'Development', url: 'https://www.udemy.com/courses/development/', subs: [
      { name: 'All Development', url: 'https://www.udemy.com/courses/development/', subs: [
        { name: 'A11', url: 'a11' },
        { name: 'A12', url: 'a12' },
      ] },
      { name: 'Web Development', url: 'https://www.udemy.com/courses/development/web-development/', subs: [
        { name: 'A21', url: 'a21' },
        { name: 'A22', url: 'a22' },
      ] },
      { name: 'Data Science', url: 'https://www.udemy.com/courses/development/data-science/', subs: [
        { name: 'A31', url: 'a31' },
        { name: 'A32', url: 'a32' },
      ] },
      { name: 'Mobile Development', url: 'https://www.udemy.com/courses/development/mobile-apps/', subs: [
        { name: 'A31', url: 'a31' },
        { name: 'A32', url: 'a32' },
      ] },
      { name: 'Programming Languages', url: 'https://www.udemy.com/courses/development/programming-languages/', subs: [
        { name: 'A31', url: 'a31' },
        { name: 'A32', url: 'a32' },
      ] },
      { name: 'Game Development', url: 'https://www.udemy.com/courses/development/game-development/', subs: [
        { name: 'A31', url: 'a31' },
        { name: 'A32', url: 'a32' },
      ] },
      { name: 'Database Design & Development', url: 'https://www.udemy.com/courses/development/databases/', subs: [
        { name: 'A31', url: 'a31' },
        { name: 'A32', url: 'a32' },
      ] },
      { name: 'Software Testing', url: 'https://www.udemy.com/courses/development/software-testing/', subs: [
        { name: 'A31', url: 'a31' },
        { name: 'A32', url: 'a32' },
      ] },
      { name: 'Software Engineering', url: 'https://www.udemy.com/courses/development/software-engineering/', subs: [
        { name: 'A31', url: 'a31' },
        { name: 'A32', url: 'a32' },
      ] },
      { name: 'Development Tools', url: 'https://www.udemy.com/courses/development/development-tools/', subs: [
        { name: 'A31', url: 'a31' },
        { name: 'A32', url: 'a32' },
      ] },
      { name: 'No-Code Development', url: 'https://www.udemy.com/courses/development/no-code-development/', subs: [
        { name: 'A31', url: 'a31' },
        { name: 'A32', url: 'a32' },
      ] },
    ] },
    { name: 'Business', url: 'https://www.udemy.com/courses/business/', subs: [
      { name: 'All Business', url: 'https://www.udemy.com/courses/business/', subs: [
        { name: 'B11', url: 'b11' },
        { name: 'B12', url: 'b12' },
      ] },
      { name: 'Entrepreneurship', url: 'https://www.udemy.com/courses/business/entrepreneurship/', subs: [
        { name: 'B21', url: 'b21' },
      ] },
      { name: 'Communications', url: 'https://www.udemy.com/courses/business/communications/', subs: [
        { name: 'B21', url: 'b21' },
      ] },
      { name: 'Management', url: 'https://www.udemy.com/courses/business/management/', subs: [
        { name: 'B21', url: 'b21' },
      ] },
      { name: 'Sales', url: 'https://www.udemy.com/courses/business/sales/', subs: [
        { name: 'B21', url: 'b21' },
      ] },
      { name: 'Business Strategy', url: 'https://www.udemy.com/courses/business/strategy/', subs: [
        { name: 'B21', url: 'b21' },
      ] },
      { name: 'Operations', url: 'https://www.udemy.com/courses/business/operations/', subs: [
        { name: 'B21', url: 'b21' },
      ] },
      { name: 'Project Management', url: 'https://www.udemy.com/courses/business/project-management/', subs: [
        { name: 'B21', url: 'b21' },
      ] },
      { name: 'Business Law', url: 'https://www.udemy.com/courses/business/business-law/', subs: [
        { name: 'B21', url: 'b21' },
      ] },
      { name: 'Business Analytics & Intelligence', url: 'https://www.udemy.com/courses/business/analytics-and-intelligence/', subs: [
        { name: 'B21', url: 'b21' },
      ] },
      { name: 'Human Resources', url: 'https://www.udemy.com/courses/business/human-resources/', subs: [
        { name: 'B21', url: 'b21' },
      ] },
      { name: 'Industry', url: 'https://www.udemy.com/courses/business/industry/', subs: [
        { name: 'B21', url: 'b21' },
      ] },
      { name: 'E-Commerce', url: 'https://www.udemy.com/courses/business/e-commerce/', subs: [
        { name: 'B21', url: 'b21' },
      ] },
      { name: 'Media', url: 'https://www.udemy.com/courses/business/media/', subs: [
        { name: 'B21', url: 'b21' },
      ] },
      { name: 'Real Estate', url: 'https://www.udemy.com/courses/business/real-estate/', subs: [
        { name: 'B21', url: 'b21' },
      ] },
      { name: 'Other Business', url: 'https://www.udemy.com/courses/business/other-business/', subs: [
        { name: 'B21', url: 'b21' },
      ] },
    ] },
    { name: 'Finance & Accounting', url: 'https://www.udemy.com/courses/finance-and-accounting/', subs: [
      { name: 'All Finance & Accounting', url: 'https://www.udemy.com/courses/finance-and-accounting/', subs: [
        { name: 'C11', url: 'c11' },
        { name: 'C12', url: 'c12' },
      ] },
      { name: 'Accounting & Bookkeeping', url: 'https://www.udemy.com/courses/finance-and-accounting/accounting-bookkeeping/', subs: [
        { name: 'C11', url: 'c11' },
        { name: 'C12', url: 'c12' },
      ] },
      { name: 'Compliance', url: 'https://www.udemy.com/courses/finance-and-accounting/compliance/', subs: [
        { name: 'C11', url: 'c11' },
        { name: 'C12', url: 'c12' },
      ] },
      { name: 'Cryptocurrency & Blockchain', url: 'https://www.udemy.com/courses/finance-and-accounting/cryptocurrency-and-blockchain/', subs: [
        { name: 'C11', url: 'c11' },
        { name: 'C12', url: 'c12' },
      ] },
      { name: 'Economics', url: 'https://www.udemy.com/courses/finance-and-accounting/economics/', subs: [
        { name: 'C11', url: 'c11' },
        { name: 'C12', url: 'c12' },
      ] },
      { name: 'Finance', url: 'https://www.udemy.com/courses/finance-and-accounting/finance-management/', subs: [
        { name: 'C11', url: 'c11' },
        { name: 'C12', url: 'c12' },
      ] },
      { name: 'Finance Cert & Exam Prep', url: 'https://www.udemy.com/courses/finance-and-accounting/finance-certification-and-exam-prep/', subs: [
        { name: 'C11', url: 'c11' },
        { name: 'C12', url: 'c12' },
      ] },
      { name: 'Financial Modeling & Analysis', url: 'https://www.udemy.com/courses/finance-and-accounting/financial-modeling-and-analysis/', subs: [
        { name: 'C11', url: 'c11' },
        { name: 'C12', url: 'c12' },
      ] },
      { name: 'Investing & Trading', url: 'https://www.udemy.com/courses/finance-and-accounting/investing-and-trading/', subs: [
        { name: 'C11', url: 'c11' },
        { name: 'C12', url: 'c12' },
      ] },
      { name: 'Money Management Tools', url: 'https://www.udemy.com/courses/finance-and-accounting/money-management-tools/', subs: [
        { name: 'C11', url: 'c11' },
        { name: 'C12', url: 'c12' },
      ] },
      { name: 'Taxes', url: 'https://www.udemy.com/courses/finance-and-accounting/taxes/', subs: [
        { name: 'C11', url: 'c11' },
        { name: 'C12', url: 'c12' },
      ] },
      { name: 'Other Finance & Accounting', url: 'https://www.udemy.com/courses/finance-and-accounting/other-finance-and-accounting/', subs: [
        { name: 'C11', url: 'c11' },
        { name: 'C12', url: 'c12' },
      ] },
    ] },
    { name: 'IT & Software', url: 'https://www.udemy.com/courses/it-and-software/', subs: [
      { name: 'All IT & Software', url: 'https://www.udemy.com/courses/it-and-software/', subs: [
        { name: 'C11', url: 'c11' },
        { name: 'C12', url: 'c12' },
      ] },
      { name: 'IT Certification', url: 'https://www.udemy.com/courses/it-and-software/it-certification/', subs: [
        { name: 'C21', url: 'c21' },
        { name: 'C22', url: 'c22' },
      ] },
      { name: 'Network & Security', url: 'https://www.udemy.com/courses/it-and-software/network-and-security/', subs: [
        { name: 'C31', url: 'c31' },
        { name: 'C32', url: 'c32' },
      ] },
      { name: 'Hardware', url: 'https://www.udemy.com/courses/it-and-software/hardware/', subs: [
        { name: 'C41', url: 'c41' },
        { name: 'C42', url: 'c42' },
      ] },
      { name: 'Operating Systems', url: 'https://www.udemy.com/courses/it-and-software/operating-systems/', subs: [
        { name: 'C41', url: 'c41' },
        { name: 'C42', url: 'c42' },
      ] },
      { name: 'Other IT & Software', url: 'https://www.udemy.com/courses/it-and-software/other-it-and-software/', subs: [
        { name: 'C41', url: 'c41' },
        { name: 'C42', url: 'c42' },
      ] },
    ] },
    { name: 'Office Productivity', url: 'https://www.udemy.com/courses/office-productivity/', subs: [
      { name: 'All Office Productivity', link: 'd1', subs: [
        { name: 'D12', link: 'd12' },
      ] },
      { name: 'D2', link: 'd2', subs: [
        { name: 'D21', link: 'd21' },
      ] },
    ] },
    { name: 'Personal Development', url: 'https://www.udemy.com/courses/personal-development/', subs: [
      { name: 'D1', link: 'd1', subs: [
        { name: 'D12', link: 'd12' },
      ] },
      { name: 'D2', link: 'd2', subs: [
        { name: 'D21', link: 'd21' },
      ] },
    ] },
    { name: 'Design', url: 'https://www.udemy.com/courses/design/', subs: [
      { name: 'D1', link: 'd1', subs: [
        { name: 'D12', link: 'd12' },
      ] },
      { name: 'D2', link: 'd2', subs: [
        { name: 'D21', link: 'd21' },
      ] },
    ] },
    { name: 'Marketing', url: 'https://www.udemy.com/courses/marketing/', subs: [
      { name: 'D1', link: 'd1', subs: [
        { name: 'D12', link: 'd12' },
      ] },
      { name: 'D2', link: 'd2', subs: [
        { name: 'D21', link: 'd21' },
      ] },
    ] },
    { name: 'Lifestyle', url: 'https://www.udemy.com/courses/lifestyle/', subs: [
      { name: 'D1', link: 'd1', subs: [
        { name: 'D12', link: 'd12' },
      ] },
      { name: 'D2', link: 'd2', subs: [
        { name: 'D21', link: 'd21' },
      ] },
    ] },
    { name: 'Photography & Video', url: 'https://www.udemy.com/courses/photography-and-video/', subs: [
      { name: 'D1', link: 'd1', subs: [
        { name: 'D12', link: 'd12' },
      ] },
      { name: 'D2', link: 'd2', subs: [
        { name: 'D21', link: 'd21' },
      ] },
    ] },
    { name: 'Health & Fitness', url: 'https://www.udemy.com/courses/health-and-fitness/', subs: [
      { name: 'D1', link: 'd1', subs: [
        { name: 'D12', link: 'd12' },
      ] },
      { name: 'D2', link: 'd2', subs: [
        { name: 'D21', link: 'd21' },
      ] },
    ] },
    { name: 'Music', url: 'https://www.udemy.com/courses/music/', subs: [
      { name: 'D1', link: 'd1', subs: [
        { name: 'D12', link: 'd12' },
      ] },
      { name: 'D2', link: 'd2', subs: [
        { name: 'D21', link: 'd21' },
      ] },
    ] },
    { name: 'Teaching & Academics', url: 'https://www.udemy.com/courses/teaching-and-academics/', subs: [
      { name: 'D1', link: 'd1', subs: [
        { name: 'D12', link: 'd12' },
      ] },
      { name: 'D2', link: 'd2', subs: [
        { name: 'D21', link: 'd21' },
      ] },
    ] },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  showOutline(event) {
    if (event.keyCode == 9) (document.querySelector('.search-in') as HTMLElement).style.setProperty('outline', '4px solid #e59819', 'important');
  }

  hideOutline() {
    (document.querySelector('.search-in') as HTMLElement).style.setProperty('outline', 'none', 'important');
  }

}
