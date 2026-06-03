import ContentSection from "@/components/tutorials/ContentSection";
import TutorialLayout from "@/components/tutorials/TutorialLayout";
import ImageBlock from "@/components/tutorials/ImageBlock";
import InfoBox from "@/components/tutorials/InfoBox";
import CodeBlock from "@/components/tutorials/CodeBlock";
import PrevNext from "@/components/tutorials/PrevNext";
import TableBlock from "@/components/tutorials/TableBlock";
import YoutubeCard from "@/components/tutorials/YoutubeCard";

export default function IntroductionToRAPPage() {
  return (
    <TutorialLayout
      title="Introduction to RAP"
      category="Fundamentals"
      duration="10 min read"
    >
      <ContentSection title="What is RAP?">
        <p>
          SAP RESTful Application Programming Model (RAP) is SAP's strategic
          development framework for building enterprise applications in SAP
          S/4HANA and ABAP Cloud.
        </p>

        <p>
          RAP provides a model-driven approach that separates data modeling,
          business logic and service exposure, enabling developers to build
          Fiori applications faster and with less custom code.
        </p>
      </ContentSection>

      <InfoBox type="info" title="SAP Recommendation">
        RAP is SAP's preferred programming model for new developments in SAP
        S/4HANA Public Cloud and ABAP Cloud environments.
      </InfoBox>

      <ContentSection title="Why RAP?">
        <p>
          Traditional ABAP development required developers to manually create
          database tables, business logic, OData services and UI integrations.
        </p>

        <p>
          RAP simplifies this process through a model-driven architecture that
          automatically generates much of the required application framework.
        </p>
      </ContentSection>

      <ImageBlock
        src="/images/rap/architecture.png"
        alt="SAP RAP Architecture"
        caption="High-Level SAP RAP Architecture"
      />

      <ContentSection title="Key Components of RAP">
        <ul>
          <li>
            <strong>CDS View Entities</strong> – Define the business data model.
          </li>

          <li>
            <strong>Behavior Definitions</strong> – Define business behavior.
          </li>

          <li>
            <strong>Behavior Implementations</strong> – Implement custom logic.
          </li>

          <li>
            <strong>Service Definitions</strong> – Expose business objects.
          </li>

          <li>
            <strong>Service Bindings</strong> – Publish OData services.
          </li>

          <li>
            <strong>Fiori Elements</strong> – Generate enterprise UIs.
          </li>
        </ul>
      </ContentSection>

      <ContentSection title="Sample RAP CDS View">
        <p>
          Every RAP application starts with a CDS View Entity that represents
          the business data model.
        </p>

        <CodeBlock
          title="ZI_EMPLOYEE"
          code={`define root view entity ZI_EMPLOYEE
  as select from zemployee
{
  key employee_id,
      first_name,
      last_name,
      department
}`}
        />
      </ContentSection>

      <InfoBox type="tip" title="Best Practice">
        Always start RAP development with a well-designed CDS data model. A
        strong CDS foundation significantly reduces future rework.
      </InfoBox>

      <ContentSection title="RAP Architecture Layers">
        <p>
          RAP follows a layered architecture that separates responsibilities
          between data modeling, business behavior and service exposure.
        </p>
      </ContentSection>

      <TableBlock
        title="RAP Layers Overview"
        headers={["Layer", "Object", "Purpose"]}
        rows={[
          ["Data Model", "CDS View Entity", "Business Data Model"],
          ["Behavior", "Behavior Definition", "Business Logic"],
          ["Service", "Service Definition", "Expose BO"],
          ["Exposure", "Service Binding", "Publish OData"],
          ["UI", "Fiori Elements", "Generate UI"],
        ]}
      />

      {/* <ContentSection title="CloudABAP YouTube Tutorial">
        <p>Learn RAP from the official CloudABAP YouTube channel.</p>
      </ContentSection> */}

      {/* <YoutubeCard */}
      {/* videoId="dQw4w9WgXcQ" */}
      {/* title="Introduction to RAP" */}
      {/* description="Understand RAP architecture, CDS Views, Behavior Definitions and Service Exposure." */}
      {/* duration="18 min" */}
      {/* /> */}

      <InfoBox type="success" title="Learning Outcome">
        After completing this learning path you will be able to create, expose
        and extend RAP Business Objects using SAP ABAP Cloud.
      </InfoBox>

      <ContentSection title="Next Steps">
        <p>
          In the next lesson, we will explore CDS View Entities, which form the
          foundation of every RAP Business Object.
        </p>
      </ContentSection>

      <PrevNext
        nextTitle="CDS View Entity"
        nextHref="/tutorials/rap/fundamentals/cds-view-entity"
      />
    </TutorialLayout>
  );
}
