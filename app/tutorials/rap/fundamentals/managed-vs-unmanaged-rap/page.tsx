import ContentSection from "@/components/tutorials/ContentSection";
import TutorialLayout from "@/components/tutorials/TutorialLayout";
import ImageBlock from "@/components/tutorials/ImageBlock";
import InfoBox from "@/components/tutorials/InfoBox";
import CodeBlock from "@/components/tutorials/CodeBlock";
import PrevNext from "@/components/tutorials/PrevNext";
import InterviewQuestion from "@/components/tutorials/InterviewQuestion";
import ArchitectNote from "@/components/tutorials/ArchitectNote";
import RealWorldExample from "@/components/tutorials/RealWorldExample";
import KeyTakeaway from "@/components/tutorials/KeyTakeaway";
import TableBlock from "@/components/tutorials/TableBlock";

export default function ManagedVsUnmanagedRAPPage() {
  return (
    <TutorialLayout
      title="Managed vs Unmanaged RAP"
      category="RAP Fundamentals"
      duration="35 min read"
    >
      <ContentSection title="Introduction">
        <p>
          One of the most common RAP interview questions is whether a Business
          Object should be implemented using Managed RAP or Unmanaged RAP.
          Understanding this decision is important because it directly impacts
          development effort, maintainability and cloud readiness.
        </p>
      </ContentSection>

      <ContentSection title="Learning Objectives">
        <ul className="list-disc pl-6 space-y-2">
          <li>Understand Managed RAP</li>
          <li>Understand Unmanaged RAP</li>
          <li>Know when to use each approach</li>
          <li>Understand architect decision criteria</li>
        </ul>
      </ContentSection>

      <InfoBox type="info" title="Quick Definition">
        <p>
          Managed RAP means the RAP framework automatically handles standard
          CRUD operations. Unmanaged RAP means the developer is responsible for
          implementing persistence logic.
        </p>
      </InfoBox>

      <ContentSection title="Managed RAP">
        <p>
          Managed RAP is SAP's recommended approach for new developments,
          especially in ABAP Cloud and S/4HANA Public Cloud.
        </p>
      </ContentSection>

      <InfoBox type="tip" title="Benefits of Managed RAP">
        <ul className="list-disc pl-6 space-y-2">
          <li>Less custom code</li>
          <li>Faster development</li>
          <li>Framework-managed CRUD operations</li>
          <li>Cloud-friendly architecture</li>
          <li>Better maintainability</li>
        </ul>
      </InfoBox>

      <CodeBlock
        title="Managed Behavior Definition"
        code={`managed implementation in class zbp_i_employee unique;

define behavior for ZI_EMPLOYEE
persistent table zemployee
{
  create;
  update;
  delete;
}`}
      />

      <RealWorldExample title="Employee Management App">
        <p>
          A new Employee Management application built from scratch is a perfect
          candidate for Managed RAP because the framework can handle most CRUD
          operations automatically.
        </p>
      </RealWorldExample>

      <ContentSection title="Unmanaged RAP">
        <p>
          Unmanaged RAP is typically used when existing business logic already
          exists in BAPIs, function modules, legacy classes or external systems.
        </p>
      </ContentSection>

      <InfoBox type="warning" title="When Unmanaged RAP Makes Sense">
        <ul className="list-disc pl-6 space-y-2">
          <li>Legacy SAP applications</li>
          <li>Existing BAPI-based processing</li>
          <li>Complex save logic</li>
          <li>Brownfield implementations</li>
        </ul>
      </InfoBox>

      <CodeBlock
        title="Unmanaged Behavior Definition"
        code={`unmanaged implementation in class zbp_i_salesorder unique;

define behavior for ZI_SALESORDER
{
  create;
  update;
  delete;
}`}
      />

      <TableBlock
        title="Managed vs Unmanaged RAP"
        headers={["Feature", "Managed", "Unmanaged"]}
        rows={[
          ["CRUD Handling", "Framework", "Developer"],
          ["Development Speed", "High", "Medium"],
          ["Legacy Integration", "Limited", "Excellent"],
          ["Public Cloud", "Preferred", "Rare"],
          ["Code Volume", "Low", "High"],
        ]}
      />

      <ArchitectNote>
        <p>
          For greenfield projects, start with Managed RAP. Move to Unmanaged RAP
          only when a clear technical or business requirement exists. The goal
          should be to leverage the RAP framework as much as possible.
        </p>
      </ArchitectNote>

      <ContentSection title="Architect Decision Framework">
        <InfoBox type="info" title="Choose Managed RAP If">
          <ul className="list-disc pl-6 space-y-2">
            <li>Building a new application</li>
            <li>Using custom persistence tables</li>
            <li>Targeting ABAP Cloud</li>
            <li>Following Clean Core principles</li>
          </ul>
        </InfoBox>

        <InfoBox type="info" title="Choose Unmanaged RAP If">
          <ul className="list-disc pl-6 space-y-2">
            <li>Existing BAPIs must be reused</li>
            <li>Legacy save logic already exists</li>
            <li>Brownfield migration is required</li>
          </ul>
        </InfoBox>
      </ContentSection>

      <ContentSection title="Interview Questions">
        <InterviewQuestion
          level="Beginner"
          question="What is Managed RAP?"
          answer="A RAP implementation where the framework manages persistence and CRUD operations."
        />

        <InterviewQuestion
          level="Experienced"
          question="When should Unmanaged RAP be used?"
          answer="When existing business logic or persistence handling must be reused."
        />

        <InterviewQuestion
          level="Architect"
          question="Which approach should be preferred for new ABAP Cloud developments?"
          answer="Managed RAP, because it aligns with SAP's strategic direction and reduces custom code."
        />
      </ContentSection>

      <KeyTakeaway>
        <p>
          Managed RAP should be your default choice for new developments.
          Unmanaged RAP is valuable when integrating existing logic and legacy
          applications. Understanding the trade-offs is a key architect skill.
        </p>
      </KeyTakeaway>

      <PrevNext
        prevTitle="Read Only vs Transactional RAP"
        prevHref="/tutorials/rap/fundamentals/read-only-vs-transactional-rap"
        nextTitle="RAP Runtime Architecture"
        nextHref="/tutorials/rap/fundamentals/rap-runtime-architecture"
      />
    </TutorialLayout>
  );
}
