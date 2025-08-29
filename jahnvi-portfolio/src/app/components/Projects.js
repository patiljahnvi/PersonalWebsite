export default function Projects() {
const projects = [
{ title: 'Browser Extension Manager UI', desc: 'A responsive UI to manage browser extensions built with React.', link: '#' },
{ title: 'AI Chatbot App', desc: 'React + OpenAI API chatbot that answers user queries.', link: '#' },
{ title: 'Portfolio Website', desc: 'This website itself, built with Next.js and TailwindCSS.', link: '#' }
];


return (
<section className="py-16 px-6 md:px-20 text-center">
<h2 className="text-3xl font-bold mb-10">Projects</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
{projects.map(project => (
<div key={project.title} className="shadow-lg hover:shadow-xl transition rounded-md bg-white p-6 text-left">
<h3 className="text-xl font-semibold mb-2">{project.title}</h3>
<p className="text-gray-600 mb-4">{project.desc}</p>
<a href={project.link} className="text-indigo-600 hover:underline font-medium" target="_blank">View Project →</a>
</div>
))}
</div>
</section>
);
}