export default function Skills() {
const skills = ['React', 'Angular', 'TypeScript', 'Next.js', 'TailwindCSS', 'OpenAI API', 'LangChain', 'Git'];
return (
<section className="py-16 px-6 md:px-20 bg-gray-100 text-center">
<h2 className="text-3xl font-bold mb-10">Skills & Tools</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
{skills.map(skill => (
<div key={skill} className="shadow-md p-6 rounded-md bg-white font-medium text-gray-800">
{skill}
</div>
))}
</div>
</section>
);
}