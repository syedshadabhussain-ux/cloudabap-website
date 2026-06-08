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

export default function UnderstandingRAPArchitecturePage() {
  return (
    <TutorialLayout
      title="Understanding RAP Architecture"
      category="RAP Fundamentals"
      duration="30 min read"
    >
      <ContentSection title="Introduction">
        <p>
          Understanding RAP architecture is one of the most important milestones
          in becoming an ABAP Cloud developer. Many developers learn CDS View
          Entities, Behavior Definitions and Service Bindings individually but
          fail to understand how all RAP artifacts work together.
        </p>
        <p>
          RAP follows a layered, model-driven architecture. Each layer has a
          specific responsibility and contributes to SAP's vision of
          cloud-ready, upgrade-safe and API-first application development.
        </p>
      </ContentSection>

      <ContentSection title="Learning Objectives">
        <ul className="list-disc pl-6 space-y-2">
          <li>Understand the complete RAP architecture</li>
          <li>Understand all RAP layers and artifacts</li>
          <li>Understand read-only and transactional applications</li>
          <li>Understand service exposure and consumption</li>
          <li>Understand RAP request lifecycle</li>
          <li>Prepare for RAP architect interviews</li>
        </ul>
      </ContentSection>

      <ImageBlock
        src="/images/rap/fundamentals/RAP Architechture Overview CloudABAP.com.png"
        alt="RAP Architecture Overview"
        caption="High-Level RAP Architecture Overview"
      />

      <ContentSection title="Why SAP Introduced RAP Architecture">
        <p>
          Before RAP, developers had to create database tables, ABAP classes,
          Gateway services, OData models and UI applications separately.
          Different projects implemented different patterns which increased
          maintenance complexity.
        </p>
        <p>
          SAP introduced RAP to standardize application development around
          Business Objects, transactional behavior and service-based
          consumption.
        </p>
      </ContentSection>

      <TableBlock
        title="Classic Development vs RAP"
        headers={["Area", "Classic ABAP", "RAP"]}
        rows={[
          ["Data Model", "Dictionary Views", "CDS View Entities"],
          ["Business Logic", "Custom Classes", "Behavior Definitions"],
          ["Service Exposure", "SEGW", "Service Definition & Binding"],
          ["UI", "Manual UI", "Fiori Elements Ready"],
          ["Cloud Ready", "Limited", "Designed for Cloud"],
        ]}
      />

      <ContentSection title="RAP Development Flow">
        <p>Every RAP application follows a standard development flow.</p>
      </ContentSection>

      <TableBlock
        title="RAP Artifact Flow"
        headers={["Step", "Artifact", "Purpose"]}
        rows={[
          ["1", "Database Table", "Persistence"],
          ["2", "CDS View Entity", "Semantic Model"],
          ["3", "Behavior Definition", "Declare Behavior"],
          ["4", "Behavior Implementation", "Custom Logic"],
          ["5", "Projection View", "Consumer Model"],
          ["6", "Service Definition", "Expose Business Object"],
          ["7", "Service Binding", "OData Exposure"],
          ["8", "Fiori/UI/API", "Consumption"],
        ]}
      />

      <ContentSection title="Layer 1 - Database Layer">
        <p>
          The database layer stores business data. RAP discourages direct table
          access from consumers and introduces CDS as a semantic abstraction
          layer.
        </p>
      </ContentSection>

      <ContentSection title="Layer 2 - CDS Data Model Layer">
        <p>
          CDS View Entities form the foundation of every RAP application. They
          provide semantic modeling and code pushdown capabilities.
        </p>

        <InfoBox type="info" title="Why CDS View Entities Matter">
          <ul className="list-disc pl-6 space-y-2">
            <li>Semantic Data Modeling</li>
            <li>Associations</li>
            <li>Compositions</li>
            <li>Code Pushdown to SAP HANA</li>
            <li>Annotations</li>
            <li>OData Readiness</li>
          </ul>
        </InfoBox>

        <CodeBlock
          title="Root View Entity"
          code={`define root view entity ZI_EMPLOYEE
  as select from zemployee
{
  key employee_id,
      employee_name,
      department
}`}
        />
      </ContentSection>

      <ContentSection title="Layer 3 - Behavior Layer">
        <p>
          The behavior layer transforms a read-only data model into a
          transactional business object.
        </p>

        <TableBlock
          title="Behavior Responsibilities"
          headers={["Feature", "Purpose"]}
          rows={[
            ["Create", "Insert Records"],
            ["Update", "Modify Records"],
            ["Delete", "Remove Records"],
            ["Actions", "Custom Operations"],
            ["Validations", "Consistency Checks"],
            ["Determinations", "Automatic Derivations"],
          ]}
        />

        <CodeBlock
          title="Behavior Definition Example"
          code={`managed implementation in class zbp_i_employee unique;

define behavior for ZI_EMPLOYEE
persistent table zemployee
{
 create;
 update;
 delete;
}`}
        />
      </ContentSection>

      <ContentSection title="Layer 4 - Projection Layer">
        <p>
          Projection Views provide a consumer-specific representation of a
          Business Object. They are one of the most misunderstood concepts in
          RAP.
        </p>

        <TableBlock
          title="Projection Examples"
          headers={["Application", "Fields Exposed", "Purpose"]}
          rows={[
            ["HR App", "Salary, Position", "HR Operations"],
            ["Manager App", "Ratings", "Manager Self Service"],
            ["Employee App", "Personal Data", "Self Service"],
          ]}
        />
      </ContentSection>

      <ContentSection title="Layer 5 - Service Layer">
        <p>The Service Layer exposes RAP Business Objects through APIs.</p>

        <TableBlock
          title="Service Artifacts"
          headers={["Artifact", "Purpose"]}
          rows={[
            ["Service Definition", "What is exposed"],
            ["Service Binding", "How it is exposed"],
          ]}
        />
      </ContentSection>

      <ContentSection title="Layer 6 - Consumption Layer">
        <p>
          RAP services can be consumed by SAP Fiori, SAPUI5 applications, mobile
          applications, integration platforms and external systems.
        </p>
      </ContentSection>

      <ContentSection title="Read-Only vs Transactional RAP">
        <TableBlock
          title="Comparison"
          headers={["Area", "Read Only", "Transactional"]}
          rows={[
            ["Behavior Definition", "No", "Yes"],
            ["Create/Update/Delete", "No", "Yes"],
            ["Use Case", "Reporting", "Business Transactions"],
            ["Examples", "Analytics", "Purchase Orders"],
          ]}
        />
      </ContentSection>

      <RealWorldExample title="Purchase Order Application">
        <p>
          In a Purchase Order application, CDS models the data, Behavior
          Definitions handle CRUD operations, Projection Views provide buyer
          specific views and Service Bindings expose OData APIs consumed by SAP
          Fiori applications.
        </p>
      </RealWorldExample>

      <ContentSection title="RAP Request Lifecycle">
        <p>Understanding request processing is essential for architects.</p>

        <TableBlock
          title="Request Flow"
          headers={["Step", "Component", "Responsibility"]}
          rows={[
            ["1", "Fiori App", "User Action"],
            ["2", "OData", "Request Generation"],
            ["3", "Gateway", "Protocol Handling"],
            ["4", "SADL", "Request Interpretation"],
            ["5", "RAP Runtime", "Business Processing"],
            ["6", "CDS", "Data Access"],
            ["7", "Database", "Persistence"],
          ]}
        />
      </ContentSection>

      <ArchitectNote>
        <p>
          RAP combines Domain Driven Design, REST principles, API-first
          development and Clean Core architecture. Architects should think in
          terms of Business Objects, API Contracts and Lifecycle Stability
          rather than individual technical artifacts.
        </p>
      </ArchitectNote>

      <ContentSection title="Interview Questions">
        <InterviewQuestion
          level="Beginner"
          question="Why does RAP use CDS View Entities?"
          answer="CDS provides semantic modeling, annotations and HANA pushdown capabilities."
        />
        <InterviewQuestion
          level="Experienced"
          question="What is the difference between CDS and Projection Views?"
          answer="CDS defines the domain model while Projection Views define consumer-specific views."
        />
        <InterviewQuestion
          level="Architect"
          question="Why did SAP introduce the Projection Layer?"
          answer="To separate domain models from API contracts and enable multiple consumers to reuse the same Business Object."
        />
      </ContentSection>

      <ContentSection title="Common Mistakes">
        <ul className="list-disc pl-6 space-y-2">
          <li>Skipping Projection Views</li>
          <li>Using CDS as the API contract</li>
          <li>Mixing UI logic into Behavior implementations</li>
          <li>Direct table access from applications</li>
          <li>Ignoring Clean Core principles</li>
        </ul>
      </ContentSection>

      <KeyTakeaway>
        <p>
          RAP architecture separates data modeling, business behavior, service
          exposure and consumption into dedicated layers. Understanding these
          layers is the foundation for building scalable and cloud-ready SAP
          applications.
        </p>
      </KeyTakeaway>

      <PrevNext
        prevTitle="Introduction to RAP and ABAP Cloud"
        prevHref="/tutorials/rap/fundamentals/introduction-to-rap-and-abap-cloud"
        nextTitle="Business Objects"
        nextHref="/tutorials/rap/fundamentals/business-objects"
      />
    </TutorialLayout>
  );
}
