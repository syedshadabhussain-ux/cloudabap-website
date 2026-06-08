import ContentSection from "@/components/tutorials/ContentSection";
import TutorialLayout from "@/components/tutorials/TutorialLayout";
import ImageBlock from "@/components/tutorials/ImageBlock";
import InfoBox from "@/components/tutorials/InfoBox";
import CodeBlock from "@/components/tutorials/CodeBlock";
import PrevNext from "@/components/tutorials/PrevNext";
import TableBlock from "@/components/tutorials/TableBlock";
import InterviewQuestion from "@/components/tutorials/InterviewQuestion";
import ArchitectNote from "@/components/tutorials/ArchitectNote";
import RealWorldExample from "@/components/tutorials/RealWorldExample";
import KeyTakeaway from "@/components/tutorials/KeyTakeaway";

export default function BusinessObjectsPage() {
  return (
    <TutorialLayout
      title="Business Objects in RAP"
      category="RAP Fundamentals"
      duration="35 min read"
    >
      <ContentSection title="Introduction">
        <p>
          Business Objects are the heart of the ABAP RESTful Application
          Programming Model. If you understand Business Objects, RAP starts
          making sense. If you do not, RAP becomes a collection of CDS views,
          behaviors and service bindings with no architectural meaning.
        </p>
        <p>
          SAP built RAP around Business Objects because enterprises think in
          terms of Purchase Orders, Sales Orders, Suppliers, Employees and CAPA
          records—not database tables.
        </p>
      </ContentSection>

      <ImageBlock
        src="/images/rap/fundamentals/Business Object CloudABAP.com.png"
        alt="Business Object"
        caption="RAP Business Object Overview"
      />

      <ContentSection title="Learning Objectives">
        <ul className="list-disc pl-6 space-y-2">
          <li>Understand what a Business Object is</li>
          <li>Understand Root and Child entities</li>
          <li>Learn Composition and Association</li>
          <li>Understand Aggregate Root concepts</li>
          <li>Apply Business Object design in RAP</li>
        </ul>
      </ContentSection>

      <ContentSection title="What is a Business Object?">
        <p>
          A Business Object represents a real business concept together with its
          data, lifecycle, rules and relationships. Examples include Purchase
          Orders, Sales Orders, Employees, Suppliers and CAPA records.
        </p>
      </ContentSection>

      <TableBlock
        title="Business Object Examples"
        headers={["Business Object", "Root Entity", "Child Entities"]}
        rows={[
          ["Purchase Order", "PO Header", "Items, Schedule Lines"],
          ["Sales Order", "SO Header", "Items, Partners"],
          ["Employee", "Employee", "Addresses, Skills"],
          ["CAPA", "CAPA Header", "Causes, Actions"],
        ]}
      />

      <ContentSection title="Why SAP Uses Business Objects">
        <p>
          Classic ABAP development was often table-centric. RAP is
          business-centric. Developers model business boundaries first and
          technical implementation second.
        </p>
      </ContentSection>

      <InfoBox type="info" title="Important">
        A Business Object is not a table. A Business Object may consist of
        multiple entities, behaviors, validations, actions and services.
      </InfoBox>

      <ContentSection title="Root Entity">
        <p>
          Every RAP Business Object starts with a Root Entity. The root controls
          lifecycle, locking, authorization and consistency.
        </p>

        <CodeBlock
          title="Root View Entity"
          code={`define root view entity ZI_CAPA
  as select from zcapa_hdr
{
  key capaid,
      description,
      status
}`}
        />
      </ContentSection>

      <ContentSection title="Child Entity">
        <p>
          Child entities depend on the root entity. They normally cannot exist
          independently.
        </p>

        <CodeBlock
          title="Child Entity"
          code={`define view entity ZI_CAPA_CAUSE
  as select from zcapa_cause
{
  key capaid,
  key causeid,
      cause_text
}`}
        />
      </ContentSection>

      <ContentSection title="Composition">
        <p>
          Composition represents strong ownership. The child belongs to the
          parent. If the parent is deleted, the child is deleted as well.
        </p>

        <CodeBlock
          title="Composition Example"
          code={`composition [1..*] of ZI_CAPA_CAUSE as _Cause`}
        />
      </ContentSection>

      <ContentSection title="Association">
        <p>
          Associations represent relationships without ownership. The associated
          object can exist independently.
        </p>

        <CodeBlock
          title="Association Example"
          code={`association [0..1] to I_BusinessPartner as _Supplier
on $projection.Supplier = _Supplier.BusinessPartner`}
        />
      </ContentSection>

      <TableBlock
        title="Composition vs Association"
        headers={["Area", "Composition", "Association"]}
        rows={[
          ["Ownership", "Strong", "Weak"],
          ["Lifecycle", "Dependent", "Independent"],
          ["Delete Parent", "Deletes Child", "No Impact"],
          ["Typical Example", "PO -> Items", "PO -> Supplier"],
        ]}
      />

      <ContentSection title="Aggregate Root and Domain Driven Design">
        <p>
          In Domain Driven Design, an Aggregate Root acts as the entry point
          into an aggregate. RAP Root Entities closely resemble Aggregate Roots.
          All business consistency is enforced through the root.
        </p>
      </ContentSection>

      <ArchitectNote>
        <p>
          Think of the Root Entity as the business boundary. Consumers should
          not bypass the root and manipulate child entities directly. This
          principle improves consistency, maintainability and clean
          architecture.
        </p>
      </ArchitectNote>

      <RealWorldExample title="CAPA Management">
        <p>
          A CAPA Business Object may contain CAPA Header, Root Cause, Corrective
          Action and Preventive Action entities. The CAPA Header acts as the
          Root Entity while causes and actions are modeled using compositions.
        </p>
      </RealWorldExample>

      <ContentSection title="RAP Business Object Structure">
        <TableBlock
          title="Business Object Components"
          headers={["Component", "Purpose"]}
          rows={[
            ["CDS View Entity", "Data Model"],
            ["Behavior Definition", "Business Rules"],
            ["Behavior Implementation", "Custom Logic"],
            ["Projection View", "Consumer Model"],
            ["Service Definition", "API Exposure"],
            ["Service Binding", "Protocol Exposure"],
          ]}
        />
      </ContentSection>

      <ContentSection title="Interview Questions">
        <InterviewQuestion
          level="Beginner"
          question="What is a Business Object in RAP?"
          answer="A Business Object represents a business concept together with its data, lifecycle and behavior."
        />
        <InterviewQuestion
          level="Experienced"
          question="What is the difference between Composition and Association?"
          answer="Composition implies ownership and lifecycle dependency whereas Association represents an independent relationship."
        />
        <InterviewQuestion
          level="Architect"
          question="Why is a Root Entity similar to an Aggregate Root?"
          answer="Because it acts as the consistency boundary and entry point for business operations."
        />
      </ContentSection>

      <ContentSection title="Common Mistakes">
        <ul className="list-disc pl-6 space-y-2">
          <li>Modeling everything as a Root Entity</li>
          <li>Using Association when Composition is required</li>
          <li>Treating CDS Views as Business Objects</li>
          <li>Ignoring lifecycle dependency</li>
        </ul>
      </ContentSection>

      <KeyTakeaway>
        <p>
          Business Objects are the foundation of RAP. Root Entities define
          business boundaries, Child Entities model dependent data, Compositions
          define ownership and Associations define relationships. Understanding
          these concepts is essential before learning Behavior Definitions and
          transactional processing.
        </p>
      </KeyTakeaway>

      <PrevNext
        prevTitle="Understanding RAP Architecture"
        prevHref="/tutorials/rap/fundamentals/understanding-rap-architecture"
        nextTitle="Read Only vs Transactional RAP"
        nextHref="/tutorials/rap/fundamentals/read-only-vs-transactional-rap"
      />
    </TutorialLayout>
  );
}
