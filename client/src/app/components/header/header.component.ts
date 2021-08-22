import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  categories = [
    {
      name: 'Development', uri: 'https://www.udemy.com/courses/development/', subs: [
        {
          name: 'Web Development', uri: 'https://www.udemy.com/courses/development/web-development/', subs: [
            { name: 'JavaScript', uri: 'https://www.udemy.com/topic/javascript/' },
            { name: 'React', uri: 'https://www.udemy.com/topic/react/' },
            { name: 'Angular', uri: 'https://www.udemy.com/topic/angular/' },
            { name: 'CSS', uri: 'https://www.udemy.com/topic/css/' },
            { name: 'Django', uri: 'https://www.udemy.com/topic/django/' },
            { name: 'PHP', uri: 'https://www.udemy.com/topic/php/' },
            { name: 'Node.Js', uri: 'https://www.udemy.com/topic/nodejs/' },
            { name: 'WordPress', uri: 'https://www.udemy.com/topic/wordpress/' },
          ]
        },
        {
          name: 'Data Science', uri: 'https://www.udemy.com/courses/development/data-science/', subs: [
            { name: 'Python', uri: 'https://www.udemy.com/topic/python/' },
            { name: 'Machine Learning', uri: 'https://www.udemy.com/topic/machine-learning/' },
            { name: 'Deep Learning', uri: 'https://www.udemy.com/topic/deep-learning/' },
            { name: 'Data Analysis', uri: 'https://www.udemy.com/topic/data-analysis/' },
            { name: 'Artificial Intelligence', uri: 'https://www.udemy.com/topic/artificial-intelligence/' },
            { name: 'R (programming language)', uri: 'https://www.udemy.com/topic/r-programming-language/' },
            { name: 'TensorFlow', uri: 'https://www.udemy.com/topic/tensorflow/' },
            { name: 'Statistics', uri: 'https://www.udemy.com/topic/statistics/' },
          ]
        },
        {
          name: 'Mobile Development', uri: 'https://www.udemy.com/courses/development/mobile-apps/', subs: [
            { name: 'Google Flutter', uri: 'https://www.udemy.com/topic/google-flutter/' },
            { name: 'Android Development', uri: 'https://www.udemy.com/topic/android-development/' },
            { name: 'iOS Development', uri: 'https://www.udemy.com/topic/ios-development/' },
            { name: 'React Native', uri: 'https://www.udemy.com/topic/react-native/' },
            { name: 'Swift', uri: 'https://www.udemy.com/topic/swift/' },
            { name: 'Dart (programming language)', uri: 'https://www.udemy.com/topic/dart-programming-language/' },
            { name: 'Kotlin', uri: 'https://www.udemy.com/topic/kotlin/' },
            { name: 'SwiftUI', uri: 'https://www.udemy.com/topic/swiftui/' },
          ]
        },
        {
          name: 'Programming Languages', uri: 'https://www.udemy.com/courses/development/programming-languages/', subs: [
            { name: 'Python', uri: 'https://www.udemy.com/topic/python/' },
            { name: 'Java', uri: 'https://www.udemy.com/topic/java/' },
            { name: 'C#', uri: 'https://www.udemy.com/topic/c-sharp/' },
            { name: 'React', uri: 'https://www.udemy.com/topic/react/' },
            { name: 'C++', uri: 'https://www.udemy.com/topic/c-plus-plus/' },
            { name: 'JavaScript', uri: 'https://www.udemy.com/topic/javascript/' },
            { name: 'C (programming language)', uri: 'https://www.udemy.com/topic/c-programming/' },
            { name: 'Spring Framework', uri: 'https://www.udemy.com/topic/spring-framework/' },
            { name: 'Go (programming language)', uri: 'https://www.udemy.com/topic/go-programming-language/' },
          ]
        },
        {
          name: 'Game Development', uri: 'https://www.udemy.com/courses/development/game-development/', subs: [
            { name: 'Unity', uri: 'https://www.udemy.com/topic/unity/' },
            { name: 'Game Development Fundamentals', uri: 'https://www.udemy.com/topic/game-development/' },
            { name: 'Unreal Engine', uri: 'https://www.udemy.com/topic/unreal-engine/' },
            { name: 'C#', uri: 'https://www.udemy.com/topic/c-sharp/' },
            { name: '3D Game Development', uri: 'https://www.udemy.com/topic/3d-game-development/' },
            { name: 'C++', uri: 'https://www.udemy.com/topic/c-plus-plus/' },
            { name: 'Unreal Engine Blueprints', uri: 'https://www.udemy.com/topic/unreal-engine-blueprints/' },
            { name: '2D Game Development', uri: 'https://www.udemy.com/topic/2d-game-development/' },
            { name: 'Mobile Game Development', uri: 'https://www.udemy.com/topic/mobile-game-development/' },
          ]
        },
        {
          name: 'Database Design & Development', uri: 'https://www.udemy.com/courses/development/databases/', subs: [
            { name: 'SQL', uri: 'https://www.udemy.com/topic/sql/' },
            { name: 'MySQL', uri: 'https://www.udemy.com/topic/mysql/' },
            { name: 'Oracle SQL', uri: 'https://www.udemy.com/topic/oracle-sql/' },
            { name: 'MongoDB', uri: 'https://www.udemy.com/topic/mongodb/' },
            { name: 'Apache Kafka', uri: 'https://www.udemy.com/topic/apache-kafka/' },
            { name: 'Oracle Certification', uri: 'https://www.udemy.com/topic/oracle-certification/' },
            { name: 'SQL Server', uri: 'https://www.udemy.com/topic/sql-server/' },
            { name: 'Database Programming', uri: 'https://www.udemy.com/topic/database-programming/' },
            { name: 'Database Management', uri: 'https://www.udemy.com/topic/database-management/' },
          ]
        },
        {
          name: 'Software Testing', uri: 'https://www.udemy.com/courses/development/software-testing/', subs: [
            { name: 'Selenium WebDriver', uri: 'https://www.udemy.com/topic/selenium-webdriver/' },
            { name: 'Java', uri: 'https://www.udemy.com/topic/java/' },
            { name: 'Automation Testing', uri: 'https://www.udemy.com/topic/api-testing/' },
            { name: 'Selenium Testing Framework', uri: 'https://www.udemy.com/topic/selenium-testing-framework/' },
            { name: 'API Testing', uri: 'https://www.udemy.com/topic/api-testing/' },
            { name: 'REST Assured', uri: 'https://www.udemy.com/topic/rest-assured/' },
            { name: 'Cypress.io', uri: 'https://www.udemy.com/topic/cypressio/' },
            { name: 'Appium', uri: 'https://www.udemy.com/topic/appium/' },
          ]
        },
        {
          name: 'Software Engineering', uri: 'https://www.udemy.com/courses/development/software-engineering/', subs: [
            { name: 'Coding Interview', uri: 'https://www.udemy.com/topic/coding-interview/' },
            { name: 'Data Structures', uri: 'https://www.udemy.com/topic/data-structures/' },
            { name: 'Algorithms', uri: 'https://www.udemy.com/topic/algorithms/' },
            { name: 'Microservices', uri: 'https://www.udemy.com/topic/microservices/' },
            { name: 'Kubernetes', uri: 'https://www.udemy.com/topic/kubernetes/' },
            { name: 'Certified Kubernetes Application Developer (CKAD)', uri: 'https://www.udemy.com/topic/certified-kubernetes-application-developer-ckad/' },
            { name: 'Linux', uri: 'https://www.udemy.com/topic/linux/' },
            { name: 'Python', uri: 'https://www.udemy.com/topic/python/' },
            { name: 'Apache Airflow', uri: 'https://www.udemy.com/topic/apache-airflow/' },
          ]
        },
        {
          name: 'Software Development Tools', uri: 'https://www.udemy.com/courses/development/development-tools/', subs: [
            { name: 'Docker', uri: 'https://www.udemy.com/topic/docker/' },
            { name: 'Git', uri: 'https://www.udemy.com/topic/git/' },
            { name: 'DevOps', uri: 'https://www.udemy.com/topic/devops/' },
            { name: 'Kubernetes', uri: 'https://www.udemy.com/topic/kubernetes/' },
            { name: 'Jenkins', uri: 'https://www.udemy.com/topic/jenkins/' },
            { name: 'JIRA', uri: 'https://www.udemy.com/topic/jira/' },
            { name: 'Confluence', uri: 'https://www.udemy.com/topic/confluence/' },
            { name: 'Continuous Integration', uri: 'https://www.udemy.com/topic/continuous-integration/' },
            { name: 'Node.Js', uri: 'https://www.udemy.com/topic/nodejs/' },
          ]
        },
        {
          name: 'No-Code Development', uri: 'https://www.udemy.com/courses/development/no-code-development/', subs: [
            { name: 'Artificial Intelligence', uri: 'https://www.udemy.com/topic/artificial-intelligence/' },
            { name: 'Elementor', uri: 'https://www.udemy.com/topic/elementor/' },
            { name: 'Bubble Visual Programming', uri: 'https://www.udemy.com/topic/bubble-visual-programming/' },
            { name: 'Wix', uri: 'https://www.udemy.com/topic/wix/' },
            { name: 'WordPress', uri: 'https://www.udemy.com/topic/wordpress/' },
            { name: 'Machine Learning', uri: 'https://www.udemy.com/topic/software-development/' },
            { name: 'Microsoft PowerApps', uri: 'https://www.udemy.com/topic/microsoft-powerapps/' },
            { name: 'Software Development', uri: 'https://www.udemy.com/topic/software-development/' },
            { name: 'Web Design', uri: 'https://www.udemy.com/topic/web-design/' },
          ]
        },
      ]
    },
    {
      name: 'Business', uri: 'https://www.udemy.com/courses/business/', subs: [
        {
          name: 'Entrepreneurship', uri: 'https://www.udemy.com/courses/business/entrepreneurship/', subs: [
            { name: 'Business Fundamentals', uri: 'https://www.udemy.com/topic/business-fundamentals/' },
            { name: 'Entrepreneurship Fundamentals', uri: 'https://www.udemy.com/topic/entrepreneurship/' },
            { name: 'Business Strategy', uri: 'https://www.udemy.com/topic/business-strategy/' },
            { name: 'Startup', uri: 'https://www.udemy.com/topic/startup/' },
            { name: 'Freelancing', uri: 'https://www.udemy.com/topic/freelancing/' },
            { name: 'Business Plan', uri: 'https://www.udemy.com/topic/business-plan/' },
            { name: 'Online Business', uri: 'https://www.udemy.com/topic/online-business/' },
            { name: 'Blogging', uri: 'https://www.udemy.com/topic/blogging/' },
            { name: 'Home Business', uri: 'https://www.udemy.com/topic/home-business/' },
          ]
        },
        {
          name: 'Communication', uri: 'https://www.udemy.com/courses/business/communications/', subs: [
            { name: 'Communication Skills', uri: 'https://www.udemy.com/topic/communication-skills/' },
            { name: 'Presentation Skills', uri: 'https://www.udemy.com/topic/presentation-skills/' },
            { name: 'Writing', uri: 'https://www.udemy.com/topic/writing/' },
            { name: 'Public Speaking', uri: 'https://www.udemy.com/topic/public-speaking/' },
            { name: 'Fiction Writing', uri: 'https://www.udemy.com/topic/fiction-writing/' },
            { name: 'Business Writing', uri: 'https://www.udemy.com/topic/business-writing/' },
            { name: 'Email Etiquette', uri: 'https://www.udemy.com/topic/email-etiquette/' },
            { name: 'Storytelling', uri: 'https://www.udemy.com/topic/storytelling/' },
            { name: 'Business Communication', uri: 'https://www.udemy.com/topic/business-communication/' },
          ]
        },
        {
          name: 'Management', uri: 'https://www.udemy.com/courses/business/management/', subs: [
            { name: 'Product Management', uri: 'https://www.udemy.com/topic/product-management/' },
            { name: 'Leadership', uri: 'https://www.udemy.com/topic/leadership/' },
            { name: 'Business Strategy', uri: 'https://www.udemy.com/topic/business-strategy/' },
            { name: 'Management Skills', uri: 'https://www.udemy.com/topic/management-skills/' },
            { name: 'ISO 9001', uri: 'https://www.udemy.com/topic/iso-9001/' },
            { name: 'Business Process Management', uri: 'https://www.udemy.com/topic/business-process-management/' },
            { name: 'Manager Training', uri: 'https://www.udemy.com/topic/manager-training/' },
            { name: 'Quality Management', uri: 'https://www.udemy.com/topic/quality-management/' },
            { name: 'Project Management', uri: 'https://www.udemy.com/topic/project-management/' },
          ]
        },
        {
          name: 'Sales', uri: 'https://www.udemy.com/courses/business/sales/', subs: [
            { name: 'Sales Skills', uri: 'https://www.udemy.com/topic/sales-skills/' },
            { name: 'B2B Sales', uri: 'https://www.udemy.com/topic/b2b-sales/' },
            { name: 'LinkedIn', uri: 'https://www.udemy.com/topic/linkedin/' },
            { name: 'Presentation Skills', uri: 'https://www.udemy.com/topic/presentation-skills/' },
            { name: 'Lead Generation', uri: 'https://www.udemy.com/topic/lead-generation/' },
            { name: 'Business Development', uri: 'https://www.udemy.com/topic/business-development/' },
            { name: 'Customer Service', uri: 'https://www.udemy.com/topic/customer-service/' },
            { name: 'Cold Email', uri: 'https://www.udemy.com/topic/cold-email/' },
            { name: 'Customer Success Management', uri: 'https://www.udemy.com/topic/customer-success/' },
          ]
        },
        {
          name: 'Business Strategy', uri: 'https://www.udemy.com/courses/business/strategy/', subs: [
            { name: 'Digital Marketing', uri: 'https://www.udemy.com/topic/digital-marketing/' },
            { name: 'Management Consulting', uri: 'https://www.udemy.com/topic/management-consulting/' },
            { name: 'Business Model', uri: 'https://www.udemy.com/topic/business-model/' },
            { name: 'Google Ads (Adwords)', uri: 'https://www.udemy.com/topic/google-ads/' },
            { name: 'TOGAF 9 Foundation', uri: 'https://www.udemy.com/topic/togaf-9-foundation/' },
            { name: 'Futures Trading', uri: 'https://www.udemy.com/topic/futures-trading/' },
            { name: 'Innovation', uri: 'https://www.udemy.com/topic/innovation/' },
            { name: 'Digital Transformation', uri: 'https://www.udemy.com/topic/digital-transformation-s/' },
          ]
        },
        {
          name: 'Operations', uri: 'https://www.udemy.com/courses/business/operations/', subs: [
            { name: 'Six Sigma', uri: 'https://www.udemy.com/topic/six-sigma/' },
            { name: 'Six Sigma Green Belt', uri: 'https://www.udemy.com/topic/six-sigma-green-belt/' },
            { name: 'Supply Chain', uri: 'https://www.udemy.com/topic/quality-management/' },
            { name: 'Six Sigma Yellow Belt', uri: 'https://www.udemy.com/topic/six-sigma-yellow-belt/' },
            { name: 'Quality Management', uri: 'https://www.udemy.com/topic/quality-management/' },
            { name: 'Six Sigma Black Belt', uri: 'https://www.udemy.com/topic/six-sigma-black-belt/' },
            { name: 'Lean', uri: 'https://www.udemy.com/topic/lean/' },
            { name: 'Robotic Process Automation', uri: 'https://www.udemy.com/topic/robotic-process-automation/' },
            { name: 'Six Sigma White Belt', uri: 'https://www.udemy.com/topic/six-sigma-white-belt/' },
          ]
        },
        {
          name: 'Project Management', uri: 'https://www.udemy.com/courses/business/project-management/', subs: [
            { name: 'PMP', uri: 'https://www.udemy.com/topic/pmp/' },
            { name: 'PMBOK', uri: 'https://www.udemy.com/topic/pmbok/' },
            { name: 'Agile', uri: 'https://www.udemy.com/topic/agile/' },
            { name: 'Scrum', uri: 'https://www.udemy.com/topic/scrum/' },
            { name: 'CAPM', uri: 'https://www.udemy.com/topic/capm/' },
            { name: 'PMI-ACP', uri: 'https://www.udemy.com/topic/pmi-acp/' },
            { name: 'Microsoft Project', uri: 'https://www.udemy.com/topic/microsoft-project/' },
            { name: 'Project Risk Management', uri: 'https://www.udemy.com/topic/project-risk-management/' },
          ]
        },
        {
          name: 'Business Law', uri: 'https://www.udemy.com/courses/business/business-law/', subs: [
            { name: 'GDPR', uri: 'https://www.udemy.com/topic/gdpr/' },
            { name: 'Contract Law', uri: 'https://www.udemy.com/topic/contract-law/' },
            { name: 'Law', uri: 'https://www.udemy.com/topic/law/' },
            { name: 'Data Protection', uri: 'https://www.udemy.com/topic/data-protection/' },
            { name: 'Medical Device Development', uri: 'https://www.udemy.com/topic/medical-device-development/' },
            { name: 'Contract Management', uri: 'https://www.udemy.com/topic/contract-management/' },
            { name: 'LGPD Lei Geral de Proteção de Dados', uri: 'https://www.udemy.com/topic/lgpd-lei-geral-de-protecao-de-dados/' },
            { name: 'Goods and Services Tax', uri: 'https://www.udemy.com/topic/goods-and-services-tax/' },
          ]
        },
        {
          name: 'Business Analytics & Intelligence', uri: 'https://www.udemy.com/courses/business/analytics-and-intelligence/', subs: [
            { name: 'Microsoft Power BI', uri: 'https://www.udemy.com/topic/microsoft-power-bi/' },
            { name: 'SQL', uri: 'https://www.udemy.com/topic/sql/' },
            { name: 'Tableau', uri: 'https://www.udemy.com/topic/tableau/' },
            { name: 'Business Analysis', uri: 'https://www.udemy.com/topic/business-analysis/' },
            { name: 'Data Modeling', uri: 'https://www.udemy.com/topic/data-modeling/' },
            { name: 'Business Intelligence', uri: 'https://www.udemy.com/topic/business-intelligence/' },
            { name: 'MySQL', uri: 'https://www.udemy.com/topic/mysql/' },
            { name: 'Data Analysis', uri: 'https://www.udemy.com/topic/data-analysis/' },
            { name: 'Blockchain', uri: 'https://www.udemy.com/topic/blockchain/' },
          ]
        },
        {
          name: 'Human Resources', uri: 'https://www.udemy.com/courses/business/human-resources/', subs: [
            { name: 'Recruiting', uri: 'https://www.udemy.com/topic/recruiting/' },
            { name: 'HR Analytics', uri: 'https://www.udemy.com/topic/hr-analytics/' },
            { name: 'Instructional Design', uri: 'https://www.udemy.com/topic/instructional-design/' },
            { name: 'Hiring', uri: 'https://www.udemy.com/topic/hiring/' },
            { name: 'Emotional Intelligence', uri: 'https://www.udemy.com/topic/emotional-intelligence/' },
            { name: 'Employment Law', uri: 'https://www.udemy.com/topic/employment-law/' },
            { name: 'Conflict Management', uri: 'https://www.udemy.com/topic/conflict-management/' },
            { name: 'Diversity and Inclusion', uri: 'https://www.udemy.com/topic/diversity/' },
          ]
        },
        {
          name: 'Industry', uri: 'https://www.udemy.com/courses/business/industry/', subs: [
            { name: 'Piping', uri: 'https://www.udemy.com/topic/piping/' },
            { name: 'EPLAN Electric P8', uri: 'https://www.udemy.com/topic/eplan-electric-p8/' },
            { name: 'Freight Broker', uri: 'https://www.udemy.com/topic/freight-broker/' },
            { name: 'Trucking', uri: 'https://www.udemy.com/topic/trucking/' },
            { name: 'Electrical Engineering', uri: 'https://www.udemy.com/topic/electrical-engineering/' },
            { name: 'Life Coach Training', uri: 'https://www.udemy.com/topic/life-coaching/' },
            { name: 'Chemical Engineering', uri: 'https://www.udemy.com/topic/chemical-engineering/' },
            { name: 'Solar Energy', uri: 'https://www.udemy.com/topic/solar-energy/' },
            { name: 'Salesforce', uri: 'https://www.udemy.com/topic/salesforce/' },
          ]
        },
        {
          name: 'E-Commerce', uri: 'https://www.udemy.com/courses/business/e-commerce/', subs: [
            { name: 'Amazon FBA', uri: 'https://www.udemy.com/topic/amazon-fba/' },
            { name: 'Dropshipping', uri: 'https://www.udemy.com/topic/dropshipping/' },
            { name: 'Shopify', uri: 'https://www.udemy.com/topic/shopify/' },
            { name: 'Shopify Dropshipping', uri: 'https://www.udemy.com/topic/shopify-dropshipping/' },
            { name: 'Selling on Amazon', uri: 'https://www.udemy.com/topic/selling-on-amazon/' },
            { name: 'Passive Income', uri: 'https://www.udemy.com/topic/passive-income/' },
            { name: 'WooCommerce', uri: 'https://www.udemy.com/topic/woocommerce/' },
            { name: 'Online Business', uri: 'https://www.udemy.com/topic/online-business/' },
          ]
        },
        {
          name: 'Media', uri: 'https://www.udemy.com/courses/business/media/', subs: [
            { name: 'Audiobook Creation', uri: 'https://www.udemy.com/topic/audiobook/' },
            { name: 'Writing', uri: 'https://www.udemy.com/topic/writing/' },
            { name: 'SEO', uri: 'https://www.udemy.com/topic/seo/' },
            { name: 'Screenwriting', uri: 'https://www.udemy.com/topic/screenwriting/' },
            { name: 'Journalism', uri: 'https://www.udemy.com/topic/journalism/' },
            { name: 'Amazon Kindle Direct Publishing (KDP)', uri: 'https://www.udemy.com/topic/amazon-kindle/' },
            { name: 'Podcasting', uri: 'https://www.udemy.com/topic/podcasting/' },
            { name: 'After Effects', uri: 'https://www.udemy.com/topic/after-effects/' },
            { name: 'Motion Graphics', uri: 'https://www.udemy.com/topic/motion-graphics/' },
          ]
        },
        {
          name: 'Real Estate', uri: 'https://www.udemy.com/courses/business/real-estate/', subs: [
            { name: 'Real Estate Investing', uri: 'https://www.udemy.com/topic/real-estate-investing/' },
            { name: 'Mortgage', uri: 'https://www.udemy.com/topic/mortgage/' },
            { name: 'Airbnb Hosting', uri: 'https://www.udemy.com/topic/airbnb-hosting/' },
            { name: 'Construction', uri: 'https://www.udemy.com/topic/construction/' },
            { name: 'Financial Modeling', uri: 'https://www.udemy.com/topic/financial-modeling/' },
            { name: 'Real Estate Marketing', uri: 'https://www.udemy.com/topic/real-estate-marketing/' },
            { name: 'Property Management', uri: 'https://www.udemy.com/topic/property-management-i/' },
            { name: 'Real Estate Flipping', uri: 'https://www.udemy.com/topic/real-estate-flipping/' },
          ]
        },
        {
          name: 'Other Business', uri: 'https://www.udemy.com/courses/business/other-business/', subs: [
            { name: 'QuickBooks Online', uri: 'https://www.udemy.com/topic/quickbooks-online/' },
            { name: 'Grant Writing', uri: 'https://www.udemy.com/topic/grant-writing/' },
            { name: 'Transcription', uri: 'https://www.udemy.com/topic/transcription/' },
            { name: 'PowerPoint', uri: 'https://www.udemy.com/topic/powerpoint/' },
            { name: 'Bitcoin', uri: 'https://www.udemy.com/topic/bitcoin/' },
            { name: 'Freelance Writing', uri: 'https://www.udemy.com/topic/freelance-writing/' },
            { name: 'Interviewing Skills', uri: 'https://www.udemy.com/topic/interviewing-skills/' },
            { name: 'PMI-RMP', uri: 'https://www.udemy.com/topic/pmi-rmp/' },
            { name: 'Fundraising', uri: 'https://www.udemy.com/topic/fundraising/' },
          ]
        },
      ]
    },
    {
      name: 'Finance & Accounting', uri: 'https://www.udemy.com/courses/finance-and-accounting/', subs: [
        {
          name: 'Accounting & Bookkeeping', uri: 'https://www.udemy.com/courses/finance-and-accounting/accounting-bookkeeping/', subs: [
            { name: 'Accounting', uri: 'https://www.udemy.com/topic/accounting/' },
            { name: 'Bookkeeping', uri: 'https://www.udemy.com/topic/bookkeeping/' },
            { name: 'Financial Accounting', uri: 'https://www.udemy.com/topic/financial-accounting/' },
            { name: 'Finance Fundamentals', uri: 'https://www.udemy.com/topic/finance/' },
            { name: 'QuickBooks Online', uri: 'https://www.udemy.com/topic/quickbooks-online/' },
            { name: 'Tally.ERP', uri: 'https://www.udemy.com/topic/tally-erp/' },
            { name: 'Financial Statement', uri: 'https://www.udemy.com/topic/financial-statement/' },
            { name: 'Xero', uri: 'https://www.udemy.com/topic/xero/' },
            { name: 'SAP FICO', uri: 'https://www.udemy.com/topic/fico/' },
          ]
        },
        {
          name: 'Compliance', uri: 'https://www.udemy.com/courses/finance-and-accounting/compliance/', subs: [
            { name: 'Anti-Money Laundering', uri: 'https://www.udemy.com/topic/anti-money-laundering/' },
            { name: 'Risk Management', uri: 'https://www.udemy.com/topic/risk-management/' },
            { name: 'Sarbanes-Oxley (SOX)', uri: 'https://www.udemy.com/topic/sarbanes-oxley/' },
            { name: 'CAMS Certification', uri: 'https://www.udemy.com/topic/cams-certification/' },
            { name: 'Internal Auditing', uri: 'https://www.udemy.com/topic/internal-auditing/' },
            { name: 'Trade and Commerce', uri: 'https://www.udemy.com/topic/internal-auditing/' },
            { name: 'Accounting', uri: 'https://www.udemy.com/topic/accounting/' },
            { name: 'Financial Risk Manager (FRM)', uri: 'https://www.udemy.com/topic/financial-risk-manager-frm/' },
            { name: 'IFRS', uri: 'https://www.udemy.com/topic/ifrs/' },
          ]
        },
        {
          name: 'Cryptocurrency & Blockchain', uri: 'https://www.udemy.com/courses/finance-and-accounting/cryptocurrency-and-blockchain/', subs: [
            { name: 'Cryptocurrency', uri: 'https://www.udemy.com/topic/cryptocurrency/' },
            { name: 'Bitcoin', uri: 'https://www.udemy.com/topic/bitcoin/' },
            { name: 'Blockchain', uri: 'https://www.udemy.com/topic/blockchain/' },
            { name: 'Personal Finance', uri: 'https://www.udemy.com/topic/personal-finance/' },
            { name: 'Day Trading', uri: 'https://www.udemy.com/topic/day-trading/' },
            { name: 'NFT (Non-Fungible Tokens)', uri: 'https://www.udemy.com/topic/nft-non-fungible-tokens/' },
            { name: 'Algorithmic Trading', uri: 'https://www.udemy.com/topic/algorithmic-trading/' },
            { name: 'Bitcoin Trading', uri: 'https://www.udemy.com/topic/bitcoin-trading/' },
            { name: 'Technical Analysis', uri: 'https://www.udemy.com/topic/technical-analysis/' },
          ]
        },
        {
          name: 'Economics', uri: 'https://www.udemy.com/courses/finance-and-accounting/economics/', subs: [
            { name: 'Microeconomics', uri: 'https://www.udemy.com/topic/microeconomics/' },
            { name: 'Stata', uri: 'https://www.udemy.com/topic/stata/' },
            { name: 'Macroeconomics', uri: 'https://www.udemy.com/topic/macroeconomics/' },
            { name: 'Finance Fundamentals', uri: 'https://www.udemy.com/topic/finance/' },
            { name: 'Entrepreneurship Fundamentals', uri: 'https://www.udemy.com/topic/entrepreneurship/' },
            { name: 'Regression Analysis', uri: 'https://www.udemy.com/topic/regression-analysis/' },
            { name: 'Econometrics', uri: 'https://www.udemy.com/topic/econometrics/' },
            { name: 'Data Visualization', uri: 'https://www.udemy.com/topic/econometrics/' },
          ]
        },
        {
          name: 'Finance', uri: 'https://www.udemy.com/courses/finance-and-accounting/finance-management/', subs: [
            { name: 'Personal Finance', uri: 'https://www.udemy.com/topic/personal-finance/' },
            { name: 'Investment Banking', uri: 'https://www.udemy.com/topic/investment-banking/' },
            { name: 'CFA', uri: 'https://www.udemy.com/topic/cfa/' },
            { name: 'Finance Fundamentals', uri: 'https://www.udemy.com/topic/finance/' },
            { name: 'Banking', uri: 'https://www.udemy.com/topic/banking/' },
            { name: 'Financial Management', uri: 'https://www.udemy.com/topic/financial-management/' },
            { name: 'Corporate Finance', uri: 'https://www.udemy.com/topic/corporate-finance/' },
            { name: 'Financial Analysis', uri: 'https://www.udemy.com/topic/financial-analysis/' },
            { name: 'Private Equity', uri: 'https://www.udemy.com/topic/private-equity/' },
          ]
        },
        {
          name: 'Finance Cert & Exam Prep', uri: 'https://www.udemy.com/courses/finance-and-accounting/finance-certification-and-exam-prep/', subs: [
            { name: 'CFA', uri: 'https://www.udemy.com/topic/cfa/' },
            { name: 'Certified Management Accountant (CMA)', uri: 'https://www.udemy.com/topic/cma/' },
            { name: 'Quantitative Finance', uri: 'https://www.udemy.com/topic/quantitative-finance/' },
            { name: 'Financial Management', uri: 'https://www.udemy.com/topic/financial-management/' },
            { name: 'ACCA', uri: 'https://www.udemy.com/topic/acca/' },
            { name: 'Corporate Finance', uri: 'https://www.udemy.com/topic/corporate-finance/' },
            { name: 'Stock Trading', uri: 'https://www.udemy.com/topic/stock-trading/' },
            { name: 'Financial Markets', uri: 'https://www.udemy.com/topic/financial-market/' },
            { name: 'ANBIMA Certification', uri: 'https://www.udemy.com/topic/anbima-certification/' },
          ]
        },
        {
          name: 'Financial Modeling & Analysis', uri: 'https://www.udemy.com/courses/finance-and-accounting/financial-modeling-and-analysis/', subs: [
            { name: 'Financial Analysis', uri: 'https://www.udemy.com/topic/financial-analysis/' },
            { name: 'Financial Modeling', uri: 'https://www.udemy.com/topic/financial-modeling/' },
            { name: 'Finance Fundamentals', uri: 'https://www.udemy.com/topic/finance/' },
            { name: 'Excel', uri: 'https://www.udemy.com/topic/excel/' },
            { name: 'Investing', uri: 'https://www.udemy.com/topic/investing/' },
            { name: 'Python', uri: 'https://www.udemy.com/topic/investing/' },
            { name: 'Accounting', uri: 'https://www.udemy.com/topic/accounting/' },
            { name: 'Investment Banking', uri: 'https://www.udemy.com/topic/investment-banking/' },
            { name: 'CFA', uri: 'https://www.udemy.com/topic/cfa/' },
          ]
        },
        {
          name: 'Investing & Trading', uri: 'https://www.udemy.com/courses/finance-and-accounting/investing-and-trading/', subs: [
            { name: 'Stock Trading', uri: 'https://www.udemy.com/topic/stock-trading/' },
            { name: 'Technical Analysis', uri: 'https://www.udemy.com/topic/technical-analysis/' },
            { name: 'Investing', uri: 'https://www.udemy.com/topic/investing/' },
            { name: 'Forex', uri: 'https://www.udemy.com/topic/forex/' },
            { name: 'Day Trading', uri: 'https://www.udemy.com/topic/day-trading/' },
            { name: 'Cryptocurrency', uri: 'https://www.udemy.com/topic/cryptocurrency/' },
            { name: 'Algorithmic Trading', uri: 'https://www.udemy.com/topic/algorithmic-trading/' },
            { name: 'Options Trading', uri: 'https://www.udemy.com/topic/options-trading/' },
            { name: 'Financial Trading', uri: 'https://www.udemy.com/topic/financial-trading/' },
          ]
        },
        {
          name: 'Money Management Tools', uri: 'https://www.udemy.com/courses/finance-and-accounting/money-management-tools/', subs: [
            { name: 'QuickBooks Online', uri: 'https://www.udemy.com/topic/quickbooks-online/' },
            { name: 'QuickBooks', uri: 'https://www.udemy.com/topic/quickbooks/' },
            { name: 'SAP FICO', uri: 'https://www.udemy.com/topic/fico/' },
            { name: 'QuickBooks Pro', uri: 'https://www.udemy.com/topic/quickbooks-pro/' },
            { name: 'Excel', uri: 'https://www.udemy.com/topic/excel/' },
            { name: 'Bitcoin Trading', uri: 'https://www.udemy.com/topic/bitcoin-trading/' },
            { name: 'Xero', uri: 'https://www.udemy.com/topic/xero/' },
            { name: 'Excel Analytics', uri: 'https://www.udemy.com/topic/excel-analytics/' },
            { name: 'Financial Analysis', uri: 'https://www.udemy.com/topic/financial-analysis/' },
          ]
        },
        {
          name: 'Taxes', uri: 'https://www.udemy.com/courses/finance-and-accounting/taxes/', subs: [
            { name: 'Tax Preparation', uri: 'https://www.udemy.com/topic/tax-preparation/' },
            { name: 'Accounting', uri: 'https://www.udemy.com/topic/accounting/' },
            { name: 'Goods and Services Tax', uri: 'https://www.udemy.com/topic/goods-and-services-tax/' },
            { name: 'Home Business', uri: 'https://www.udemy.com/topic/home-business/' },
            { name: 'Value Added Tax (VAT)', uri: 'https://www.udemy.com/topic/value-added-tax-vat/' },
            { name: 'QuickBooks Online', uri: 'https://www.udemy.com/topic/quickbooks-online/' },
            { name: 'Financial Accounting', uri: 'https://www.udemy.com/topic/financial-accounting/' },
            { name: 'Entrepreneurship Fundamentals', uri: 'https://www.udemy.com/topic/entrepreneurship/' },
            { name: 'Excel Analytics', uri: 'https://www.udemy.com/topic/excel-analytics/' },
          ]
        },
        {
          name: 'Other Finance & Accounting', uri: 'https://www.udemy.com/courses/finance-and-accounting/other-finance-and-accounting/', subs: [
            { name: 'Technical Analysis', uri: 'https://www.udemy.com/topic/technical-analysis/' },
            { name: 'PowerPoint', uri: 'https://www.udemy.com/topic/powerpoint/' },
            { name: 'Stock Trading', uri: 'https://www.udemy.com/topic/stock-trading/' },
            { name: 'Passive Income', uri: 'https://www.udemy.com/topic/passive-income/' },
            { name: 'Financial Planning', uri: 'https://www.udemy.com/topic/financial-planning/' },
            { name: 'Credit Repair', uri: 'https://www.udemy.com/topic/credit-repair/' },
            { name: 'Coaching', uri: 'https://www.udemy.com/topic/coaching/' },
            { name: 'SAP Financial Accounting', uri: 'https://www.udemy.com/topic/sap-financial-accounting/' },
            { name: 'Personal Finance', uri: 'https://www.udemy.com/topic/personal-finance/' },
          ]
        },
      ]
    },
    {
      name: 'IT & Software', uri: 'https://www.udemy.com/courses/it-and-software/', subs: [
        {
          name: 'IT Certification', uri: 'https://www.udemy.com/courses/it-and-software/it-certification/', subs: [
            { name: 'AWS Certification', uri: 'https://www.udemy.com/topic/aws-certification/' },
            { name: 'Microsoft Certification', uri: 'https://www.udemy.com/topic/microsoft-certification/' },
            { name: 'AWS Certified Solutions Architect - Associate', uri: 'https://www.udemy.com/topic/aws-certified-solutions-architect-associate/' },
            { name: 'AWS Certified Cloud Practitioner', uri: 'https://www.udemy.com/topic/aws-certified-cloud-practitioner/' },
            { name: 'CompTIA A+', uri: 'https://www.udemy.com/topic/comptia-a/' },
            { name: 'Amazon AWS', uri: 'https://www.udemy.com/topic/amazon-aws/' },
            { name: 'Cisco CCNA', uri: 'https://www.udemy.com/topic/cisco-ccna/' },
            { name: 'CompTIA Security+', uri: 'https://www.udemy.com/topic/comptia-security/' },
            { name: 'Microsoft AZ-900', uri: 'https://www.udemy.com/topic/microsoft-az-900/' },
          ]
        },
        {
          name: 'Network & Security', uri: 'https://www.udemy.com/courses/it-and-software/network-and-security/', subs: [
            { name: 'Ethical Hacking', uri: 'https://www.udemy.com/topic/ethical-hacking/' },
            { name: 'Cyber Security', uri: 'https://www.udemy.com/topic/cyber-security/' },
            { name: 'Network Security', uri: 'https://www.udemy.com/topic/network-security/' },
            { name: 'IT Networking Fundamentals', uri: 'https://www.udemy.com/topic/it-networking-fundamentals/' },
            { name: 'Penetration Testing', uri: 'https://www.udemy.com/topic/penetration-testing/' },
            { name: 'CompTIA Network+', uri: 'https://www.udemy.com/topic/comptia-network/' },
            { name: 'Cisco CCNA', uri: 'https://www.udemy.com/topic/cisco-ccna/' },
            { name: 'CompTIA Security+', uri: 'https://www.udemy.com/topic/comptia-security/' },
            { name: 'Kubernetes', uri: 'https://www.udemy.com/topic/kubernetes/' },
          ]
        },
        {
          name: 'Hardware', uri: 'https://www.udemy.com/courses/it-and-software/hardware/', subs: [
            { name: 'PLC', uri: 'https://www.udemy.com/topic/plc/' },
            { name: 'Arduino', uri: 'https://www.udemy.com/topic/arduino/' },
            { name: 'Microcontroller', uri: 'https://www.udemy.com/topic/microcontroller/' },
            { name: 'Electronics', uri: 'https://www.udemy.com/topic/electronics/' },
            { name: 'Raspberry Pi', uri: 'https://www.udemy.com/topic/raspberry-pi/' },
            { name: 'Embedded Systems', uri: 'https://www.udemy.com/topic/embedded-systems/' },
            { name: 'Siemens TIA Portal', uri: 'https://www.udemy.com/topic/siemens-tia-portal/' },
            { name: 'FPGA', uri: 'https://www.udemy.com/topic/fpga/' },
            { name: 'Embedded C', uri: 'https://www.udemy.com/topic/embedded-c/' },
          ]
        },
        {
          name: 'Operating Systems & Servers', uri: 'https://www.udemy.com/courses/it-and-software/operating-systems/', subs: [
            { name: 'Linux', uri: 'https://www.udemy.com/topic/linux/' },
            { name: 'Linux Administration', uri: 'https://www.udemy.com/topic/linux-administration/' },
            { name: 'Windows Server', uri: 'https://www.udemy.com/topic/windows-server/' },
            { name: 'Shell Scripting', uri: 'https://www.udemy.com/topic/shell-scripting/' },
            { name: 'Active Directory', uri: 'https://www.udemy.com/topic/active-directory/' },
            { name: 'PowerShell', uri: 'https://www.udemy.com/topic/powershell/' },
            { name: 'Linux Command Line', uri: 'https://www.udemy.com/topic/linux-command-line/' },
            { name: 'VMware Vsphere', uri: 'https://www.udemy.com/topic/vmware-vsphere/' },
            { name: 'LPIC-1: Linux Administrator', uri: 'https://www.udemy.com/topic/lpic-1-linux-administrator/' },
          ]
        },
        {
          name: 'Other IT & Software', uri: 'https://www.udemy.com/courses/it-and-software/other-it-and-software/', subs: [
            { name: 'Python', uri: 'https://www.udemy.com/topic/python/' },
            { name: 'Kubernetes', uri: 'https://www.udemy.com/topic/kubernetes/' },
            { name: 'Docker', uri: 'https://www.udemy.com/topic/docker/' },
            { name: 'DevOps', uri: 'https://www.udemy.com/topic/devops/' },
            { name: 'Algorithms', uri: 'https://www.udemy.com/topic/algorithms/' },
            { name: 'Ansible', uri: 'https://www.udemy.com/topic/ansible/' },
            { name: 'Software Architecture', uri: 'https://www.udemy.com/topic/software-architecture/' },
            { name: 'Java', uri: 'https://www.udemy.com/topic/java/' },
            { name: 'React', uri: 'https://www.udemy.com/topic/react/' },
          ]
        },
      ]
    },
    {
      name: 'Office Productivity', uri: 'https://www.udemy.com/courses/office-productivity/', subs: [
        {
          name: 'Microsoft', uri: 'https://www.udemy.com/courses/office-productivity/microsoft/', subs: [
            { name: 'Excel', uri: 'https://www.udemy.com/topic/excel/' },
            { name: 'Excel VBA', uri: 'https://www.udemy.com/topic/excel-vba/' },
            { name: 'Excel Formulas and Functions', uri: 'https://www.udemy.com/topic/excel-formulas-and-functions/' },
            { name: 'PowerPoint', uri: 'https://www.udemy.com/topic/powerpoint/' },
            { name: 'Data Analysis', uri: 'https://www.udemy.com/topic/data-analysis/' },
            { name: 'Microsoft Power BI', uri: 'https://www.udemy.com/topic/microsoft-power-bi/' },
            { name: 'Microsoft Office', uri: 'https://www.udemy.com/topic/microsoft-office/' },
            { name: 'Pivot Tables', uri: 'https://www.udemy.com/topic/pivot-tables/' },
            { name: 'Microsoft Word', uri: 'https://www.udemy.com/topic/microsoft-word/' },
          ]
        },
        {
          name: 'Apple', uri: 'https://www.udemy.com/courses/office-productivity/apple/', subs: [
            { name: 'iMovie', uri: 'https://www.udemy.com/topic/imovie/' },
            { name: 'Mac Basics', uri: 'https://www.udemy.com/topic/mac-basics/' },
            { name: 'macOS', uri: 'https://www.udemy.com/topic/macos/' },
            { name: 'Numbers For Mac', uri: 'https://www.udemy.com/topic/numbers-for-mac/' },
            { name: 'Apple Keynote', uri: 'https://www.udemy.com/topic/apple-keynote/' },
            { name: 'Mac Pages', uri: 'https://www.udemy.com/topic/mac-pages/' },
            { name: 'Microsoft Word', uri: 'https://www.udemy.com/topic/microsoft-word/' },
            { name: 'Excel Dashboard', uri: 'https://www.udemy.com/topic/excel-dashboard/' },
            { name: 'Microsoft Office 365', uri: 'https://www.udemy.com/topic/microsoft-office-365/' },
          ]
        },
        {
          name: 'Google', uri: 'https://www.udemy.com/courses/office-productivity/google/', subs: [
            { name: 'Google Sheets', uri: 'https://www.udemy.com/topic/google-sheets/' },
            { name: 'Google Workspace (G Suite)', uri: 'https://www.udemy.com/topic/g-suite/' },
            { name: 'Google Drive', uri: 'https://www.udemy.com/topic/google-drive/' },
            { name: 'Google Apps', uri: 'https://www.udemy.com/topic/google-apps/' },
            { name: 'Google Data Studio', uri: 'https://www.udemy.com/topic/google-data-studio/' },
            { name: 'Gmail Productivity', uri: 'https://www.udemy.com/topic/gmail-productivity/' },
            { name: 'Excel', uri: 'https://www.udemy.com/topic/excel/' },
            { name: 'Google Office', uri: 'https://www.udemy.com/topic/google-office/' },
            { name: 'Google Forms', uri: 'https://www.udemy.com/topic/google-forms/' },
          ]
        },
        {
          name: 'SAP', uri: 'https://www.udemy.com/courses/office-productivity/sap/', subs: [
            { name: 'SAP S/4HANA', uri: 'https://www.udemy.com/topic/sap-s4hana/' },
            { name: 'SAP MM', uri: 'https://www.udemy.com/topic/sap-mm/' },
            { name: 'SAP ABAP', uri: 'https://www.udemy.com/topic/sap-abap/' },
            { name: 'SAP SD', uri: 'https://www.udemy.com/topic/sap-sd/' },
            { name: 'SAP Financial Accounting', uri: 'https://www.udemy.com/topic/sap-financial-accounting/' },
            { name: 'SAP HCM', uri: 'https://www.udemy.com/topic/sap-hcm/' },
            { name: 'Logistics Management', uri: 'https://www.udemy.com/topic/logistics-management/' },
            { name: 'B2B Sales', uri: 'https://www.udemy.com/topic/b2b-sales/' },
          ]
        },
        {
          name: 'Oracle', uri: 'https://www.udemy.com/courses/office-productivity/oracle/', subs: [
            { name: 'Oracle SQL', uri: 'https://www.udemy.com/topic/oracle-sql/' },
            { name: 'Oracle Database', uri: 'https://www.udemy.com/topic/oracle-database/' },
            { name: 'Pl/SQL', uri: 'https://www.udemy.com/topic/plsql/' },
            { name: 'Database Administration', uri: 'https://www.udemy.com/topic/database-administration/' },
            { name: 'Oracle Fusion HCM', uri: 'https://www.udemy.com/topic/oracle-fusion-hcm/' },
            { name: 'SQL', uri: 'https://www.udemy.com/topic/sql/' },
            { name: 'Oracle Primavera', uri: 'https://www.udemy.com/topic/oracle-primavera/' },
            { name: 'Oracle Data Integrator', uri: 'https://www.udemy.com/topic/oracle-data-integrator/' },
            { name: 'Oracle Business Intelligence', uri: 'https://www.udemy.com/topic/oracle-business-intelligence/' },
          ]
        },
        {
          name: 'Other Office Productivity', uri: 'https://www.udemy.com/courses/office-productivity/other-productivity/', subs: [
            { name: 'ServiceNow', uri: 'https://www.udemy.com/topic/servicenow/' },
            { name: 'Typing', uri: 'https://www.udemy.com/topic/typing/' },
            { name: 'QuickBooks Pro', uri: 'https://www.udemy.com/topic/quickbooks-pro/' },
            { name: 'Time Management', uri: 'https://www.udemy.com/topic/time-management/' },
            { name: 'Python', uri: 'https://www.udemy.com/topic/python/' },
            { name: 'Office Productivity', uri: 'https://www.udemy.com/topic/office-productivity/' },
            { name: 'Construction Estimation', uri: 'https://www.udemy.com/topic/construction-estimation/' },
            { name: 'QuickBooks', uri: 'https://www.udemy.com/topic/quickbooks/' },
            { name: 'Salesforce', uri: 'https://www.udemy.com/topic/salesforce/' },
          ]
        },
      ]
    },
    {
      name: 'Personal Development', uri: 'https://www.udemy.com/courses/personal-development/', subs: [
        {
          name: 'Personal Transformation', uri: 'https://www.udemy.com/courses/personal-development/personal-transformation/', subs: [
            { name: 'Personal Development', uri: 'https://www.udemy.com/topic/personal-development/' },
            { name: 'Life Coach Training', uri: 'https://www.udemy.com/topic/life-coaching/' },
            { name: 'Neuro-Linguistic Programming', uri: 'https://www.udemy.com/topic/neuro-linguistic-programming/' },
            { name: 'Mindfulness', uri: 'https://www.udemy.com/topic/mindfulness/' },
            { name: 'Life Purpose', uri: 'https://www.udemy.com/topic/life-purpose/' },
            { name: 'Meditation', uri: 'https://www.udemy.com/topic/meditation/' },
            { name: 'CBT', uri: 'https://www.udemy.com/topic/cbt/' },
            { name: 'Goal Setting', uri: 'https://www.udemy.com/topic/goal-setting/' },
          ]
        },
        {
          name: 'Personal Productivity', uri: 'https://www.udemy.com/courses/personal-development/productivity/', subs: [
            { name: 'Time Management', uri: 'https://www.udemy.com/topic/time-management/' },
            { name: 'Notion Workspace', uri: 'https://www.udemy.com/topic/notion-workspace/' },
            { name: 'Speed Reading', uri: 'https://www.udemy.com/topic/speed-reading/' },
            { name: 'Focus Mastery', uri: 'https://www.udemy.com/topic/focus-mastery/' },
            { name: 'Organization', uri: 'https://www.udemy.com/topic/organization/' },
            { name: 'Goal Setting', uri: 'https://www.udemy.com/topic/goal-setting/' },
            { name: 'Procrastination', uri: 'https://www.udemy.com/topic/procrastination/' },
            { name: 'Habits', uri: 'https://www.udemy.com/topic/habits/' },
          ]
        },
        {
          name: 'Leadership', uri: 'https://www.udemy.com/courses/personal-development/leadership/', subs: [
            { name: 'Management Skills', uri: 'https://www.udemy.com/topic/management-skills/' },
            { name: 'Manager Training', uri: 'https://www.udemy.com/topic/management-skills/' },
            { name: 'Communication Skills', uri: 'https://www.udemy.com/topic/communication-skills/' },
            { name: 'Public Speaking', uri: 'https://www.udemy.com/topic/public-speaking/' },
            { name: 'Conflict Management', uri: 'https://www.udemy.com/topic/conflict-management/' },
            { name: 'Relationship Building', uri: 'https://www.udemy.com/topic/relationship/' },
            { name: 'Listening Skills', uri: 'https://www.udemy.com/topic/listening-skills/' },
            { name: 'Emotional Intelligence', uri: 'https://www.udemy.com/topic/emotional-intelligence/' },
          ]
        },
        {
          name: 'Career Development', uri: 'https://www.udemy.com/courses/personal-development/career-development/', subs: [
            { name: 'Resume and CV Writing', uri: 'https://www.udemy.com/topic/resume/' },
            { name: 'Interviewing Skills', uri: 'https://www.udemy.com/topic/interviewing-skills/' },
            { name: 'Job Search', uri: 'https://www.udemy.com/topic/job-search/' },
            { name: 'LinkedIn', uri: 'https://www.udemy.com/topic/linkedin/' },
            { name: 'Personal Networking', uri: 'https://www.udemy.com/topic/personal-networking/' },
            { name: 'Voice Acting', uri: 'https://www.udemy.com/topic/voice-acting/' },
            { name: 'Business Communication', uri: 'https://www.udemy.com/topic/business-communication/' },
            { name: 'Business Writing', uri: 'https://www.udemy.com/topic/business-writing/' },
          ]
        },
        {
          name: 'Parenting & Relationships', uri: 'https://www.udemy.com/courses/personal-development/parenting-and-relationships/', subs: [
            { name: 'Parenting', uri: 'https://www.udemy.com/topic/parenting/' },
            { name: 'Relationship Building', uri: 'https://www.udemy.com/topic/relationship/' },
            { name: 'Child Psychology', uri: 'https://www.udemy.com/topic/child-psychology/' },
            { name: 'Love', uri: 'https://www.udemy.com/topic/love/' },
            { name: 'Counseling', uri: 'https://www.udemy.com/topic/counseling/' },
            { name: 'Early Childhood Education', uri: 'https://www.udemy.com/topic/early-childhood-education/' },
            { name: 'Marriage', uri: 'https://www.udemy.com/topic/marriage/' },
            { name: 'Life Coach Training', uri: 'https://www.udemy.com/topic/life-coaching/' },
            { name: 'Childhood Trauma Healing', uri: 'https://www.udemy.com/topic/childhood-trauma/' },
          ]
        },
        {
          name: 'Happiness', uri: 'https://www.udemy.com/courses/personal-development/happiness/', subs: [
            { name: 'Life Coach Training', uri: 'https://www.udemy.com/topic/life-coaching/' },
            { name: 'Childhood Trauma Healing', uri: 'https://www.udemy.com/topic/childhood-trauma/' },
            { name: 'Eye Movement Desensitization and Reprocessing (EMDR)', uri: 'https://www.udemy.com/topic/eye-movement-desensitization-and-reprocessing-emdr/' },
            { name: 'Positive Psychology', uri: 'https://www.udemy.com/topic/positive-psychology/' },
            { name: 'Law of Attraction', uri: 'https://www.udemy.com/topic/law-of-attraction/' },
            { name: 'CBT', uri: 'https://www.udemy.com/topic/cbt/' },
            { name: 'Mindfulness', uri: 'https://www.udemy.com/topic/mindfulness/' },
            { name: 'Life Purpose', uri: 'https://www.udemy.com/topic/life-purpose/' },
          ]
        },
        {
          name: 'Esoteric Practices', uri: 'https://www.udemy.com/courses/lifestyle/esoteric-practices/', subs: [
            { name: 'Reiki', uri: 'https://www.udemy.com/topic/reiki/' },
            { name: 'Energy Healing', uri: 'https://www.udemy.com/topic/energy-healing/' },
            { name: 'Tarot Reading', uri: 'https://www.udemy.com/topic/tarot-reading/' },
            { name: 'Psychic', uri: 'https://www.udemy.com/topic/psychic/' },
            { name: 'Hypnotherapy', uri: 'https://www.udemy.com/topic/hypnotherapy/' },
            { name: 'Crystal Energy', uri: 'https://www.udemy.com/topic/crystal-energy/' },
            { name: 'Chakra', uri: 'https://www.udemy.com/topic/chakra/' },
            { name: 'Shamanism', uri: 'https://www.udemy.com/topic/shamanism/' },
            { name: 'Spiritual Healing', uri: 'https://www.udemy.com/topic/spiritual-healing/' },
          ]
        },
        {
          name: 'Religion & Spirituality', uri: 'https://www.udemy.com/courses/personal-development/religion-and-spirituality/', subs: [
            { name: 'Spirituality', uri: 'https://www.udemy.com/topic/spirituality/' },
            { name: 'Mindfulness', uri: 'https://www.udemy.com/topic/mindfulness/' },
            { name: 'Life Coach Training', uri: 'https://www.udemy.com/topic/life-coaching/' },
            { name: 'Tarot Reading', uri: 'https://www.udemy.com/topic/tarot-reading/' },
            { name: 'Spiritual Healing', uri: 'https://www.udemy.com/topic/spiritual-healing/' },
            { name: 'Meditation', uri: 'https://www.udemy.com/topic/meditation/' },
            { name: 'Akashic Records', uri: 'https://www.udemy.com/topic/akashic-records/' },
            { name: 'Numerology', uri: 'https://www.udemy.com/topic/numerology/' },
            { name: 'Oracle Card Reading', uri: 'https://www.udemy.com/topic/oracle-card-reading/' },
          ]
        },
        {
          name: 'Personal Brand Building', uri: 'https://www.udemy.com/courses/personal-development/personal-brand-building/', subs: [
            { name: 'Personal Branding', uri: 'https://www.udemy.com/topic/personal-branding/' },
            { name: 'LinkedIn', uri: 'https://www.udemy.com/topic/linkedin/' },
            { name: 'Business Communication', uri: 'https://www.udemy.com/topic/business-communication/' },
            { name: 'Body Language', uri: 'https://www.udemy.com/topic/body-language/' },
            { name: 'Meetings', uri: 'https://www.udemy.com/topic/meetings/' },
            { name: 'Writing a Book', uri: 'https://www.udemy.com/topic/writing-a-book/' },
            { name: 'Communication Skills', uri: 'https://www.udemy.com/topic/communication-skills/' },
            { name: 'Digital Marketing', uri: 'https://www.udemy.com/topic/digital-marketing/' },
            { name: 'Voice Training', uri: 'https://www.udemy.com/topic/voice-training/' },
          ]
        },
        {
          name: 'Creativity', uri: 'https://www.udemy.com/courses/personal-development/creativity/', subs: [
            { name: 'Creative Writing', uri: 'https://www.udemy.com/topic/creative-writing/' },
            { name: 'Screenwriting', uri: 'https://www.udemy.com/topic/screenwriting/' },
            { name: 'Art Therapy', uri: 'https://www.udemy.com/topic/art-therapy/' },
            { name: 'Writing', uri: 'https://www.udemy.com/topic/writing/' },
            { name: 'Writing a Book', uri: 'https://www.udemy.com/topic/writing-a-book/' },
            { name: 'Storytelling', uri: 'https://www.udemy.com/topic/storytelling/' },
            { name: 'Drawing', uri: 'https://www.udemy.com/topic/drawing/' },
            { name: 'Aromatherapy', uri: 'https://www.udemy.com/topic/aromatherapy/' },
          ]
        },
        {
          name: 'Influence', uri: 'https://www.udemy.com/courses/personal-development/influence/', subs: [
            { name: 'Voice Training', uri: 'https://www.udemy.com/topic/voice-training/' },
            { name: 'Communication Skills', uri: 'https://www.udemy.com/topic/communication-skills/' },
            { name: 'Public Speaking', uri: 'https://www.udemy.com/topic/public-speaking/' },
            { name: 'Negotiation', uri: 'https://www.udemy.com/topic/negotiation/' },
            { name: 'Confidence', uri: 'https://www.udemy.com/topic/confidence/' },
            { name: 'Persuasion', uri: 'https://www.udemy.com/topic/persuasion/' },
            { name: 'Body Language', uri: 'https://www.udemy.com/topic/body-language/' },
            { name: 'Psychology', uri: 'https://www.udemy.com/topic/psychology-fundamentals/' },
            { name: 'Presentation Skills', uri: 'https://www.udemy.com/topic/presentation-skills/' },
          ]
        },
        {
          name: 'Self Esteem & Confidence', uri: 'https://www.udemy.com/courses/personal-development/self-esteem-and-confidence/', subs: [
            { name: 'Confidence', uri: 'https://www.udemy.com/topic/confidence/' },
            { name: 'Self-Esteem', uri: 'https://www.udemy.com/topic/self-esteem/' },
            { name: 'Fashion', uri: 'https://www.udemy.com/topic/fashion/' },
            { name: 'Communication Skills', uri: 'https://www.udemy.com/topic/communication-skills/' },
            { name: 'Personal Development', uri: 'https://www.udemy.com/topic/personal-development/' },
            { name: 'Art for Kids', uri: 'https://www.udemy.com/topic/art-for-kids/' },
            { name: 'Drawing', uri: 'https://www.udemy.com/topic/drawing/' },
            { name: 'Social Skills', uri: 'https://www.udemy.com/topic/social-skills/' },
            { name: 'Neuro-Linguistic Programming', uri: 'https://www.udemy.com/topic/neuro-linguistic-programming/' },
          ]
        },
        {
          name: 'Stress Management', uri: 'https://www.udemy.com/courses/personal-development/stress-management/', subs: [
            { name: 'Anger Management', uri: 'https://www.udemy.com/topic/anger-management/' },
            { name: 'Emotional Intelligence', uri: 'https://www.udemy.com/topic/emotional-intelligence/' },
            { name: 'Anxiety Management', uri: 'https://www.udemy.com/topic/anxiety-management/' },
            { name: 'EFT (Emotional FreedomTechnique)', uri: 'https://www.udemy.com/topic/eft/' },
            { name: 'Resilience', uri: 'https://www.udemy.com/topic/resilience/' },
            { name: 'Mindfulness', uri: 'https://www.udemy.com/topic/mindfulness/' },
            { name: 'Meditation', uri: 'https://www.udemy.com/topic/meditation/' },
            { name: 'Ayurveda', uri: 'https://www.udemy.com/topic/ayurvedic-medicine/' },
          ]
        },
        {
          name: 'Memory & Study Skills', uri: 'https://www.udemy.com/courses/personal-development/memory/', subs: [
            { name: 'Memory', uri: 'https://www.udemy.com/topic/memory/' },
            { name: 'Speed Reading', uri: 'https://www.udemy.com/topic/speed-reading/' },
            { name: 'Learning Strategies', uri: 'https://www.udemy.com/topic/learning-strategies/' },
            { name: 'Study Skills', uri: 'https://www.udemy.com/topic/study-skills/' },
            { name: 'Focus Mastery', uri: 'https://www.udemy.com/topic/focus-mastery/' },
            { name: 'Mind Mapping', uri: 'https://www.udemy.com/topic/mind-mapping/' },
            { name: 'Learning Disability', uri: 'https://www.udemy.com/topic/learning-disability/' },
            { name: 'Personal Development', uri: 'https://www.udemy.com/topic/personal-development/' },
            { name: 'Personal Productivity', uri: 'https://www.udemy.com/topic/personal-productivity/' },
          ]
        },
        {
          name: 'Motivation', uri: 'https://www.udemy.com/courses/personal-development/motivation/', subs: [
            { name: 'Neuroplasticity', uri: 'https://www.udemy.com/topic/neuroplasticity/' },
            { name: 'Procrastination', uri: 'https://www.udemy.com/topic/procrastination/' },
            { name: 'Neuro-Linguistic Programming', uri: 'https://www.udemy.com/topic/neuro-linguistic-programming/' },
            { name: 'Personal Success', uri: 'https://www.udemy.com/topic/personal-success/' },
            { name: 'Goal Setting', uri: 'https://www.udemy.com/topic/goal-setting/' },
            { name: 'Neuroscience', uri: 'https://www.udemy.com/topic/neuroscience/' },
            { name: 'Habits', uri: 'https://www.udemy.com/topic/habits/' },
            { name: 'Confidence', uri: 'https://www.udemy.com/topic/confidence/' },
          ]
        },
        {
          name: 'Other Personal Development', uri: 'https://www.udemy.com/courses/personal-development/other-personal-development/', subs: [
            { name: 'Freight Broker', uri: 'https://www.udemy.com/topic/freight-broker/' },
            { name: 'American Accent', uri: 'https://www.udemy.com/topic/american-accent/' },
            { name: 'Car Repair', uri: 'https://www.udemy.com/topic/car-repair/' },
            { name: 'English Pronunciation', uri: 'https://www.udemy.com/topic/english-pronunciation/' },
            { name: 'French Language', uri: 'https://www.udemy.com/topic/french-language/' },
            { name: 'Handwriting Analysis', uri: 'https://www.udemy.com/topic/handwriting-analysis/' },
            { name: 'Contract Law', uri: 'https://www.udemy.com/topic/contract-law/' },
            { name: 'Public Speaking', uri: 'https://www.udemy.com/topic/public-speaking/' },
            { name: 'Meditation', uri: 'https://www.udemy.com/topic/meditation/' },
          ]
        },
      ]
    },
    {
      name: 'Design', uri: 'https://www.udemy.com/courses/design/', subs: [
        {
          name: 'Web Design', uri: 'https://www.udemy.com/courses/design/web-design/', subs: [
            { name: 'WordPress', uri: 'https://www.udemy.com/topic/wordpress/' },
            { name: 'CSS', uri: 'https://www.udemy.com/topic/css/' },
            { name: 'Mobile App Design', uri: 'https://www.udemy.com/topic/mobile-app-design/' },
            { name: 'HTML', uri: 'https://www.udemy.com/topic/html/' },
            { name: 'Photoshop', uri: 'https://www.udemy.com/topic/photoshop/' },
            { name: 'HTML5', uri: 'https://www.udemy.com/topic/html5/' },
            { name: 'Adobe XD', uri: 'https://www.udemy.com/topic/adobe-xd/' },
            { name: 'User Interface', uri: 'https://www.udemy.com/topic/user-interface/' },
          ]
        },
        {
          name: 'Graphic Design & Illustration', uri: 'https://www.udemy.com/courses/design/graphic-design-and-illustration/', subs: [
            { name: 'Graphic Design', uri: 'https://www.udemy.com/topic/graphic-design/' },
            { name: 'Photoshop', uri: 'https://www.udemy.com/topic/photoshop/' },
            { name: 'Adobe Illustrator', uri: 'https://www.udemy.com/topic/adobe-illustrator/' },
            { name: 'Drawing', uri: 'https://www.udemy.com/topic/drawing/' },
            { name: 'Digital Painting', uri: 'https://www.udemy.com/topic/digital-painting/' },
            { name: 'InDesign', uri: 'https://www.udemy.com/topic/indesign/' },
            { name: 'Canva', uri: 'https://www.udemy.com/topic/canva/' },
            { name: 'Character Design', uri: 'https://www.udemy.com/topic/character-design/' },
            { name: 'Design Theory', uri: 'https://www.udemy.com/topic/design-theory/' },
          ]
        },
        {
          name: 'Design Tools', uri: 'https://www.udemy.com/courses/design/design-tools/', subs: [
            { name: 'Photoshop', uri: 'https://www.udemy.com/topic/photoshop/' },
            { name: 'After Effects', uri: 'https://www.udemy.com/topic/after-effects/' },
            { name: 'AutoCAD', uri: 'https://www.udemy.com/topic/autocad/' },
            { name: 'Procreate Digital Illustration App', uri: 'https://www.udemy.com/topic/procreate-ipad-app/' },
            { name: 'Adobe Illustrator', uri: 'https://www.udemy.com/topic/adobe-illustrator/' },
            { name: 'Adobe Premiere', uri: 'https://www.udemy.com/topic/adobe-premiere/' },
            { name: 'Digital Art', uri: 'https://www.udemy.com/topic/digital-art/' },
            { name: 'Affinity Designer', uri: 'https://www.udemy.com/topic/affinity-designer/' },
            { name: 'SOLIDWORKS', uri: 'https://www.udemy.com/topic/solidworks/' },
          ]
        },
        {
          name: 'User Experience Design', uri: 'https://www.udemy.com/courses/design/user-experience/', subs: [
            { name: 'User Interface', uri: 'https://www.udemy.com/topic/user-interface/' },
            { name: 'Adobe XD', uri: 'https://www.udemy.com/topic/adobe-xd/' },
            { name: 'Figma', uri: 'https://www.udemy.com/topic/figma/' },
            { name: 'Web Design', uri: 'https://www.udemy.com/topic/web-design/' },
            { name: 'Product Design', uri: 'https://www.udemy.com/topic/product-design/' },
            { name: 'Mobile App Design', uri: 'https://www.udemy.com/topic/mobile-app-design/' },
            { name: 'Usability Testing', uri: 'https://www.udemy.com/topic/usability-testing/' },
            { name: 'Web Accessibility', uri: 'https://www.udemy.com/topic/web-accessibility/' },
          ]
        },
        {
          name: 'Game Design', uri: 'https://www.udemy.com/courses/design/game-design/', subs: [
            { name: 'Unreal Engine', uri: 'https://www.udemy.com/topic/unreal-engine/' },
            { name: 'Pixel Art', uri: 'https://www.udemy.com/topic/pixel-art/' },
            { name: 'Unity', uri: 'https://www.udemy.com/topic/unity/' },
            { name: 'Game Development Fundamentals', uri: 'https://www.udemy.com/topic/game-development/' },
            { name: 'Digital Painting', uri: 'https://www.udemy.com/topic/digital-painting/' },
            { name: 'Blender', uri: 'https://www.udemy.com/topic/blender/' },
            { name: 'Drawing', uri: 'https://www.udemy.com/topic/drawing/' },
            { name: 'Level Design', uri: 'https://www.udemy.com/topic/level-design/' },
          ]
        },
        {
          name: 'Design Thinking', uri: 'https://www.udemy.com/courses/design/design-thinking/', subs: [
            { name: 'Anime', uri: 'https://www.udemy.com/topic/anime/' },
            { name: 'User Experience Design', uri: 'https://www.udemy.com/topic/user-experience-design/' },
            { name: 'SOLIDWORKS', uri: 'https://www.udemy.com/topic/solidworks/' },
            { name: 'Digital Painting', uri: 'https://www.udemy.com/topic/digital-painting/' },
            { name: 'Gamification', uri: 'https://www.udemy.com/topic/gamification/' },
            { name: 'VLSI', uri: 'https://www.udemy.com/topic/vlsi/' },
            { name: 'Design Pattern', uri: 'https://www.udemy.com/topic/design-pattern/' },
            { name: 'Drawing', uri: 'https://www.udemy.com/topic/drawing/' },
          ]
        },
        {
          name: '3D & Animation', uri: 'https://www.udemy.com/courses/design/3d-and-animation/', subs: [
            { name: 'Blender', uri: 'https://www.udemy.com/topic/blender/' },
            { name: '3D Modeling', uri: 'https://www.udemy.com/topic/3d-modeling/' },
            { name: 'After Effects', uri: 'https://www.udemy.com/topic/after-effects/' },
            { name: 'Motion Graphics', uri: 'https://www.udemy.com/topic/motion-graphics/' },
            { name: '3D Animation', uri: 'https://www.udemy.com/topic/3d-animation/' },
            { name: 'zBrush', uri: 'https://www.udemy.com/topic/zbrush/' },
            { name: 'Character Design', uri: 'https://www.udemy.com/topic/character-design/' },
            { name: 'Fusion 360', uri: 'https://www.udemy.com/topic/fusion-360/' },
            { name: 'Animation', uri: 'https://www.udemy.com/topic/animation/' },
          ]
        },
        {
          name: 'Fashion Design', uri: 'https://www.udemy.com/courses/design/fashion/', subs: [
            { name: 'Fashion', uri: 'https://www.udemy.com/topic/fashion/' },
            { name: 'Sewing', uri: 'https://www.udemy.com/topic/sewing/' },
            { name: 'Adobe Illustrator', uri: 'https://www.udemy.com/topic/adobe-illustrator/' },
            { name: 'Jewelry Design', uri: 'https://www.udemy.com/topic/jewelry-design/' },
            { name: 'Photoshop', uri: 'https://www.udemy.com/topic/photoshop/' },
            { name: 'T-Shirt Design', uri: 'https://www.udemy.com/topic/t-shirt-design/' },
            { name: 'Anime', uri: 'https://www.udemy.com/topic/anime/' },
            { name: 'Jewelry Making', uri: 'https://www.udemy.com/topic/jewelry-making/' },
          ]
        },
        {
          name: 'Architectural Design', uri: 'https://www.udemy.com/courses/design/architectural-design/', subs: [
            { name: 'AutoCAD', uri: 'https://www.udemy.com/topic/autocad/' },
            { name: 'Revit', uri: 'https://www.udemy.com/topic/revit/' },
            { name: 'Blender', uri: 'https://www.udemy.com/topic/blender/' },
            { name: 'SketchUp', uri: 'https://www.udemy.com/topic/sketchup/' },
            { name: 'ARCHICAD', uri: 'https://www.udemy.com/topic/archicad/' },
            { name: '3D Animation', uri: 'https://www.udemy.com/topic/3d-animation/' },
            { name: 'LEED', uri: 'https://www.udemy.com/topic/leed/' },
            { name: 'Landscape Architecture', uri: 'https://www.udemy.com/topic/landscape-architecture/' },
          ]
        },
        {
          name: 'Interior Design', uri: 'https://www.udemy.com/courses/design/interior-design/', subs: [
            { name: 'SketchUp', uri: 'https://www.udemy.com/topic/sketchup/' },
            { name: 'Color Theory', uri: 'https://www.udemy.com/topic/color-theory/' },
            { name: 'HVAC', uri: 'https://www.udemy.com/topic/hvac/' },
            { name: 'Lighting Design', uri: 'https://www.udemy.com/topic/lighting-design/' },
            { name: 'Minimalist Lifestyle', uri: 'https://www.udemy.com/topic/minimalist-lifestyle/' },
            { name: 'Blender', uri: 'https://www.udemy.com/topic/blender/' },
            { name: '3ds Max', uri: 'https://www.udemy.com/topic/3ds-max/' },
            { name: 'Electrical Design', uri: 'https://www.udemy.com/topic/electrical-design/' },
          ]
        },
        {
          name: 'Other Design', uri: 'https://www.udemy.com/courses/design/other-design/', subs: [
            { name: 'Character Design', uri: 'https://www.udemy.com/topic/character-design/' },
            { name: 'Electronics', uri: 'https://www.udemy.com/topic/electronics/' },
            { name: 'Drawing', uri: 'https://www.udemy.com/topic/drawing/' },
            { name: 'Circuit Design', uri: 'https://www.udemy.com/topic/circuit-design/' },
            { name: 'Comic Book Creation', uri: 'https://www.udemy.com/topic/comic-book-creation/' },
            { name: 'Perspective Drawing', uri: 'https://www.udemy.com/topic/perspective-drawing/' },
            { name: 'Digital Painting', uri: 'https://www.udemy.com/topic/digital-painting/' },
            { name: 'Portraiture', uri: 'https://www.udemy.com/topic/portraiture/' },
            { name: 'Geometric Dimensioning and Tolerancing (GD&T)', uri: 'https://www.udemy.com/topic/geometric-dimensioning-and-tolerancing-gdt/' },
          ]
        },
      ]
    },
    {
      name: 'Marketing', uri: 'https://www.udemy.com/courses/marketing/', subs: [
        {
          name: 'Digital Marketing', uri: 'https://www.udemy.com/courses/marketing/digital-marketing/', subs: [
            { name: 'Google Ads (Adwords)', uri: 'https://www.udemy.com/topic/google-ads/' },
            { name: 'Social Media Marketing', uri: 'https://www.udemy.com/topic/social-media-marketing/' },
            { name: 'Marketing Strategy', uri: 'https://www.udemy.com/topic/marketing-strategy/' },
            { name: 'Google Ads (AdWords) Certification', uri: 'https://www.udemy.com/topic/google-ads-certification/' },
            { name: 'Internet Marketing', uri: 'https://www.udemy.com/topic/internet-marketing/' },
            { name: 'YouTube Marketing', uri: 'https://www.udemy.com/topic/youtube-marketing/' },
            { name: 'Email Marketing', uri: 'https://www.udemy.com/topic/email-marketing/' },
            { name: 'Google Analytics', uri: 'https://www.udemy.com/topic/google-analytics/' },
          ]
        },
        {
          name: 'Search Engine Optimization', uri: 'https://www.udemy.com/courses/marketing/search-engine-optimization/', subs: [
            { name: 'SEO', uri: 'https://www.udemy.com/topic/seo/' },
            { name: 'WordPress', uri: 'https://www.udemy.com/topic/wordpress/' },
            { name: 'Keyword Research', uri: 'https://www.udemy.com/topic/keyword-research/' },
            { name: 'SEO Audit', uri: 'https://www.udemy.com/topic/seo-audit/' },
            { name: 'Local SEO', uri: 'https://www.udemy.com/topic/local-seo/' },
            { name: 'Google my Business', uri: 'https://www.udemy.com/topic/google-my-business/' },
            { name: 'Link Building', uri: 'https://www.udemy.com/topic/link-building/' },
            { name: 'Google Search Console', uri: 'https://www.udemy.com/topic/google-search-console/' },
            { name: 'Google Ads (Adwords)', uri: 'https://www.udemy.com/topic/google-ads/' },
          ]
        },
        {
          name: 'Social Media Marketing', uri: 'https://www.udemy.com/courses/marketing/social-media-marketing/', subs: [
            { name: 'Instagram Marketing', uri: 'https://www.udemy.com/topic/instagram-marketing/' },
            { name: 'Facebook Ads', uri: 'https://www.udemy.com/topic/facebook-ads/' },
            { name: 'Facebook Marketing', uri: 'https://www.udemy.com/topic/facebook-ads/' },
            { name: 'PPC Advertising', uri: 'https://www.udemy.com/topic/ppc-advertising/' },
            { name: 'Social Media Management', uri: 'https://www.udemy.com/topic/social-media-management/' },
            { name: 'TikTok Marketing', uri: 'https://www.udemy.com/topic/tiktok-marketing/' },
            { name: 'LinkedIn', uri: 'https://www.udemy.com/topic/linkedin/' },
            { name: 'Pinterest Marketing', uri: 'https://www.udemy.com/topic/pinterest-marketing/' },
          ]
        },
        {
          name: 'Branding', uri: 'https://www.udemy.com/courses/marketing/branding/', subs: [
            { name: 'Business Branding', uri: 'https://www.udemy.com/topic/business-branding/' },
            { name: 'YouTube Audience Growth', uri: 'https://www.udemy.com/topic/business-branding/' },
            { name: 'YouTube Marketing', uri: 'https://www.udemy.com/topic/youtube-marketing/' },
            { name: 'Personal Branding', uri: 'https://www.udemy.com/topic/personal-branding/' },
            { name: 'Brand Management', uri: 'https://www.udemy.com/topic/brand-management/' },
            { name: 'Marketing Strategy', uri: 'https://www.udemy.com/topic/marketing-strategy/' },
            { name: 'Canva', uri: 'https://www.udemy.com/topic/canva/' },
            { name: 'Customer Service', uri: 'https://www.udemy.com/topic/customer-service/' },
            { name: 'Graphic Design', uri: 'https://www.udemy.com/topic/graphic-design/' },
          ]
        },
        {
          name: 'Marketing Fundamentals', uri: 'https://www.udemy.com/courses/marketing/marketing-fundamentals/', subs: [
            { name: 'Copywriting', uri: 'https://www.udemy.com/topic/copywriting/' },
            { name: 'Marketing Strategy', uri: 'https://www.udemy.com/topic/marketing-strategy/' },
            { name: 'Marketing Management', uri: 'https://www.udemy.com/topic/marketing-management/' },
            { name: 'Event Planning', uri: 'https://www.udemy.com/topic/event-planning/' },
            { name: 'Marketing Analytics', uri: 'https://www.udemy.com/topic/marketing-analytics/' },
            { name: 'Neuromarketing', uri: 'https://www.udemy.com/topic/neuromarketing/' },
            { name: 'Marketing Plan', uri: 'https://www.udemy.com/topic/marketing-plan/' },
            { name: 'Marketing Psychology', uri: 'https://www.udemy.com/topic/marketing-psychology/' },
            { name: 'Sales Skills', uri: 'https://www.udemy.com/topic/sales-skills/' },
          ]
        },
        {
          name: 'Marketing Analytics & Automation', uri: 'https://www.udemy.com/courses/marketing/analytics-and-automation/', subs: [
            { name: 'Google Analytics', uri: 'https://www.udemy.com/topic/google-analytics/' },
            { name: 'Google Analytics Individual Qualification (IQ)', uri: 'https://www.udemy.com/topic/google-analytics-individual-qualification-iq/' },
            { name: 'Data Analysis', uri: 'https://www.udemy.com/topic/data-analysis/' },
            { name: 'Marketing Analytics', uri: 'https://www.udemy.com/topic/marketing-analytics/' },
            { name: 'Google Tag Manager', uri: 'https://www.udemy.com/topic/google-tag-manager/' },
            { name: 'SQL', uri: 'https://www.udemy.com/topic/sql/' },
            { name: 'Marketing Strategy', uri: 'https://www.udemy.com/topic/marketing-strategy/' },
            { name: 'Google Analytics Reports', uri: 'https://www.udemy.com/topic/google-analytics-reports/' },
            { name: 'Marketing Automation', uri: 'https://www.udemy.com/topic/marketing-automation/' },
          ]
        },
        {
          name: 'Public Relations', uri: 'https://www.udemy.com/courses/marketing/public-relations/', subs: [
            { name: 'Communication Skills', uri: 'https://www.udemy.com/topic/communication-skills/' },
            { name: 'Media Training', uri: 'https://www.udemy.com/topic/media-training/' },
            { name: 'Writing', uri: 'https://www.udemy.com/topic/writing/' },
            { name: 'Business Communication', uri: 'https://www.udemy.com/topic/business-communication/' },
            { name: 'Podcasting', uri: 'https://www.udemy.com/topic/podcasting/' },
            { name: 'Public Speaking', uri: 'https://www.udemy.com/topic/public-speaking/' },
            { name: 'Startup', uri: 'https://www.udemy.com/topic/startup/' },
            { name: 'Event Planning', uri: 'https://www.udemy.com/topic/event-planning/' },
          ]
        },
        {
          name: 'Advertising', uri: 'https://www.udemy.com/courses/marketing/advertising/', subs: [
            { name: 'Google Ads (Adwords)', uri: 'https://www.udemy.com/topic/google-ads/' },
            { name: 'Facebook Ads', uri: 'https://www.udemy.com/topic/facebook-ads/' },
            { name: 'Email Marketing', uri: 'https://www.udemy.com/topic/email-marketing/' },
            { name: 'Mailchimp', uri: 'https://www.udemy.com/topic/mailchimp/' },
            { name: 'Amazon PPC Advertising', uri: 'https://www.udemy.com/topic/amazon-ppc-advertising/' },
            { name: 'PPC Advertising', uri: 'https://www.udemy.com/topic/ppc-advertising/' },
            { name: 'LinkedIn', uri: 'https://www.udemy.com/topic/linkedin/' },
            { name: 'Facebook Marketing', uri: 'https://www.udemy.com/topic/facebook-ads/' },
            { name: 'Google Ads (AdWords) Certification', uri: 'https://www.udemy.com/topic/google-ads-certification/' },
          ]
        },
        {
          name: 'Video & Mobile Marketing', uri: 'https://www.udemy.com/courses/marketing/video-and-mobile-marketing/', subs: [
            { name: 'YouTube Marketing', uri: 'https://www.udemy.com/topic/youtube-marketing/' },
            { name: 'YouTube Audience Growth', uri: 'https://www.udemy.com/topic/youtube-audience-growth/' },
            { name: 'Video Creation', uri: 'https://www.udemy.com/topic/video-creation/' },
            { name: 'PowerPoint', uri: 'https://www.udemy.com/topic/powerpoint/' },
            { name: 'Video Editing', uri: 'https://www.udemy.com/topic/video-editing/' },
            { name: 'Video Marketing', uri: 'https://www.udemy.com/topic/video-marketing/' },
            { name: 'App Marketing', uri: 'https://www.udemy.com/topic/app-marketing/' },
            { name: 'App Store Optimization', uri: 'https://www.udemy.com/topic/app-store-optimization/' },
            { name: 'Live Streaming', uri: 'https://www.udemy.com/topic/live-streaming/' },
          ]
        },
        {
          name: 'Content Marketing', uri: 'https://www.udemy.com/courses/marketing/content-marketing/', subs: [
            { name: 'Copywriting', uri: 'https://www.udemy.com/topic/copywriting/' },
            { name: 'Blogging', uri: 'https://www.udemy.com/topic/blogging/' },
            { name: 'Content Writing', uri: 'https://www.udemy.com/topic/content-writing/' },
            { name: 'Writing', uri: 'https://www.udemy.com/topic/writing/' },
            { name: 'Content Creation', uri: 'https://www.udemy.com/topic/content-creation/' },
            { name: 'YouTube Marketing', uri: 'https://www.udemy.com/topic/youtube-marketing/' },
            { name: 'Business Writing', uri: 'https://www.udemy.com/topic/business-writing/' },
            { name: 'WordPress', uri: 'https://www.udemy.com/topic/wordpress/' },
          ]
        },
        {
          name: 'Growth Hacking', uri: 'https://www.udemy.com/courses/marketing/growth-hacking/', subs: [
            { name: 'Digital Marketing', uri: 'https://www.udemy.com/topic/digital-marketing/' },
            { name: 'Marketing Strategy', uri: 'https://www.udemy.com/topic/marketing-strategy/' },
            { name: 'App Marketing', uri: 'https://www.udemy.com/topic/app-marketing/' },
            { name: 'Lead Generation', uri: 'https://www.udemy.com/topic/lead-generation/' },
            { name: 'Facebook Ads', uri: 'https://www.udemy.com/topic/facebook-ads/' },
            { name: 'SEO', uri: 'https://www.udemy.com/topic/seo/' },
            { name: 'Passive Income', uri: 'https://www.udemy.com/topic/passive-income/' },
            { name: 'B2B Sales', uri: 'https://www.udemy.com/topic/b2b-sales/' },
          ]
        },
        {
          name: 'Affiliate Marketing', uri: 'https://www.udemy.com/courses/marketing/affiliate-marketing/', subs: [
            { name: 'ClickBank', uri: 'https://www.udemy.com/topic/clickbank/' },
            { name: 'Amazon Affiliate Marketing', uri: 'https://www.udemy.com/topic/amazon-affiliate-marketing/' },
            { name: 'SEO', uri: 'https://www.udemy.com/topic/seo/' },
            { name: 'CPA Marketing', uri: 'https://www.udemy.com/topic/cpa-marketing/' },
            { name: 'Home Business', uri: 'https://www.udemy.com/topic/home-business/' },
            { name: 'Network Marketing', uri: 'https://www.udemy.com/topic/home-business/' },
            { name: 'Teespring', uri: 'https://www.udemy.com/topic/teespring/' },
            { name: 'Marketing Strategy', uri: 'https://www.udemy.com/topic/marketing-strategy/' },
          ]
        },
        {
          name: 'Product Marketing', uri: 'https://www.udemy.com/courses/marketing/product-marketing/', subs: [
            { name: 'Marketing Plan', uri: 'https://www.udemy.com/topic/marketing-plan/' },
            { name: 'Facebook Ads', uri: 'https://www.udemy.com/topic/facebook-ads/' },
            { name: 'Amazon Kindle Direct Publishing (KDP)', uri: 'https://www.udemy.com/topic/amazon-kindle/' },
            { name: 'Self-Publishing', uri: 'https://www.udemy.com/topic/self-publishing/' },
            { name: 'Product Management', uri: 'https://www.udemy.com/topic/product-management/' },
            { name: 'SaaS', uri: 'https://www.udemy.com/topic/saas/' },
            { name: 'Voice-Over', uri: 'https://www.udemy.com/topic/voice-over/' },
            { name: 'Marketing Management', uri: 'https://www.udemy.com/topic/marketing-management/' },
            { name: 'Amazon PPC Advertising', uri: 'https://www.udemy.com/topic/amazon-ppc-advertising/' },
          ]
        },
        {
          name: 'Other Marketing', uri: 'https://www.udemy.com/courses/marketing/other-marketing/', subs: [
            { name: 'Copywriting', uri: 'https://www.udemy.com/topic/copywriting/' },
            { name: 'Google Ads (AdWords) Certification', uri: 'https://www.udemy.com/topic/google-ads-certification/' },
            { name: 'Conversion Rate Optimization', uri: 'https://www.udemy.com/topic/conversion-rate-optimization/' },
            { name: 'YouTube Audience Growth', uri: 'https://www.udemy.com/topic/business-branding/' },
            { name: 'Event Planning', uri: 'https://www.udemy.com/topic/event-planning/' },
            { name: 'Marketing Strategy', uri: 'https://www.udemy.com/topic/marketing-strategy/' },
            { name: 'Customer Experience Management', uri: 'https://www.udemy.com/topic/customer-experience-management/' },
            { name: 'Instagram Marketing', uri: 'https://www.udemy.com/topic/instagram-marketing/' },
            { name: 'Email Marketing', uri: 'https://www.udemy.com/topic/email-marketing/' },
          ]
        },
      ]
    },
    {
      name: 'Lifestyle', uri: 'https://www.udemy.com/courses/lifestyle/', subs: [
        {
          name: 'Arts & Crafts', uri: 'https://www.udemy.com/courses/lifestyle/arts-and-crafts/', subs: [
            { name: 'Drawing', uri: 'https://www.udemy.com/topic/drawing/' },
            { name: 'Watercolor Painting', uri: 'https://www.udemy.com/topic/watercolor-painting/' },
            { name: 'Sketching', uri: 'https://www.udemy.com/topic/sketching/' },
            { name: 'Painting', uri: 'https://www.udemy.com/topic/painting/' },
            { name: 'Portraiture', uri: 'https://www.udemy.com/topic/portraiture/' },
            { name: 'Pencil Drawing', uri: 'https://www.udemy.com/topic/pencil-drawing/' },
            { name: 'Figure Drawing', uri: 'https://www.udemy.com/topic/figure-drawing/' },
            { name: 'Procreate Digital Illustration App', uri: 'https://www.udemy.com/topic/procreate-ipad-app/' },
            { name: 'Acrylic Painting', uri: 'https://www.udemy.com/topic/acrylic-painting/' },
          ]
        },
        {
          name: 'Beauty & Makeup', uri: 'https://www.udemy.com/courses/lifestyle/beauty-and-makeup/', subs: [
            { name: 'Beauty', uri: 'https://www.udemy.com/topic/beauty/' },
            { name: 'Makeup Artistry', uri: 'https://www.udemy.com/topic/makeup-artistry/' },
            { name: 'Nail Art', uri: 'https://www.udemy.com/topic/nail-art/' },
            { name: 'Skincare', uri: 'https://www.udemy.com/topic/skincare/' },
            { name: 'Cosmetics', uri: 'https://www.udemy.com/topic/cosmetics/' },
            { name: 'Hair Styling', uri: 'https://www.udemy.com/topic/hair-styling/' },
            { name: 'Tattoo Art', uri: 'https://www.udemy.com/topic/tattoo-art/' },
            { name: 'Facial Massage', uri: 'https://www.udemy.com/topic/facial-massage/' },
            { name: 'Perfume', uri: 'https://www.udemy.com/topic/perfume/' },
          ]
        },
        {
          name: 'Esoteric Practices', uri: 'https://www.udemy.com/courses/lifestyle/esoteric-practices/', subs: [
            { name: 'Reiki', uri: 'https://www.udemy.com/topic/reiki/' },
            { name: 'Energy Healing', uri: 'https://www.udemy.com/topic/energy-healing/' },
            { name: 'Tarot Reading', uri: 'https://www.udemy.com/topic/tarot-reading/' },
            { name: 'Psychic', uri: 'https://www.udemy.com/topic/psychic/' },
            { name: 'Hypnotherapy', uri: 'https://www.udemy.com/topic/hypnotherapy/' },
            { name: 'Crystal Energy', uri: 'https://www.udemy.com/topic/crystal-energy/' },
            { name: 'Chakra', uri: 'https://www.udemy.com/topic/chakra/' },
            { name: 'Shamanism', uri: 'https://www.udemy.com/topic/shamanism/' },
            { name: 'Spiritual Healing', uri: 'https://www.udemy.com/topic/spiritual-healing/' },
          ]
        },
        {
          name: 'Food & Beverage', uri: 'https://www.udemy.com/courses/lifestyle/food-and-beverage/', subs: [
            { name: 'Cooking', uri: 'https://www.udemy.com/topic/cooking/' },
            { name: 'Sourdough Bread Baking', uri: 'https://www.udemy.com/topic/sourdough-bread-baking/' },
            { name: 'Baking', uri: 'https://www.udemy.com/topic/baking/' },
            { name: 'Bread Baking', uri: 'https://www.udemy.com/topic/bread-baking/' },
            { name: 'Coffee', uri: 'https://www.udemy.com/topic/coffee/' },
            { name: 'Indian Cooking', uri: 'https://www.udemy.com/topic/indian-cooking/' },
            { name: 'Bartending', uri: 'https://www.udemy.com/topic/bartending/' },
            { name: 'Wine Appreciation and Oenology', uri: 'https://www.udemy.com/topic/wine/' },
            { name: 'Cake Baking', uri: 'https://www.udemy.com/topic/cake-baking/' },
          ]
        },
        {
          name: 'Gaming', uri: 'https://www.udemy.com/courses/lifestyle/gaming/', subs: [
            { name: 'Chess', uri: 'https://www.udemy.com/topic/chess/' },
            { name: 'Poker', uri: 'https://www.udemy.com/topic/poker/' },
            { name: 'eSports', uri: 'https://www.udemy.com/topic/esports/' },
            { name: 'Twitch', uri: 'https://www.udemy.com/topic/twitch/' },
            { name: 'Open Broadcaster', uri: 'https://www.udemy.com/topic/open-broadcaster/' },
            { name: 'League of Legends', uri: 'https://www.udemy.com/topic/league-of-legends/' },
            { name: 'Live Streaming', uri: 'https://www.udemy.com/topic/live-streaming/' },
            { name: 'Rubik\'s Cube', uri: 'https://www.udemy.com/topic/rubiks-cube/' },
          ]
        },
        {
          name: 'Home Improvement', uri: 'https://www.udemy.com/courses/lifestyle/home-improvement/', subs: [
            { name: 'Electricity', uri: 'https://www.udemy.com/topic/electricity/' },
            { name: 'Gardening', uri: 'https://www.udemy.com/topic/gardening/' },
            { name: 'Electrical Wiring', uri: 'https://www.udemy.com/topic/electrical-wiring/' },
            { name: 'Home Repair', uri: 'https://www.udemy.com/topic/home-repair/' },
            { name: 'Feng Shui', uri: 'https://www.udemy.com/topic/feng-shui/' },
            { name: 'Decluttering', uri: 'https://www.udemy.com/topic/decluttering/' },
            { name: 'Woodworking', uri: 'https://www.udemy.com/topic/woodworking/' },
            { name: 'Aquaponics', uri: 'https://www.udemy.com/topic/aquaponics/' },
            { name: 'Vastu Shastra', uri: 'https://www.udemy.com/topic/vastu-shastra/' },
          ]
        },
        {
          name: 'Pet Care & Training', uri: 'https://www.udemy.com/courses/lifestyle/pet-care-and-training/', subs: [
            { name: 'Dog Training', uri: 'https://www.udemy.com/topic/dog-training/' },
            { name: 'Dog Behavior', uri: 'https://www.udemy.com/topic/dog-behavior/' },
            { name: 'Dog Care', uri: 'https://www.udemy.com/topic/dog-care/' },
            { name: 'Pet Training', uri: 'https://www.udemy.com/topic/pet-training/' },
            { name: 'Horsemanship', uri: 'https://www.udemy.com/topic/horsemanship/' },
            { name: 'Pet Care', uri: 'https://www.udemy.com/topic/pet-care/' },
            { name: 'Animal Nutrition', uri: 'https://www.udemy.com/topic/animal-nutrition/' },
            { name: 'Cat Behavior', uri: 'https://www.udemy.com/topic/cat-behavior/' },
            { name: 'Acupuncture', uri: 'https://www.udemy.com/topic/acupuncture/' },
          ]
        },
        {
          name: 'Travel', uri: 'https://www.udemy.com/courses/lifestyle/travel/', subs: [
            { name: 'Digital Nomad', uri: 'https://www.udemy.com/topic/digital-nomad/' },
            { name: 'Travel Tips', uri: 'https://www.udemy.com/topic/travel-tips/' },
            { name: 'Airbnb Hosting', uri: 'https://www.udemy.com/topic/airbnb-hosting/' },
            { name: 'Travel Writing', uri: 'https://www.udemy.com/topic/airbnb-hosting/' },
            { name: 'Writing', uri: 'https://www.udemy.com/topic/writing/' },
            { name: 'Travel Hacking', uri: 'https://www.udemy.com/topic/travel-hacking/' },
            { name: 'Journaling', uri: 'https://www.udemy.com/topic/journaling/' },
            { name: 'Survival Skills', uri: 'https://www.udemy.com/topic/survival-skills/' },
            { name: 'iMovie', uri: 'https://www.udemy.com/topic/imovie/' },
          ]
        },
        {
          name: 'Other Lifestyle', uri: 'https://www.udemy.com/courses/lifestyle/other-lifestyle/', subs: [
            { name: 'Neuro-Linguistic Programming', uri: 'https://www.udemy.com/topic/neuro-linguistic-programming/' },
            { name: 'EFT (Emotional FreedomTechnique)', uri: 'https://www.udemy.com/topic/eft/' },
            { name: 'Meditation', uri: 'https://www.udemy.com/topic/meditation/' },
            { name: 'Permaculture', uri: 'https://www.udemy.com/topic/permaculture/' },
            { name: 'Emotional Intelligence', uri: 'https://www.udemy.com/topic/emotional-intelligence/' },
            { name: 'Color Theory', uri: 'https://www.udemy.com/topic/color-theory/' },
            { name: 'Acting', uri: 'https://www.udemy.com/topic/acting/' },
            { name: 'Herbalism', uri: 'https://www.udemy.com/topic/herbalism/' },
            { name: 'Life Coach Training', uri: 'https://www.udemy.com/topic/life-coaching/' },
          ]
        },
      ]
    },
    {
      name: 'Photography & Video', uri: 'https://www.udemy.com/courses/photography-and-video/', subs: [
        {
          name: 'Digital Photography', uri: 'https://www.udemy.com/courses/photography-and-video/digital-photography/', subs: [
            { name: 'Photography', uri: 'https://www.udemy.com/topic/photography/' },
            { name: 'iPhone Photography', uri: 'https://www.udemy.com/topic/iphone-photography/' },
            { name: 'DSLR', uri: 'https://www.udemy.com/topic/dslr/' },
            { name: 'Adobe Lightroom', uri: 'https://www.udemy.com/topic/adobe-lightroom/' },
            { name: 'Mobile Photography', uri: 'https://www.udemy.com/topic/mobile-photography/' },
            { name: 'Affinity Photo', uri: 'https://www.udemy.com/topic/affinity-photo/' },
            { name: 'GIMP', uri: 'https://www.udemy.com/topic/gimp/' },
            { name: 'Photoshop', uri: 'https://www.udemy.com/topic/photoshop/' },
          ]
        },
        {
          name: 'Photography', uri: 'https://www.udemy.com/courses/photography-and-video/photography-fundamentals/', subs: [
            { name: 'Affinity Photo', uri: 'https://www.udemy.com/topic/affinity-photo/' },
            { name: 'Digital Photography', uri: 'https://www.udemy.com/topic/digital-photography/' },
            { name: 'Photography Composition', uri: 'https://www.udemy.com/topic/photography-composition/' },
            { name: 'Food Photography', uri: 'https://www.udemy.com/topic/food-photography/' },
            { name: 'DSLR', uri: 'https://www.udemy.com/topic/dslr/' },
            { name: 'Mobile Photography', uri: 'https://www.udemy.com/topic/mobile-photography/' },
            { name: 'iPhone Photography', uri: 'https://www.udemy.com/topic/iphone-photography/' },
            { name: 'Landscape Photography', uri: 'https://www.udemy.com/topic/landscape-photography/' },
          ]
        },
        {
          name: 'Portrait Photography', uri: 'https://www.udemy.com/courses/photography-and-video/portraits/', subs: [
            { name: 'Posing', uri: 'https://www.udemy.com/topic/posing/' },
            { name: 'Photography Business', uri: 'https://www.udemy.com/topic/photography-business/' },
            { name: 'Photoshop Retouching', uri: 'https://www.udemy.com/topic/photoshop-retouching/' },
            { name: 'Photography', uri: 'https://www.udemy.com/topic/photography/' },
            { name: 'Photography Lighting', uri: 'https://www.udemy.com/topic/photography-lighting/' },
            { name: 'Family Portrait Photography', uri: 'https://www.udemy.com/topic/family-portrait-photography/' },
            { name: 'Photoshop', uri: 'https://www.udemy.com/topic/photoshop/' },
            { name: 'Adobe Lightroom', uri: 'https://www.udemy.com/topic/adobe-lightroom/' },
          ]
        },
        {
          name: 'Photography Tools', uri: 'https://www.udemy.com/courses/photography-and-video/photography-tools/', subs: [
            { name: 'D21', uri: 'd21' },
          ]
        },
        {
          name: 'Commercial Photography', uri: 'https://www.udemy.com/courses/photography-and-video/commercial-photography/', subs: [
            { name: 'D21', uri: 'd21' },
          ]
        },
        {
          name: 'Video Design', uri: 'https://www.udemy.com/courses/photography-and-video/video-design/', subs: [
            { name: 'D21', uri: 'd21' },
          ]
        },
        {
          name: 'Other Photography & Video', uri: 'https://www.udemy.com/courses/photography-and-video/other-photography-and-video/', subs: [
            { name: 'D21', uri: 'd21' },
          ]
        },
      ]
    },
    {
      name: 'Health & Fitness', uri: 'https://www.udemy.com/courses/health-and-fitness/', subs: [
        {
          name: 'Fitness', uri: 'https://www.udemy.com/courses/health-and-fitness/fitness/', subs: [
            { name: 'D21', uri: 'd21' },
          ]
        },
        {
          name: 'General Health', uri: 'https://www.udemy.com/courses/health-and-fitness/general-health/', subs: [
            { name: 'D21', uri: 'd21' },
          ]
        },
        {
          name: 'Sports', uri: 'https://www.udemy.com/courses/health-and-fitness/sports/', subs: [
            { name: 'D21', uri: 'd21' },
          ]
        },
        {
          name: 'Nutrition', uri: 'https://www.udemy.com/courses/health-and-fitness/nutrition/', subs: [
            { name: 'D21', uri: 'd21' },
          ]
        },
        {
          name: 'Yoga', uri: 'https://www.udemy.com/courses/health-and-fitness/yoga/', subs: [
            { name: 'D21', uri: 'd21' },
          ]
        },
        {
          name: 'Mental Health', uri: 'https://www.udemy.com/courses/health-and-fitness/mental-health/', subs: [
            { name: 'D21', uri: 'd21' },
          ]
        },
        {
          name: 'Dieting', uri: 'https://www.udemy.com/courses/health-and-fitness/dieting/', subs: [
            { name: 'D21', uri: 'd21' },
          ]
        },
        {
          name: 'Self Defense', uri: 'https://www.udemy.com/courses/health-and-fitness/self-defense/', subs: [
            { name: 'D21', uri: 'd21' },
          ]
        },
        {
          name: 'Safety & First Aid', uri: 'https://www.udemy.com/courses/health-and-fitness/safety-and-first-aid/', subs: [
            { name: 'D21', uri: 'd21' },
          ]
        },
        {
          name: 'Dance', uri: 'https://www.udemy.com/courses/health-and-fitness/dance/', subs: [
            { name: 'D21', uri: 'd21' },
          ]
        },
        {
          name: 'Meditation', uri: 'https://www.udemy.com/courses/health-and-fitness/meditation/', subs: [
            { name: 'D21', uri: 'd21' },
          ]
        },
        {
          name: 'Other Health & Fitness', uri: 'https://www.udemy.com/courses/health-and-fitness/other-health-and-fitness/', subs: [
            { name: 'D21', uri: 'd21' },
          ]
        },
      ]
    },
    {
      name: 'Music', uri: 'https://www.udemy.com/courses/music/', subs: [
        {
          name: 'Instruments', uri: 'https://www.udemy.com/courses/music/instruments/', subs: [
            { name: 'D21', uri: 'd21' },
          ]
        },
        {
          name: 'Music Production', uri: 'https://www.udemy.com/courses/music/production/', subs: [
            { name: 'D21', uri: 'd21' },
          ]
        },
        {
          name: 'Music Fundamentals', uri: 'https://www.udemy.com/courses/music/music-fundamentals/', subs: [
            { name: 'D21', uri: 'd21' },
          ]
        },
        {
          name: 'Vocal', uri: 'https://www.udemy.com/courses/music/vocal/', subs: [
            { name: 'D21', uri: 'd21' },
          ]
        },
        {
          name: 'Music Techniques', uri: 'https://www.udemy.com/courses/music/music-techniques/', subs: [
            { name: 'D21', uri: 'd21' },
          ]
        },
        {
          name: 'Music Software', uri: 'Music Software', subs: [
            { name: 'D21', uri: 'd21' },
          ]
        },
        {
          name: 'Other Music', uri: 'https://www.udemy.com/courses/music/other-music/', subs: [
            { name: 'D21', uri: 'd21' },
          ]
        },
      ]
    },
    {
      name: 'Teaching & Academics', uri: 'https://www.udemy.com/courses/teaching-and-academics/', subs: [
        {
          name: 'Engineering', uri: 'https://www.udemy.com/courses/teaching-and-academics/engineering/', subs: [
            { name: 'D21', uri: 'd21' },
          ]
        },
        {
          name: 'Humanities', uri: 'https://www.udemy.com/courses/teaching-and-academics/humanities/', subs: [
            { name: 'D21', uri: 'd21' },
          ]
        },
        {
          name: 'Math', uri: 'https://www.udemy.com/courses/teaching-and-academics/math/', subs: [
            { name: 'D21', uri: 'd21' },
          ]
        },
        {
          name: 'Science', uri: 'https://www.udemy.com/courses/teaching-and-academics/science/', subs: [
            { name: 'D21', uri: 'd21' },
          ]
        },
        {
          name: 'Online Education', uri: 'https://www.udemy.com/courses/teaching-and-academics/online-education/', subs: [
            { name: 'D21', uri: 'd21' },
          ]
        },
        {
          name: 'Social Science', uri: 'https://www.udemy.com/courses/teaching-and-academics/social-science/', subs: [
            { name: 'D21', uri: 'd21' },
          ]
        },
        {
          name: 'Language', uri: 'https://www.udemy.com/courses/teaching-and-academics/language/', subs: [
            { name: 'D21', uri: 'd21' },
          ]
        },
        {
          name: 'Teacher Training', uri: 'https://www.udemy.com/courses/teaching-and-academics/teacher-training/', subs: [
            { name: 'D21', uri: 'd21' },
          ]
        },
        {
          name: 'Test Prep', uri: 'https://www.udemy.com/courses/teaching-and-academics/test-prep/', subs: [
            { name: 'D21', uri: 'd21' },
          ]
        },
        {
          name: 'Other Teaching & Academics', uri: 'https://www.udemy.com/courses/teaching-and-academics/other-teaching-academics/', subs: [
            { name: 'D21', uri: 'd21' },
          ]
        },
      ]
    },
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
