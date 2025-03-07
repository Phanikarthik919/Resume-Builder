async function fetchCandidates() {
    try {
        const response = await fetch("http://localhost:5000/recruiter/candidates");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const candidates = await response.json();

        let candidateList = "";
        candidates.forEach(candidate => {
            candidateList += `<div><h3>${candidate.name}</h3><p>${candidate.jobTitle}</p><p>${candidate.experience}</p></div>`;
        });

        document.getElementById("candidateList").innerHTML = candidateList;
    } catch (error) {
        console.error('Error fetching candidates:', error);
        document.getElementById("candidateList").innerHTML = `<p>Error loading candidates. Please try again later.</p>`;
    }
}
