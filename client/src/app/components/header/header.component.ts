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
      ] },
      { name: 'Web Development', url: 'https://www.udemy.com/courses/development/web-development/', subs: [
        { name: 'All Web Development', url: 'https://www.udemy.com/courses/development/web-development/' },
        { name: 'JavaScript', url: 'https://www.udemy.com/topic/javascript/' },
        { name: 'React', url: 'https://www.udemy.com/topic/react/' },
        { name: 'CSS', url: 'https://www.udemy.com/topic/css/' },
        { name: 'Angular', url: 'https://www.udemy.com/topic/angular/' },
        { name: 'PHP', url: 'https://www.udemy.com/topic/php/' },
        { name: 'Node.Js', url: 'https://www.udemy.com/topic/nodejs/' },
        { name: 'WordPress', url: 'https://www.udemy.com/topic/wordpress/' },
        { name: 'Vue JS', url: 'https://www.udemy.com/topic/vue-js/' },
      ] },
      { name: 'Data Science', url: 'https://www.udemy.com/courses/development/data-science/', subs: [
        { name: 'All Data Science', url: 'https://www.udemy.com/courses/development/data-science/' },
        { name: 'Python', url: 'https://www.udemy.com/topic/python/' },
        { name: 'Machine Learning', url: 'https://www.udemy.com/topic/machine-learning/' },
        { name: 'Deep Learning', url: 'https://www.udemy.com/topic/deep-learning/' },
        { name: 'Data Analysis', url: 'https://www.udemy.com/topic/data-analysis/' },
        { name: 'Artificial Intelligence', url: 'https://www.udemy.com/topic/artificial-intelligence/' },
        { name: 'R (programming language)', url: 'https://www.udemy.com/topic/r-programming-language/' },
        { name: 'Statistics', url: 'https://www.udemy.com/topic/statistics/' },
        { name: 'TensorFlow', url: 'https://www.udemy.com/topic/tensorflow/' },
      ] },
      { name: 'Mobile Development', url: 'https://www.udemy.com/courses/development/mobile-apps/', subs: [
        { name: 'All Mobile Development', url: 'https://www.udemy.com/courses/development/mobile-apps/' },
        { name: 'Google Flutter', url: 'https://www.udemy.com/topic/google-flutter/' },
        { name: 'Android Development', url: 'https://www.udemy.com/topic/android-development/' },
        { name: 'iOS Development', url: 'https://www.udemy.com/topic/ios-development/' },
        { name: 'React Native', url: 'https://www.udemy.com/topic/react-native/' },
        { name: 'Swift', url: 'https://www.udemy.com/topic/swift/' },
        { name: 'Dart (programming language)', url: 'https://www.udemy.com/topic/dart-programming-language/' },
        { name: 'Kotlin', url: 'https://www.udemy.com/topic/kotlin/' },
        { name: 'SwiftUI', url: 'https://www.udemy.com/topic/swiftui/' },
      ] },
      { name: 'Programming Languages', url: 'https://www.udemy.com/courses/development/programming-languages/', subs: [
        { name: 'All Programming Languages', url: 'https://www.udemy.com/courses/development/programming-languages/' },
        { name: 'Python', url: 'https://www.udemy.com/topic/python/' },
        { name: 'Java', url: 'https://www.udemy.com/topic/java/' },
        { name: 'C#', url: 'https://www.udemy.com/topic/c-sharp/' },
        { name: 'React', url: 'https://www.udemy.com/topic/react/' },
        { name: 'C++', url: 'https://www.udemy.com/topic/c-plus-plus/' },
        { name: 'JavaScript', url: 'https://www.udemy.com/topic/javascript/' },
        { name: 'C (programming language)', url: 'https://www.udemy.com/topic/c-programming/' },
        { name: 'Spring Framework', url: 'https://www.udemy.com/topic/spring-framework/' },
        { name: 'Go (programming language)', url: 'https://www.udemy.com/topic/go-programming-language/' },
      ] },
      { name: 'Game Development', url: 'https://www.udemy.com/courses/development/game-development/', subs: [
        { name: 'All Game Development', url: 'https://www.udemy.com/courses/development/game-development/' },
        { name: 'Unity', url: 'https://www.udemy.com/topic/unity/' },
        { name: 'Game Development Fundamentals', url: 'https://www.udemy.com/topic/game-development/' },
        { name: 'Unreal Engine', url: 'https://www.udemy.com/topic/unreal-engine/' },
        { name: 'C#', url: 'https://www.udemy.com/topic/c-sharp/' },
        { name: '3D Game Development', url: 'https://www.udemy.com/topic/3d-game-development/' },
        { name: 'C++', url: 'https://www.udemy.com/topic/c-plus-plus/' },
        { name: '2D Game Development', url: 'https://www.udemy.com/topic/2d-game-development/' },
        { name: 'Unreal Engine Blueprints', url: 'https://www.udemy.com/topic/unreal-engine-blueprints/' },
        { name: 'Blender', url: 'https://www.udemy.com/topic/blender/' },
      ] },
      { name: 'Database Design & Development', url: 'https://www.udemy.com/courses/development/databases/', subs: [
        { name: 'All Database Design & Development', url: 'https://www.udemy.com/courses/development/databases/' },
        { name: 'SQL', url: 'https://www.udemy.com/topic/sql/' },
        { name: 'MySQL', url: 'https://www.udemy.com/topic/mysql/' },
        { name: 'Oracle SQL', url: 'https://www.udemy.com/topic/oracle-sql/' },
        { name: 'Apache Kafka', url: 'https://www.udemy.com/topic/apache-kafka/' },
        { name: 'Oracle Certification', url: 'https://www.udemy.com/topic/oracle-certification/' },
        { name: 'MongoDB', url: 'https://www.udemy.com/topic/mongodb/' },
        { name: 'SQL Server', url: 'https://www.udemy.com/topic/sql-server/' },
        { name: 'Database Programming', url: 'https://www.udemy.com/topic/database-programming/' },
        { name: 'PostgreSQL', url: 'https://www.udemy.com/topic/postgresql/' },
      ] },
      { name: 'Software Testing', url: 'https://www.udemy.com/courses/development/software-testing/', subs: [
        { name: 'All Software Testing', url: 'https://www.udemy.com/courses/development/software-testing/' },
        { name: 'Selenium WebDriver', url: 'https://www.udemy.com/topic/selenium-webdriver/' },
        { name: 'Selenium Testing Framework', url: 'https://www.udemy.com/topic/selenium-testing-framework/' },
        { name: 'Java', url: 'https://www.udemy.com/topic/java/' },
        { name: 'Automation Testing', url: 'https://www.udemy.com/topic/api-testing/' },
        { name: 'API Testing', url: 'https://www.udemy.com/topic/api-testing/' },
        { name: 'Cypress.io', url: 'https://www.udemy.com/topic/cypressio/' },
        { name: 'REST Assured', url: 'https://www.udemy.com/topic/rest-assured/' },
        { name: 'Appium', url: 'https://www.udemy.com/topic/appium/' },
      ] },
      { name: 'Software Engineering', url: 'https://www.udemy.com/courses/development/software-engineering/', subs: [
        { name: 'All Software Engineering', url: 'https://www.udemy.com/courses/development/software-engineering/' },
        { name: 'Coding Interview', url: 'https://www.udemy.com/topic/coding-interview/' },
        { name: 'Data Structures', url: 'https://www.udemy.com/topic/data-structures/' },
        { name: 'Kubernetes', url: 'https://www.udemy.com/topic/kubernetes/' },
        { name: 'Certified Kubernetes Application Developer (CKAD)', url: 'https://www.udemy.com/topic/certified-kubernetes-application-developer-ckad/' },
        { name: 'Microservices', url: 'https://www.udemy.com/topic/microservices/' },
        { name: 'Algorithms', url: 'https://www.udemy.com/topic/algorithms/' },
        { name: 'Python', url: 'https://www.udemy.com/topic/python/' },
        { name: 'Spring Boot', url: 'https://www.udemy.com/topic/spring-boot/' },
        { name: 'Blockchain', url: 'https://www.udemy.com/topic/blockchain/' },
      ] },
      { name: 'Development Tools', url: 'https://www.udemy.com/courses/development/development-tools/', subs: [
        { name: 'All Development Tools', url: 'https://www.udemy.com/courses/development/development-tools/' },
        { name: 'Git', url: 'https://www.udemy.com/topic/git/' },
        { name: 'Docker', url: 'https://www.udemy.com/topic/docker/' },
        { name: 'Kubernetes', url: 'https://www.udemy.com/topic/kubernetes/' },
        { name: 'DevOps', url: 'https://www.udemy.com/topic/devops/' },
        { name: 'Jenkins', url: 'https://www.udemy.com/topic/jenkins/' },
        { name: 'JIRA', url: 'https://www.udemy.com/topic/jira/' },
        { name: 'AWS Certified Solutions Architect - Associate', url: 'https://www.udemy.com/topic/aws-certified-solutions-architect-associate/' },
        { name: 'Continuous Integration', url: 'https://www.udemy.com/topic/continuous-integration/' },
        { name: 'Confluence', url: 'https://www.udemy.com/topic/confluence/' },
      ] },
      { name: 'No-Code Development', url: 'https://www.udemy.com/courses/development/no-code-development/', subs: [
        { name: 'All No-Code Development', url: 'https://www.udemy.com/courses/development/no-code-development/' },
        { name: 'Elementor', url: 'https://www.udemy.com/topic/elementor/' },
        { name: 'Artificial Intelligence', url: 'https://www.udemy.com/topic/artificial-intelligence/' },
        { name: 'Bubble Visual Programming', url: 'https://www.udemy.com/topic/bubble-visual-programming/' },
        { name: 'Wix', url: 'https://www.udemy.com/topic/wix/' },
        { name: 'WordPress', url: 'https://www.udemy.com/topic/wordpress/' },
        { name: 'Software Development', url: 'https://www.udemy.com/topic/software-development/' },
        { name: 'Microsoft PowerApps', url: 'https://www.udemy.com/topic/microsoft-powerapps/' },
        { name: 'Automation', url: 'https://www.udemy.com/topic/automation/' },
        { name: 'Web Design', url: 'https://www.udemy.com/topic/web-design/' },
      ] },
    ] },
    { name: 'Business', url: 'https://www.udemy.com/courses/business/', subs: [
      { name: 'All Business', url: 'https://www.udemy.com/courses/business/', subs: [
      ] },
      { name: 'Entrepreneurship', url: 'https://www.udemy.com/courses/business/entrepreneurship/', subs: [
        { name: 'All Entrepreneurship', url: 'https://www.udemy.com/courses/business/entrepreneurship/' },
        { name: 'Business Fundamentals', url: 'https://www.udemy.com/topic/business-fundamentals/' },
        { name: 'Entrepreneurship Fundamentals', url: 'https://www.udemy.com/topic/entrepreneurship/' },
        { name: 'Business Strategy', url: 'https://www.udemy.com/topic/business-strategy/' },
        { name: 'Business Plan', url: 'https://www.udemy.com/topic/business-plan/' },
        { name: 'Startup', url: 'https://www.udemy.com/topic/startup/' },
        { name: 'Freelancing', url: 'https://www.udemy.com/topic/freelancing/' },
        { name: 'Online Business', url: 'https://www.udemy.com/topic/online-business/' },
        { name: 'Blogging', url: 'https://www.udemy.com/topic/blogging/' },
        { name: 'Home Business', url: 'https://www.udemy.com/topic/home-business/' },
      ] },
      { name: 'Communications', url: 'https://www.udemy.com/courses/business/communications/', subs: [
        { name: 'All Communications', url: 'https://www.udemy.com/courses/business/communications/' },
        { name: 'Communication Skills', url: 'https://www.udemy.com/topic/communication-skills/' },
        { name: 'Presentation Skills', url: 'https://www.udemy.com/topic/presentation-skills/' },
        { name: 'Writing', url: 'https://www.udemy.com/topic/writing/' },
        { name: 'Public Speaking', url: 'https://www.udemy.com/topic/public-speaking/' },
        { name: 'Fiction Writing', url: 'https://www.udemy.com/topic/fiction-writing/' },
        { name: 'Business Writing', url: 'https://www.udemy.com/topic/business-writing/' },
        { name: 'Email Etiquette', url: 'https://www.udemy.com/topic/email-etiquette/' },
        { name: 'Business Communication', url: 'https://www.udemy.com/topic/business-communication/' },
        { name: 'Technical Writing', url: 'https://www.udemy.com/topic/technical-writing/' },
      ] },
      { name: 'Management', url: 'https://www.udemy.com/courses/business/management/', subs: [
        { name: 'All Management', url: 'https://www.udemy.com/courses/business/management/' },
        { name: 'Product Management', url: 'https://www.udemy.com/topic/product-management/' },
        { name: 'Leadership', url: 'https://www.udemy.com/topic/leadership/' },
        { name: 'Management Skills', url: 'https://www.udemy.com/topic/management-skills/' },
        { name: 'Business Strategy', url: 'https://www.udemy.com/topic/business-strategy/' },
        { name: 'ISO 9001', url: 'https://www.udemy.com/topic/iso-9001/' },
        { name: 'Business Process Management', url: 'https://www.udemy.com/topic/business-process-management/' },
        { name: 'Risk Management', url: 'https://www.udemy.com/topic/risk-management/' },
        { name: 'Quality Management', url: 'https://www.udemy.com/topic/quality-management/' },
        { name: 'Manager Training', url: 'https://www.udemy.com/topic/manager-training/' },
      ] },
      { name: 'Sales', url: 'https://www.udemy.com/courses/business/sales/', subs: [
        { name: 'All Sales', url: 'https://www.udemy.com/courses/business/sales/' },
        { name: 'Sales Skills', url: 'https://www.udemy.com/topic/sales-skills/' },
        { name: 'B2B Sales', url: 'https://www.udemy.com/topic/b2b-sales/' },
        { name: 'LinkedIn', url: 'https://www.udemy.com/topic/linkedin/' },
        { name: 'Business Development', url: 'https://www.udemy.com/topic/business-development/' },
        { name: 'Presentation Skills', url: 'https://www.udemy.com/topic/presentation-skills/' },
        { name: 'Lead Generation', url: 'https://www.udemy.com/topic/lead-generation/' },
        { name: 'Customer Service', url: 'https://www.udemy.com/topic/customer-service/' },
        { name: 'Customer Success Management', url: 'https://www.udemy.com/topic/customer-success/' },
        { name: 'Cold Email', url: 'https://www.udemy.com/topic/cold-email/' },
      ] },
      { name: 'Business Strategy', url: 'https://www.udemy.com/courses/business/strategy/', subs: [
        { name: 'All Business Strategy', url: 'https://www.udemy.com/courses/business/strategy/' },
        { name: 'Digital Marketing', url: 'https://www.udemy.com/topic/digital-marketing/' },
        { name: 'Management Consulting', url: 'https://www.udemy.com/topic/management-consulting/' },
        { name: 'Futures Trading', url: 'https://www.udemy.com/topic/futures-trading/' },
        { name: 'Google Ads (Adwords)', url: 'https://www.udemy.com/topic/google-ads/' },
        { name: 'Business Model', url: 'https://www.udemy.com/topic/business-model/' },
        { name: 'Innovation', url: 'https://www.udemy.com/topic/innovation/' },
        { name: 'Digital Transformation', url: 'https://www.udemy.com/topic/digital-transformation-s/' },
        { name: 'TOGAF 9 Foundation', url: 'https://www.udemy.com/topic/togaf-9-foundation/' },
      ] },
      { name: 'Operations', url: 'https://www.udemy.com/courses/business/operations/', subs: [
        { name: 'All Operations', url: 'https://www.udemy.com/courses/business/operations/' },
        { name: 'Six Sigma', url: 'https://www.udemy.com/topic/six-sigma/' },
        { name: 'Six Sigma Green Belt', url: 'https://www.udemy.com/topic/six-sigma-green-belt/' },
        { name: 'Supply Chain', url: 'https://www.udemy.com/topic/quality-management/' },
        { name: 'Quality Management', url: 'https://www.udemy.com/topic/quality-management/' },
        { name: 'Six Sigma Black Belt', url: 'https://www.udemy.com/topic/six-sigma-black-belt/' },
        { name: 'Six Sigma Yellow Belt', url: 'https://www.udemy.com/topic/six-sigma-yellow-belt/' },
        { name: 'Lean', url: 'https://www.udemy.com/topic/lean/' },
        { name: 'Robotic Process Automation', url: 'https://www.udemy.com/topic/robotic-process-automation/' },
        { name: 'Six Sigma White Belt', url: 'https://www.udemy.com/topic/six-sigma-white-belt/' },
      ] },
      { name: 'Project Management', url: 'https://www.udemy.com/courses/business/project-management/', subs: [
        { name: 'All Project Management', url: 'https://www.udemy.com/courses/business/project-management/' },
        { name: 'PMP', url: 'https://www.udemy.com/topic/pmp/' },
        { name: 'PMBOK', url: 'https://www.udemy.com/topic/pmbok/' },
        { name: 'Agile', url: 'https://www.udemy.com/topic/agile/' },
        { name: 'Scrum', url: 'https://www.udemy.com/topic/scrum/' },
        { name: 'CAPM', url: 'https://www.udemy.com/topic/capm/' },
        { name: 'PMI-ACP', url: 'https://www.udemy.com/topic/pmi-acp/' },
        { name: 'Microsoft Project', url: 'https://www.udemy.com/topic/microsoft-project/' },
        { name: 'Risk Management', url: 'https://www.udemy.com/topic/risk-management/' },
      ] },
      { name: 'Business Law', url: 'https://www.udemy.com/courses/business/business-law/', subs: [
        { name: 'All Business Law', url: 'https://www.udemy.com/courses/business/business-law/' },
        { name: 'GDPR', url: 'https://www.udemy.com/topic/gdpr/' },
        { name: 'Contract Law', url: 'https://www.udemy.com/topic/contract-law/' },
        { name: 'Law', url: 'https://www.udemy.com/topic/law/' },
        { name: 'Medical Device Development', url: 'https://www.udemy.com/topic/medical-device-development/' },
        { name: 'LGPD Lei Geral de Proteção de Dados', url: 'https://www.udemy.com/topic/lgpd-lei-geral-de-protecao-de-dados/' },
        { name: 'Contract Management', url: 'https://www.udemy.com/topic/contract-management/' },
        { name: 'Data Protection', url: 'https://www.udemy.com/topic/data-protection/' },
        { name: 'Healthcare IT', url: 'https://www.udemy.com/topic/healthcare-it/' },
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
