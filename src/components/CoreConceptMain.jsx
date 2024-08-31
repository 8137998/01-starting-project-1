import { CORE_CONCEPTS } from "../data";
import CoreConcepts from "../components/CoreConcepts.jsx";
import Section from "./Section.jsx";

export default function CoreConceptMain()
{
    return (
        <Section id="core-concepts" title="Core Concepts">
          <ul>
            {/* heremap function is used to get the elements in the array and iterate through them */}
            {CORE_CONCEPTS.map((coreConcept) => (<CoreConcepts key={coreConcept.image} {...coreConcept} />))}
          </ul>
        </Section>
    );
}