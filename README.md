# Developer Portfolio Template

A modern, responsive developer portfolio template built with HTML, Tailwind CSS, and JavaScript. This template features dark/light mode, smooth animations, and sections for showcasing your skills, projects, and contact information.

## Features

- **Single HTML file**: easy to upload and maintain
- **Responsive Design**: Looks great on all devices (desktop, tablet, mobile)
- **Dark/Light Mode**: Toggle between dark and light themes with persistent preference
- **Smooth Animations**: Engaging scroll animations using AOS library
- **Modern UI**: Clean, professional design with attention to detail
- **Project Showcase**: Highlight your best work with images and descriptions
- **Skills Section**: Showcase your technical expertise with visual indicators
- **Contact Form**: Ready-to-use contact form (requires backend implementation)
- **Easy Customization**: Well-commented code for easy personalization

## How to Use

### 1. Clone/Download the Repository

```bash
git clone https://github.com/yourusername/portfolio-template.git
cd portfolio-template
```

Or simply download the ZIP file and extract it.

### 2. Customize the Content

The HTML file contains comments to help you navigate and customize different sections:

- **Personal Information**: Update your name, title, social links, and photo
- **About Section**: Add your experience, education, and personal bio
- **Projects Section**: Showcase your projects with images, descriptions, and links
- **Skills Section**: Customize the skills and technologies you're proficient in
- **Contact Section**: Update your contact information and form settings

Look for comments like `<!-- CUSTOMIZE: Your Name -->` throughout the HTML file.

### 3. Replace Images

Replace the placeholder images with your own:
- Your profile photo (recommend using a square image)
- Project screenshots/thumbnails
- Logo (if applicable)

### 4. Customize Colors and Styling

The primary colors are defined at the top of the file in the Tailwind configuration and CSS variables. 
Change these to match your personal brand:

```css
:root {
    --color-bg-primary: #ffffff;
    --color-bg-secondary: #f5f5f5;
    --color-bg-accent: #FF6B00;
    --color-text-primary: #111111;
    --color-text-secondary: #333333;
    --color-text-accent: #FF6B00;
    /* more variables... */
}
```

### 5. Deploy to GitHub Pages

To host your portfolio for free on GitHub Pages:

1. Create a new GitHub repository or use an existing one
2. Push your customized portfolio code to the repository
3. Go to the repository settings
4. Scroll down to the "GitHub Pages" section
5. Select the branch you want to deploy (usually `main` or `master`)
6. Choose the root folder `/` as the source
7. Click Save

Your portfolio will be available at `https://yourusername.github.io/repository-name/`

For a custom domain:
1. In the GitHub Pages settings, enter your custom domain
2. Update your domain's DNS settings to point to GitHub Pages
3. Add a CNAME file to your repository with your domain name

## Making the Contact Form Work

The contact form requires a backend service to process form submissions. You have several options:

1. **Formspree**: Add your email to the form action: `<form action="https://formspree.io/f/youremail@example.com" method="POST">`
2. **Netlify Forms**: If hosting on Netlify, add `netlify` attribute to the form
3. **Custom Backend**: Implement your own backend to handle form submissions

## Customization Tips

- **Colors**: Edit the Tailwind configuration and CSS variables to match your brand
- **Fonts**: Import your preferred fonts and update the font-family in the CSS
- **Content**: Focus on quality over quantity in your projects and descriptions
- **Images**: Use high-quality, optimized images (consider using .webp format)
- **Icons**: The template uses Font Awesome icons - you can change these as needed

## Dependencies

- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [Font Awesome](https://fontawesome.com) - Icons
- [AOS](https://michalsnik.github.io/aos/) - Animate On Scroll library

## License

This template is free to use for personal and commercial projects. Attribution is appreciated but not required.

## Support

If you have questions or need help customizing your portfolio, feel free to open an issue in the repository.

---

Happy coding! 