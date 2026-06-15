import ContentSection from "@/components/tutorials/ContentSection";
import TutorialLayout from "@/components/tutorials/TutorialLayout";
import ImageBlock from "@/components/tutorials/ImageBlock";
import ArchitectNote from "@/components/tutorials/ArchitectNote";
import RealWorldExample from "@/components/tutorials/RealWorldExample";
import KeyTakeaway from "@/components/tutorials/KeyTakeaway";
import PrevNext from "@/components/tutorials/PrevNext";
import CDSFundamentalsSidebar from "@/components/tutorials/CDSFundamentalsSidebar";
import InterviewQuestion from "@/components/tutorials/InterviewQuestion";

export default function WhatIsCDSPage() {
  return (
    <TutorialLayout
      title="What Are Core Data Services (CDS)?"
      category="CDS Fundamentals"
      duration="15 min read"
      breadcrumbPath="/tutorials/rap/cds-fundamentals"
      sidebar={<CDSFundamentalsSidebar />}
    >
      <ContentSection title="Core Data Services (CDS)?">
        <p>
          Core Data Services (CDS) are SAP's strategic data modeling technology
          used to create semantically rich business data models on top of
          database tables.
        </p>

        <p>
          SAP introduced ABAP CDS with ABAP Release 7.40 SP05 as part of its
          transition toward SAP HANA and modern application development. Today,
          CDS forms the foundation of SAP S/4HANA, SAP Fiori applications, OData
          services, analytical reporting, and the ABAP RESTful Application
          Programming Model (RAP).
        </p>

        <p>
          Unlike traditional database views that primarily focus on retrieving
          data, CDS provides a complete framework for modeling business
          entities, defining relationships, implementing calculations,
          controlling access, and enriching data with metadata.
        </p>

        <p>
          SAP defines CDS as an infrastructure used to create business-oriented
          data models that are easier to understand, consume, and reuse across
          applications.
        </p>
      </ContentSection>

      <ImageBlock
        priority
        src="/images/rap/cds-fundamentals/What is CDS CloudABAP.com.webp"
        alt="What Are Core Data Services"
        caption="CDS introduces a semantic business layer between database tables and business applications."
      />

      <ContentSection title="Business-Oriented Data Modeling">
        <p>
          Instead of exposing technical database tables directly to
          applications, CDS introduces a semantic layer that represents real
          business concepts such as:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Sales Orders</li>
          <li>Purchase Orders</li>
          <li>Business Partners</li>
          <li>Products</li>
          <li>Suppliers</li>
          <li>Accounting Documents</li>
        </ul>

        <p>
          This abstraction allows developers to work with business entities
          rather than low-level database structures.
        </p>

        <p>
          For example, instead of joining multiple sales-related tables every
          time an application needs order information, a CDS View Entity can
          expose a complete Sales Order business object that already contains
          all required fields, relationships, and business semantics.
        </p>

        <p>As a result, CDS improves:</p>

        <ul>
          <li>Readability</li>
          <li>Reusability</li>
          <li>Maintainability</li>
          <li>Performance</li>
          <li>Development Productivity</li>
        </ul>

        <p>
          This is one of the key reasons why CDS has become the central data
          modeling technology in SAP S/4HANA.
        </p>
      </ContentSection>

      <RealWorldExample title="Purchase Register Application">
        <p>Imagine a Purchase Register application.</p>

        <p>
          Without CDS, every report, API, and Fiori application would need to
          repeatedly perform joins across multiple purchasing and accounting
          tables to retrieve supplier details, invoice amounts, tax information,
          and posting data.
        </p>

        <p>
          With CDS, these relationships are modeled once inside a reusable CDS
          View Entity.
        </p>

        <p>
          Any application consuming that CDS entity automatically gains access
          to the same standardized business view of the data.
        </p>

        <p>
          This eliminates duplicate development efforts and ensures consistency
          across reports, APIs, and applications.
        </p>
      </RealWorldExample>

      <ContentSection title="Why CDS Is Important for RAP">
        <p>In RAP, CDS is not optional.</p>

        <p>Every RAP business object starts with a CDS data model.</p>

        <p>The CDS entities define:</p>

        <ul>
          <li>Business Data Structure</li>
          <li>Relationships Between Entities</li>
          <li>Exposed Fields</li>
          <li>Search Capabilities</li>
          <li>UI Metadata</li>
          <li>Authorization Behavior</li>
        </ul>

        <p>
          Behavior Definitions then add transactional capabilities such as
          Create, Update, Delete, Actions, Determinations, and Validations.
        </p>

        <p>
          <strong>
            CDS provides the business data model, while RAP provides the
            business behavior.
          </strong>
        </p>

        <p>Without CDS, RAP cannot exist.</p>

        <p>
          This is why mastering CDS is the first and most important step toward
          becoming a successful RAP developer.
        </p>
      </ContentSection>

      <ArchitectNote>
        CDS is not just a replacement for database views. It is SAP's strategic
        semantic data modeling layer that sits between database tables and
        business applications.
        <br />
        <br />
        Almost every modern SAP technology including RAP, Fiori Elements, OData
        Services, Embedded Analytics, and SAP APIs relies on CDS.
      </ArchitectNote>

      <InterviewQuestion
        level="Beginner"
        question="Why did SAP introduce CDS when database views already existed?"
        answer="Traditional database views only expose data. CDS introduces a semantic business layer that supports associations, annotations, security, calculations, analytics, OData consumption, and RAP development."
      />

      <InterviewQuestion
        level="Experienced"
        question="What is the biggest advantage of CDS over classical ABAP reporting?"
        answer="CDS enables Code Pushdown by executing joins, calculations, filters and aggregations directly in SAP HANA instead of the ABAP application server."
      />

      <InterviewQuestion
        level="Architect"
        question="Why is CDS considered a business-oriented data model?"
        answer="CDS models business entities such as Sales Orders, Products, Suppliers and Business Partners rather than exposing raw database tables and technical structures."
      />

      <KeyTakeaway>
        Core Data Services (CDS) provide the semantic data foundation for SAP
        S/4HANA and RAP. They enable developers to model business entities once
        and reuse them across applications, APIs, analytics, and Fiori UIs.
      </KeyTakeaway>

      <PrevNext
        nextTitle="Why SAP Introduced CDS and the Code Pushdown Paradigm"
        nextHref="/tutorials/rap/cds-fundamentals/why-cds-introduced"
      />
    </TutorialLayout>
  );
}
