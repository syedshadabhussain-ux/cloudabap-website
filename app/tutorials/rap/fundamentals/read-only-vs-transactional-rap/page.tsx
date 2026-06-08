import ContentSection from "@/components/tutorials/ContentSection";
import TutorialLayout from "@/components/tutorials/TutorialLayout";
import InfoBox from "@/components/tutorials/InfoBox";
import CodeBlock from "@/components/tutorials/CodeBlock";
import PrevNext from "@/components/tutorials/PrevNext";
import TableBlock from "@/components/tutorials/TableBlock";
import InterviewQuestion from "@/components/tutorials/InterviewQuestion";
import ArchitectNote from "@/components/tutorials/ArchitectNote";
import RealWorldExample from "@/components/tutorials/RealWorldExample";
import KeyTakeaway from "@/components/tutorials/KeyTakeaway";

export default function ReadOnlyVsTransactionalRAPPage() {
  return (
    <TutorialLayout
      title="Read Only vs Transactional RAP"
      category="RAP Fundamentals"
      duration="30 min read"
    >
      <ContentSection title="Introduction">
        <p>
          One of the first architectural decisions in RAP is determining whether
          your application is read-only or transactional. Many developers start
          creating Behavior Definitions immediately without understanding that
          not every application requires transactional processing.
        </p>
        <p>
          In real projects, reporting, analytics and dashboards often require
          only CDS and service exposure, while business applications such as
          Purchase Orders, Sales Orders and CAPA management require full
          transactional processing.
        </p>
      </ContentSection>

      <ContentSection title="Learning Objectives">
        <ul className="list-disc pl-6 space-y-2">
          <li>Understand Read Only RAP applications</li>
          <li>Understand Transactional RAP applications</li>
          <li>Know when Behavior Definitions are required</li>
          <li>Compare architecture and development effort</li>
          <li>Prepare for RAP interview questions</li>
        </ul>
      </ContentSection>

      <TableBlock
        title="Quick Comparison"
        headers={["Area", "Read Only RAP", "Transactional RAP"]}
        rows={[
          ["Purpose", "Display Data", "Manage Data"],
          ["Behavior Definition", "Not Required", "Required"],
          ["Create", "No", "Yes"],
          ["Update", "No", "Yes"],
          ["Delete", "No", "Yes"],
          ["Actions", "No", "Yes"],
          ["Complexity", "Low", "High"],
        ]}
      />

      <ContentSection title="What is a Read Only RAP Application?">
        <p>
          A Read Only RAP application exposes business data without allowing
          users to modify it. It is ideal for reports, dashboards, analytics and
          lookup applications.
        </p>
      </ContentSection>

      <InfoBox type="info" title="Typical Read Only Scenarios">
        <ul className="list-disc pl-6 space-y-2">
          <li>Purchase Order Reporting</li>
          <li>Supplier Analytics</li>
          <li>Employee Directory</li>
          <li>Finance Dashboards</li>
          <li>Embedded Analytics Applications</li>
        </ul>
      </InfoBox>

      <CodeBlock
        title="Read Only Architecture"
        code={`Database Table
    ↓
CDS View Entity
    ↓
Projection View
    ↓
Service Definition
    ↓
Service Binding
    ↓
Fiori Elements`}
      />

      <ContentSection title="Read Only RAP Artifacts">
        <TableBlock
          title="Required Objects"
          headers={["Artifact", "Required?", "Purpose"]}
          rows={[
            ["CDS View Entity", "Yes", "Data Model"],
            ["Projection View", "Yes", "Consumer View"],
            ["Behavior Definition", "No", "Not Needed"],
            ["Service Definition", "Yes", "Expose Data"],
            ["Service Binding", "Yes", "Publish Service"],
          ]}
        />
      </ContentSection>

      <ContentSection title="What is a Transactional RAP Application?">
        <p>
          Transactional RAP applications allow users to create, update and
          delete business data while maintaining consistency, validations and
          business rules.
        </p>
      </ContentSection>

      <InfoBox type="tip" title="Typical Transactional Scenarios">
        <ul className="list-disc pl-6 space-y-2">
          <li>Purchase Order Management</li>
          <li>Sales Order Processing</li>
          <li>CAPA Management</li>
          <li>Employee Maintenance</li>
          <li>Supplier Registration</li>
        </ul>
      </InfoBox>

      <CodeBlock
        title="Transactional Architecture"
        code={`Database Table
    ↓
CDS View Entity
    ↓
Behavior Definition
    ↓
Behavior Implementation
    ↓
Projection View
    ↓
Service Definition
    ↓
Service Binding
    ↓
Fiori Elements`}
      />

      <ContentSection title="Why Behavior Definitions Are Needed">
        <p>
          Read-only applications simply retrieve data. Transactional
          applications must enforce business rules. Behavior Definitions declare
          what operations are allowed while Behavior Implementations provide
          custom logic.
        </p>
      </ContentSection>

      <CodeBlock
        title="Behavior Example"
        code={`define behavior for ZI_CAPA
{
  create;
  update;
  delete;

  action approve;
}`}
      />

      <RealWorldExample title="CAPA Dashboard vs CAPA Management">
        <p>
          A CAPA Dashboard showing open CAPA records is a Read Only RAP
          application. A CAPA Management application where users create CAPA
          records, approve actions and close investigations is a Transactional
          RAP application.
        </p>
      </RealWorldExample>

      <ContentSection title="Performance Considerations">
        <p>
          Read Only RAP applications are simpler and generally perform better
          because no transactional processing, validations or lifecycle
          management are involved.
        </p>
        <p>
          Transactional RAP applications require additional runtime processing
          for locks, authorizations, validations, determinations and save
          sequences.
        </p>
      </ContentSection>

      <ArchitectNote>
        <p>
          Architects should always start with the question: "Does the
          application need to change business data?" If the answer is no, a Read
          Only RAP application is usually the better design. Avoid unnecessary
          transactional complexity.
        </p>
      </ArchitectNote>

      <ContentSection title="Decision Matrix">
        <TableBlock
          title="Which Approach Should You Use?"
          headers={["Requirement", "Recommended Approach"]}
          rows={[
            ["Display Data", "Read Only RAP"],
            ["Analytics", "Read Only RAP"],
            ["CRUD Operations", "Transactional RAP"],
            ["Approvals", "Transactional RAP"],
            ["Workflow Actions", "Transactional RAP"],
            ["Dashboards", "Read Only RAP"],
          ]}
        />
      </ContentSection>

      <ContentSection title="Interview Questions">
        <InterviewQuestion
          level="Beginner"
          question="When do you need a Behavior Definition?"
          answer="When the application supports transactional operations such as Create, Update or Delete."
        />

        <InterviewQuestion
          level="Experienced"
          question="Can a RAP application work without a Behavior Definition?"
          answer="Yes. Read Only RAP applications only require CDS, Projection Views, Service Definitions and Service Bindings."
        />

        <InterviewQuestion
          level="Architect"
          question="Why should architects prefer Read Only RAP when possible?"
          answer="Because it reduces complexity, improves maintainability and avoids unnecessary transactional processing."
        />
      </ContentSection>

      <ContentSection title="Common Mistakes">
        <ul className="list-disc pl-6 space-y-2">
          <li>Creating Behavior Definitions for reporting applications</li>
          <li>Using Transactional RAP for simple dashboards</li>
          <li>Ignoring lifecycle requirements</li>
          <li>Adding actions where no business process exists</li>
        </ul>
      </ContentSection>

      <KeyTakeaway>
        <p>
          Read Only RAP is ideal for reporting and analytics. Transactional RAP
          is required when business data must be created, updated or deleted.
          Choosing the correct architecture early significantly reduces
          development effort and improves application quality.
        </p>
      </KeyTakeaway>

      <PrevNext
        prevTitle="Business Objects in RAP"
        prevHref="/tutorials/rap/fundamentals/business-objects"
        nextTitle="Managed vs Unmanaged RAP"
        nextHref="/tutorials/rap/fundamentals/managed-vs-unmanaged-rap"
      />
    </TutorialLayout>
  );
}
