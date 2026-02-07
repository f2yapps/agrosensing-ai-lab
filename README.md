# Fitsum Tilahun Teshome, Ph.D. — Academic Website

Personal academic website for **Fitsum Tilahun Teshome**, Post-Doctoral Research Associate at the University of Maryland (Central Maryland Research & Education Center, College of Agriculture and Natural Resources).

## Pages

| Page        | Description                                      |
|------------|--------------------------------------------------|
| **Home**   | Bio, education, contact, research & social links |
| **Project**| Postdoctoral, Ph.D., and M.Th. research experience |
| **Publication** | Peer-reviewed articles, under review, in preparation, extension, conferences |
| **Teaching**   | Academic teaching, guest lectures, extension, YouTube, peer review, training |
| **Team**   | PI profile and collaborators                     |
| **News**   | Positions, awards, grants, recent activity       |

## How to view

- **Local:** Open `index.html` in a browser, or run a simple server, e.g.  
  `python3 -m http.server 8000` then visit `http://localhost:8000`
- **Deploy:** Upload the folder to any static host (GitHub Pages, Netlify, university web server, etc.).

## Structure

```
AgroSensing&AI_Lab/
├── index.html      # Home
├── project.html
├── publication.html
├── teaching.html
├── team.html
├── news.html
├── css/
│   └── styles.css
├── images/
│   └── team/        # Add real profile photos here (e.g. fitsum.jpg) and update img src in team.html
└── README.md
```

No build step required. Edit the HTML/CSS as needed and refresh.

**Team photos:** The Team page uses placeholder avatars (initials). To use real photos, add images to `images/team/` (e.g. `fitsum.jpg`) and change the corresponding `<img src="...">` in `team.html` to `images/team/fitsum.jpg`.
