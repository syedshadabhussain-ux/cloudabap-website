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

export default function RAPRuntimeArchitecturePage() {
  return (
    <TutorialLayout
      title="RAP Runtime Architecture"
      category="RAP Fundamentals"
      duration="40 min read"
    >
      <ContentSection title="Introduction">
        <p>
          Most RAP developers understand CDS Views, Behavior Definitions and
          Service Bindings. However, very few understand what actually happens
          when a user clicks the Save button in a Fiori application.
        </p>
        <p>
          RAP Runtime Architecture explains how requests travel through OData,
          SAP Gateway, SADL and the RAP Runtime before reaching the database.
          This is one of the most important topics for SAP Technical Architects.
        </p>
      </ContentSection>

      <ImageBlock
        src="/images/rap/fundamentals/RAP Runtime Working CloudABAP.com.png"
        alt="RAP Runtime Architecture"
        caption="How Requests Flow Through the RAP Runtime"
      />

      <ContentSection title="Learning Objectives">
        <ul className="list-disc pl-6 space-y-2">
          <li>Understand RAP runtime processing</li>
          <li>Understand SAP Gateway and OData</li>
          <li>Understand SADL</li>
          <li>Understand RAP Transaction Manager</li>
          <li>Understand Save Sequence</li>
          <li>Prepare for Architect Interviews</li>
        </ul>
      </ContentSection>

      <ContentSection title="Why Runtime Architecture Matters">
        <p>
          Many performance, authorization and transactional issues can only be
          understood when you know how RAP executes requests internally.
        </p>
      </ContentSection>

      <InfoBox type="info" title="Typical Request Flow">
        <ol className="list-decimal pl-6 space-y-2">
          <li>User clicks Save in Fiori.</li>
          <li>OData request is generated.</li>
          <li>SAP Gateway receives request.</li>
          <li>SADL interprets metadata.</li>
          <li>RAP Runtime executes behavior.</li>
          <li>Database changes are committed.</li>
        </ol>
      </InfoBox>

      <ContentSection title="Component 1 - Fiori Application">
        <p>
          Every RAP transaction usually starts from a Fiori Elements or SAPUI5
          application. The UI does not directly access database tables. Instead,
          it communicates through OData services exposed by RAP.
        </p>
      </ContentSection>

      <ContentSection title="Component 2 - OData Service">
        <p>
          OData acts as the communication protocol between frontend and backend.
          Service Definitions and Service Bindings expose RAP Business Objects
          as OData V2 or OData V4 services.
        </p>
      </ContentSection>

      <CodeBlock
        title="Service Definition Example"
        code={`define service ZUI_CAPA {
  expose ZC_CAPA as CAPA;
}`}
      />

      <ContentSection title="Component 3 - SAP Gateway">
        <p>
          SAP Gateway receives incoming OData requests and routes them to the
          appropriate backend processing framework.
        </p>
      </ContentSection>

      <InfoBox type="tip" title="Architect Insight">
        SAP Gateway handles protocol concerns while RAP focuses on business
        logic. This separation improves maintainability and scalability.
      </InfoBox>

      <ContentSection title="Component 4 - SADL">
        <p>
          SADL (Service Adaptation Definition Language) is one of the most
          important runtime components in RAP. It translates service requests
          into CDS-based operations and optimizes data access.
        </p>
      </ContentSection>

      <InfoBox type="info" title="What SADL Does">
        <ul className="list-disc pl-6 space-y-2">
          <li>Processes OData requests</li>
          <li>Resolves CDS associations</li>
          <li>Handles filtering and sorting</li>
          <li>Optimizes database access</li>
          <li>Reduces custom coding requirements</li>
        </ul>
      </InfoBox>

      <ContentSection title="Component 5 - RAP Runtime">
        <p>
          The RAP Runtime is responsible for executing Business Object behavior.
          It interprets Behavior Definitions and coordinates transactional
          processing.
        </p>
      </ContentSection>

      <InfoBox type="info" title="RAP Runtime Responsibilities">
        <ul className="list-disc pl-6 space-y-2">
          <li>Behavior Execution</li>
          <li>Validation Processing</li>
          <li>Determination Processing</li>
          <li>Authorization Checks</li>
          <li>Draft Handling</li>
          <li>Save Sequence Management</li>
        </ul>
      </InfoBox>

      <ContentSection title="Transaction Manager">
        <p>
          The RAP Transaction Manager ensures data consistency across multiple
          entities participating in the same business transaction.
        </p>
      </ContentSection>

      <RealWorldExample title="Purchase Order Processing">
        <p>
          When a Purchase Order Header and multiple Purchase Order Items are
          saved, the Transaction Manager ensures that either all changes are
          committed successfully or the entire transaction is rolled back.
        </p>
      </RealWorldExample>

      <ContentSection title="Save Sequence">
        <p>
          Save Sequence is a critical RAP concept. During save processing, RAP
          executes validations, determinations and persistence operations in a
          predefined order.
        </p>
      </ContentSection>

      <InfoBox type="warning" title="Typical Save Sequence">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Authorization Checks</li>
          <li>Validations</li>
          <li>Determinations</li>
          <li>Persistence Processing</li>
          <li>Commit</li>
        </ol>
      </InfoBox>

      <ContentSection title="Read Request Lifecycle">
        <p>
          Read requests are generally simpler because no transactional
          processing occurs. SADL translates CDS queries and returns data to the
          consumer.
        </p>
      </ContentSection>

      <ContentSection title="Modify Request Lifecycle">
        <p>
          Create, Update and Delete requests invoke Behavior Definitions,
          Behavior Implementations, validations and save processing.
        </p>
      </ContentSection>

      <TableBlock
        title="Read vs Modify Processing"
        headers={["Area", "Read Request", "Modify Request"]}
        rows={[
          ["Behavior Execution", "No", "Yes"],
          ["Validations", "No", "Yes"],
          ["Determinations", "No", "Yes"],
          ["Save Sequence", "No", "Yes"],
          ["Commit", "No", "Yes"],
        ]}
      />

      <ArchitectNote>
        <p>
          Architects should understand that RAP Runtime is not merely a CRUD
          framework. It is a transactional engine that combines Business
          Objects, OData, authorization, lifecycle management and persistence
          into a unified programming model.
        </p>
      </ArchitectNote>

      <ContentSection title="Common Performance Considerations">
        <InfoBox type="info" title="Performance Best Practices">
          <ul className="list-disc pl-6 space-y-2">
            <li>Use efficient CDS View Entities.</li>
            <li>Avoid unnecessary virtual elements.</li>
            <li>Reduce expensive determinations.</li>
            <li>Leverage HANA pushdown.</li>
            <li>Design Business Objects carefully.</li>
          </ul>
        </InfoBox>
      </ContentSection>

      <ContentSection title="Interview Questions">
        <InterviewQuestion
          level="Beginner"
          question="What is SADL in RAP?"
          answer="SADL translates service requests into CDS-based operations and optimizes data access."
        />

        <InterviewQuestion
          level="Experienced"
          question="What is the role of the RAP Transaction Manager?"
          answer="It ensures transactional consistency and coordinates save processing."
        />

        <InterviewQuestion
          level="Architect"
          question="What happens when a user clicks Save in a RAP application?"
          answer="The request flows through OData, SAP Gateway, SADL and RAP Runtime where validations, determinations and persistence processing are executed before commit."
        />
      </ContentSection>

      <ContentSection title="Common Mistakes">
        <ul className="list-disc pl-6 space-y-2">
          <li>Ignoring save sequence behavior.</li>
          <li>Not understanding SADL processing.</li>
          <li>Overusing expensive determinations.</li>
          <li>Designing oversized Business Objects.</li>
        </ul>
      </ContentSection>

      <KeyTakeaway>
        <p>
          RAP Runtime Architecture explains how SAP transforms a simple user
          action into a fully managed business transaction. Understanding
          Gateway, SADL, RAP Runtime and Save Sequence is essential for advanced
          RAP development and solution architecture.
        </p>
      </KeyTakeaway>

      <PrevNext
        prevTitle="Managed vs Unmanaged RAP"
        prevHref="/tutorials/rap/fundamentals/managed-vs-unmanaged-rap"
        nextTitle="CDS View Entity Overview"
        nextHref="/tutorials/rap/cds/cds-view-entity-overview"
      />
    </TutorialLayout>
  );
}
