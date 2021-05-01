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
      { name: 'All Office Productivity', url: 'https://www.udemy.com/courses/office-productivity/', subs: [
        { name: 'D12', url: 'd12' },
      ] },
      { name: 'Microsoft', url: 'https://www.udemy.com/courses/office-productivity/microsoft/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Apple', url: 'https://www.udemy.com/courses/office-productivity/apple/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Google', url: 'https://www.udemy.com/courses/office-productivity/google/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'SAP', url: 'https://www.udemy.com/courses/office-productivity/sap/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Oracle', url: 'https://www.udemy.com/courses/office-productivity/oracle/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Other Office Productivity', url: 'https://www.udemy.com/courses/office-productivity/other-productivity/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
    ] },
    { name: 'Personal Development', url: 'https://www.udemy.com/courses/personal-development/', subs: [
      { name: 'All Personal Development', url: 'https://www.udemy.com/courses/personal-development/', subs: [
        { name: 'D12', url: 'd12' },
      ] },
      { name: 'Personal Transformation', url: 'https://www.udemy.com/courses/personal-development/personal-transformation/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Personal Productivity', url: 'https://www.udemy.com/courses/personal-development/productivity/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Leadership', url: 'https://www.udemy.com/courses/personal-development/leadership/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Career Development', url: 'https://www.udemy.com/courses/personal-development/career-development/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Parenting & Relationships', url: 'https://www.udemy.com/courses/personal-development/parenting-and-relationships/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Happiness', url: 'https://www.udemy.com/courses/personal-development/happiness/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Esoteric Practices', url: 'https://www.udemy.com/courses/lifestyle/esoteric-practices/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Religion & Spirituality', url: 'https://www.udemy.com/courses/personal-development/religion-and-spirituality/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Personal Brand Building', url: 'https://www.udemy.com/courses/personal-development/personal-brand-building/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Creativity', url: 'https://www.udemy.com/courses/personal-development/creativity/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Influence', url: 'https://www.udemy.com/courses/personal-development/influence/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Self Esteem & Confidence', url: 'https://www.udemy.com/courses/personal-development/self-esteem-and-confidence/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Stress Management', url: 'https://www.udemy.com/courses/personal-development/stress-management/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Memory & Study Skills', url: 'https://www.udemy.com/courses/personal-development/memory/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Motivation', url: 'https://www.udemy.com/courses/personal-development/motivation/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Other Personal Development', url: 'https://www.udemy.com/courses/personal-development/other-personal-development/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
    ] },
    { name: 'Design', url: 'https://www.udemy.com/courses/design/', subs: [
      { name: 'All Design', url: 'https://www.udemy.com/courses/design/', subs: [
        { name: 'D12', url: 'd12' },
      ] },
      { name: 'Web Design', url: 'https://www.udemy.com/courses/design/web-design/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Graphic Design & Illustration', url: 'https://www.udemy.com/courses/design/graphic-design-and-illustration/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Design Tools', url: 'https://www.udemy.com/courses/design/design-tools/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'User Experience Design', url: 'https://www.udemy.com/courses/design/user-experience/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Game Design', url: 'https://www.udemy.com/courses/design/game-design/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Design Thinking', url: 'https://www.udemy.com/courses/design/design-thinking/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: '3D & Animation', url: 'https://www.udemy.com/courses/design/3d-and-animation/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Fashion Design', url: 'https://www.udemy.com/courses/design/fashion/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Architectural Design', url: 'https://www.udemy.com/courses/design/architectural-design/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Interior Design', url: 'https://www.udemy.com/courses/design/interior-design/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Other Design', url: 'https://www.udemy.com/courses/design/other-design/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
    ] },
    { name: 'Marketing', url: 'https://www.udemy.com/courses/marketing/', subs: [
      { name: 'All Marketing', url: 'https://www.udemy.com/courses/marketing/', subs: [
        { name: 'D12', url: 'd12' },
      ] },
      { name: 'Digital Marketing', url: 'https://www.udemy.com/courses/marketing/digital-marketing/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Search Engine Optimization', url: 'https://www.udemy.com/courses/marketing/search-engine-optimization/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Social Media Marketing', url: 'https://www.udemy.com/courses/marketing/social-media-marketing/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Branding', url: 'https://www.udemy.com/courses/marketing/branding/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Marketing Fundamentals', url: 'https://www.udemy.com/courses/marketing/marketing-fundamentals/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Marketing Analytics & Automation', url: 'https://www.udemy.com/courses/marketing/analytics-and-automation/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Public Relations', url: 'https://www.udemy.com/courses/marketing/public-relations/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Advertising', url: 'https://www.udemy.com/courses/marketing/advertising/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Video & Mobile Marketing', url: 'https://www.udemy.com/courses/marketing/video-and-mobile-marketing/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Content Marketing', url: 'https://www.udemy.com/courses/marketing/content-marketing/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Growth Hacking', url: 'https://www.udemy.com/courses/marketing/growth-hacking/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Affiliate Marketing', url: 'https://www.udemy.com/courses/marketing/affiliate-marketing/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Product Marketing', url: 'https://www.udemy.com/courses/marketing/product-marketing/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Other Marketing', url: 'https://www.udemy.com/courses/marketing/other-marketing/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
    ] },
    { name: 'Lifestyle', url: 'https://www.udemy.com/courses/lifestyle/', subs: [
      { name: 'All Lifestyle', url: 'https://www.udemy.com/courses/lifestyle/', subs: [
        { name: 'D12', url: 'd12' },
      ] },
      { name: 'Arts & Crafts', url: 'https://www.udemy.com/courses/lifestyle/arts-and-crafts/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Beauty & Makeup', url: 'https://www.udemy.com/courses/lifestyle/beauty-and-makeup/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Esoteric Practices', url: 'https://www.udemy.com/courses/lifestyle/esoteric-practices/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Food & Beverage', url: 'https://www.udemy.com/courses/lifestyle/food-and-beverage/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Gaming', url: 'https://www.udemy.com/courses/lifestyle/gaming/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Home Improvement', url: 'https://www.udemy.com/courses/lifestyle/home-improvement/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Pet Care & Training', url: 'https://www.udemy.com/courses/lifestyle/pet-care-and-training/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Travel', url: 'https://www.udemy.com/courses/lifestyle/travel/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Other Lifestyle', url: 'https://www.udemy.com/courses/lifestyle/other-lifestyle/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
    ] },
    { name: 'Photography & Video', url: 'https://www.udemy.com/courses/photography-and-video/', subs: [
      { name: 'All Photography & Video', url: 'https://www.udemy.com/courses/photography-and-video/', subs: [
        { name: 'D12', url: 'd12' },
      ] },
      { name: 'Digital Photography', url: 'https://www.udemy.com/courses/photography-and-video/digital-photography/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Photography', url: 'https://www.udemy.com/courses/photography-and-video/photography-fundamentals/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Portrait Photography', url: 'https://www.udemy.com/courses/photography-and-video/portraits/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Photography Tools', url: 'https://www.udemy.com/courses/photography-and-video/photography-tools/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Commercial Photography', url: 'https://www.udemy.com/courses/photography-and-video/commercial-photography/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Video Design', url: 'https://www.udemy.com/courses/photography-and-video/video-design/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Other Photography & Video', url: 'https://www.udemy.com/courses/photography-and-video/other-photography-and-video/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
    ] },
    { name: 'Health & Fitness', url: 'https://www.udemy.com/courses/health-and-fitness/', subs: [
      { name: 'All Health & Fitness', url: 'https://www.udemy.com/courses/health-and-fitness/', subs: [
        { name: 'D12', url: 'd12' },
      ] },
      { name: 'Fitness', url: 'https://www.udemy.com/courses/health-and-fitness/fitness/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'General Health', url: 'https://www.udemy.com/courses/health-and-fitness/general-health/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Sports', url: 'https://www.udemy.com/courses/health-and-fitness/sports/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Nutrition', url: 'https://www.udemy.com/courses/health-and-fitness/nutrition/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Yoga', url: 'https://www.udemy.com/courses/health-and-fitness/yoga/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Mental Health', url: 'https://www.udemy.com/courses/health-and-fitness/mental-health/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Dieting', url: 'https://www.udemy.com/courses/health-and-fitness/dieting/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Self Defense', url: 'https://www.udemy.com/courses/health-and-fitness/self-defense/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Safety & First Aid', url: 'https://www.udemy.com/courses/health-and-fitness/safety-and-first-aid/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Dance', url: 'https://www.udemy.com/courses/health-and-fitness/dance/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Meditation', url: 'https://www.udemy.com/courses/health-and-fitness/meditation/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Other Health & Fitness', url: 'https://www.udemy.com/courses/health-and-fitness/other-health-and-fitness/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
    ] },
    { name: 'Music', url: 'https://www.udemy.com/courses/music/', subs: [
      { name: 'All Music', url: 'https://www.udemy.com/courses/music/', subs: [
        { name: 'D12', url: 'd12' },
      ] },
      { name: 'Instruments', url: 'https://www.udemy.com/courses/music/instruments/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Music Production', url: 'https://www.udemy.com/courses/music/production/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Music Fundamentals', url: 'https://www.udemy.com/courses/music/music-fundamentals/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Vocal', url: 'https://www.udemy.com/courses/music/vocal/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Music Techniques', url: 'https://www.udemy.com/courses/music/music-techniques/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Music Software', url: 'Music Software', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Other Music', url: 'https://www.udemy.com/courses/music/other-music/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
    ] },
    { name: 'Teaching & Academics', url: 'https://www.udemy.com/courses/teaching-and-academics/', subs: [
      { name: 'All Teaching & Academics', url: 'https://www.udemy.com/courses/teaching-and-academics/', subs: [
        { name: 'D12', url: 'd12' },
      ] },
      { name: 'Engineering', url: 'https://www.udemy.com/courses/teaching-and-academics/engineering/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Humanities', url: 'https://www.udemy.com/courses/teaching-and-academics/humanities/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Math', url: 'https://www.udemy.com/courses/teaching-and-academics/math/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Science', url: 'https://www.udemy.com/courses/teaching-and-academics/science/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Online Education', url: 'https://www.udemy.com/courses/teaching-and-academics/online-education/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Social Science', url: 'https://www.udemy.com/courses/teaching-and-academics/social-science/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Language', url: 'https://www.udemy.com/courses/teaching-and-academics/language/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Teacher Training', url: 'https://www.udemy.com/courses/teaching-and-academics/teacher-training/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Test Prep', url: 'https://www.udemy.com/courses/teaching-and-academics/test-prep/', subs: [
        { name: 'D21', url: 'd21' },
      ] },
      { name: 'Other Teaching & Academics', url: 'https://www.udemy.com/courses/teaching-and-academics/other-teaching-academics/', subs: [
        { name: 'D21', url: 'd21' },
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
