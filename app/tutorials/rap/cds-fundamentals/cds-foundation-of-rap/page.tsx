import ContentSection from "@/components/tutorials/ContentSection";
import TutorialLayout from "@/components/tutorials/TutorialLayout";
import ImageBlock from "@/components/tutorials/ImageBlock";
import ArchitectNote from "@/components/tutorials/ArchitectNote";
import RealWorldExample from "@/components/tutorials/RealWorldExample";
import KeyTakeaway from "@/components/tutorials/KeyTakeaway";
import PrevNext from "@/components/tutorials/PrevNext";
import InterviewQuestion from "@/components/tutorials/InterviewQuestion";
import CDSFundamentalsSidebar from "@/components/tutorials/CDSFundamentalsSidebar";
import TableBlock from "@/components/tutorials/TableBlock";

export default function Page() {
  return (
    <TutorialLayout
      title="Why CDS Is the Foundation of RAP and Modern SAP Development"
      category="CDS Fundamentals"
      duration="12 min read"
      breadcrumbPath="/tutorials/rap/cds-fundamentals"
      sidebar={<CDSFundamentalsSidebar />}
    >
      <ContentSection title="Why CDS Is the Foundation of RAP and Modern SAP Development">
        <p>
          Throughout this chapter, we explored why SAP introduced Core Data
          Services (CDS) and how CDS became the cornerstone of SAP's modern
          development architecture.
        </p>

        <p>
          We started with the challenges of traditional ABAP development, where
          large volumes of data were transferred from the database to the
          application server for processing.
        </p>

        <p>
          This approach became increasingly difficult to scale as enterprise
          systems grew and business requirements became more complex.
        </p>

        <p>
          To address these challenges, SAP introduced the Code Pushdown
          paradigm, enabling calculations and data processing to execute
          directly inside the database.
        </p>

        <ImageBlock
          priority
          src="/images/rap/cds-fundamentals/Best Practise for CDS View CloudABAP.com.webp"
          alt="CDS Foundation of RAP and Modern SAP Development"
          caption="CDS serves as the foundation for RAP, Fiori, APIs, Analytics, and modern SAP application development."
        />
      </ContentSection>

      <ContentSection title="The Technologies That Made CDS Possible">
        <p>
          The transformation to modern SAP development was made possible by SAP
          HANA and its underlying innovations:
        </p>

        <ul>
          <li>In-Memory Computing</li>
          <li>Column Store Architecture</li>
          <li>Data Compression</li>
          <li>Parallel Processing</li>
        </ul>

        <p>
          Together, these technologies created a platform capable of processing
          massive datasets in real time.
        </p>

        <p>
          CDS emerged as SAP's strategic data modeling framework for leveraging
          this new architecture.
        </p>
      </ContentSection>

      <ContentSection title="More Than Just a View Technology">
        <p>
          One of the most common misconceptions among new developers is that CDS
          is simply a modern replacement for database views.
        </p>

        <p>In reality, CDS is much more than that.</p>

        <p>CDS combines:</p>

        <ul>
          <li>Data Modeling</li>
          <li>Business Semantics</li>
          <li>Relationships</li>
          <li>Metadata</li>
          <li>Security</li>
          <li>Service Consumption</li>
        </ul>

        <p>within a single framework.</p>

        <p>
          This allows developers to define business-oriented models that can be
          reused across multiple applications and technologies.
        </p>
      </ContentSection>

      <ContentSection title="Business-Oriented Data Modeling">
        <p>
          Instead of exposing raw database tables, CDS exposes meaningful
          business entities such as:
        </p>

        <ul>
          <li>Product</li>
          <li>Business Partner</li>
          <li>Sales Order</li>
          <li>Purchase Order</li>
          <li>Supplier</li>
          <li>Accounting Document</li>
        </ul>

        <p>
          This business-oriented approach aligns perfectly with SAP's vision for
          modern application development.
        </p>
      </ContentSection>

      <ContentSection title="CDS as the Foundation of SAP S/4HANA">
        <p>Today, CDS sits at the center of SAP S/4HANA architecture.</p>

        <p>Many core SAP technologies are built on top of CDS, including:</p>

        <ul>
          <li>SAP Fiori Elements</li>
          <li>Embedded Analytics</li>
          <li>OData Services</li>
          <li>Released APIs</li>
          <li>Virtual Data Model (VDM)</li>
          <li>RAP Business Objects</li>
        </ul>

        <p>
          This means that understanding CDS is no longer optional for SAP
          developers.
        </p>

        <p>
          Whether you are building reports, APIs, analytical applications, or
          transactional business applications, CDS will almost always be
          involved.
        </p>
      </ContentSection>

      <ContentSection title="Why CDS Is Critical for RAP">
        <p>The relationship between CDS and RAP is especially important.</p>

        <p>Every RAP Business Object starts with a CDS data model.</p>

        <p>CDS defines:</p>

        <ul>
          <li>Business Entities</li>
          <li>Associations</li>
          <li>Compositions</li>
          <li>Search Capabilities</li>
          <li>Metadata</li>
          <li>Authorization Behavior</li>
        </ul>

        <p>RAP then builds upon this foundation by introducing:</p>

        <ul>
          <li>Create</li>
          <li>Update</li>
          <li>Delete</li>
          <li>Actions</li>
          <li>Determinations</li>
          <li>Validations</li>
          <li>Draft Handling</li>
          <li>Transaction Management</li>
        </ul>

        <p>In simple terms:</p>

        <p>
          <strong>CDS defines the business data model.</strong>
        </p>

        <p>
          <strong>RAP defines the business behavior.</strong>
        </p>

        <p>Without CDS, RAP cannot exist.</p>

        <p>
          This is why SAP recommends mastering CDS before moving into advanced
          RAP topics.
        </p>
      </ContentSection>

      <ContentSection title="CDS and ABAP Cloud">
        <p>The importance of CDS becomes even greater in ABAP Cloud.</p>

        <p>Modern SAP development is built around the principles of:</p>

        <ul>
          <li>Clean Core</li>
          <li>Released APIs</li>
          <li>Upgrade Stability</li>
          <li>Cloud Readiness</li>
        </ul>

        <p>CDS plays a critical role in achieving these objectives.</p>

        <p>
          Instead of directly accessing SAP tables, developers consume released
          CDS APIs and VDM entities that provide stable and supported access to
          business data.
        </p>

        <p>
          This approach reduces upgrade risks and aligns custom development with
          SAP's long-term architecture strategy.
        </p>
      </ContentSection>

      <TableBlock
        title="Evolution of SAP Development"
        headers={["Era", "Architecture", "Development Focus"]}
        rows={[
          [
            "Traditional ABAP Era",
            "Database Tables → ABAP Programs → User Interface",
            "Table-Centric Development",
          ],
          [
            "SAP HANA Era",
            "Database Tables → CDS Views → Applications",
            "Data Modeling and Code Pushdown",
          ],
          [
            "RAP & ABAP Cloud Era",
            "Database Tables → CDS View Entities → Business Objects → Services → Applications",
            "Business Object-Centric Development",
          ],
        ]}
      />

      <RealWorldExample title="Building a Sales Order Application">
        <p>Imagine building a Sales Order application today.</p>

        <h4 className="font-semibold text-lg mt-6 mb-3">Twenty Years Ago</h4>

        <ul>
          <li>Access database tables directly.</li>
          <li>Create custom joins.</li>
          <li>Build custom authorization checks.</li>
          <li>Develop custom UI screens.</li>
          <li>Implement business logic manually.</li>
        </ul>

        <h4 className="font-semibold text-lg mt-6 mb-3">
          Modern SAP Development
        </h4>

        <ul>
          <li>CDS models the Sales Order business object.</li>
          <li>RAP defines the transactional behavior.</li>
          <li>Service Definitions expose the application.</li>
          <li>Fiori Elements generates the user interface.</li>
        </ul>

        <p>
          The developer focuses on business requirements rather than technical
          plumbing.
        </p>

        <p>This dramatically improves productivity and maintainability.</p>
      </RealWorldExample>

      <ContentSection title="Looking Ahead">
        <p>
          Now that you understand the architecture, purpose, and strategic
          importance of CDS, the next step is learning how CDS models are
          actually built.
        </p>

        <p>In the next chapter, we will compare:</p>

        <ul>
          <li>ABAP Dictionary Views</li>
          <li>Classic CDS Views</li>
          <li>CDS View Entities</li>
        </ul>

        <p>
          and understand why CDS View Entities have become SAP's recommended
          approach for RAP and ABAP Cloud development.
        </p>

        <p>
          This knowledge will form the foundation for everything that follows in
          the RAP learning journey.
        </p>
      </ContentSection>

      <ContentSection title="What Comes Next?">
        <p>
          You now understand why CDS is the foundation of modern SAP
          development.
        </p>

        <p>
          In the next learning path, we will move from CDS fundamentals into
          practical CDS development using CDS View Entities.
        </p>

        <p>
          You will learn how to create CDS entities, define keys, associations,
          compositions, annotations, calculated fields, and prepare CDS models
          for RAP Business Objects.
        </p>
      </ContentSection>

      <ArchitectNote>
        <strong>Architect Insight</strong>
        <br />
        <br />
        If RAP is the engine of modern SAP application development, then CDS is
        the foundation on which that engine is built.
        <br />
        <br />
        Developers who understand CDS can learn RAP.
        <br />
        <br />
        Developers who master CDS can design enterprise-grade SAP solutions.
      </ArchitectNote>

      <ContentSection title="Interview Questions">
        <InterviewQuestion
          level="Beginner"
          question="Why is CDS important in SAP S/4HANA?"
          answer="CDS provides semantic data modeling, code pushdown, reusable business entities, metadata annotations, security integration, and service exposure capabilities. It serves as the foundation of modern SAP application development."
        />

        <InterviewQuestion
          level="Experienced"
          question="What SAP technologies are built on top of CDS?"
          answer="Several SAP technologies rely heavily on CDS, including RAP, Fiori Elements, OData Services, Embedded Analytics, SAP APIs, and many SAP S/4HANA applications."
        />

        <InterviewQuestion
          level="Architect"
          question="Why does SAP consider CDS the foundation of RAP?"
          answer="RAP Business Objects are built on CDS entities. CDS provides the business data model, relationships, metadata, search capabilities, security integration, and service exposure foundation upon which RAP implements transactional behavior, validations, determinations, actions, and lifecycle management."
        />
      </ContentSection>

      <KeyTakeaway>
        <p>CDS is far more than a database view technology.</p>

        <p>
          It is SAP's strategic data modeling framework and the foundation upon
          which RAP, Fiori Elements, Embedded Analytics, OData Services, APIs,
          and ABAP Cloud development are built.
        </p>

        <p>
          Understanding CDS is the first major step toward mastering RAP, Clean
          Core development, and modern SAP architecture.
        </p>
      </KeyTakeaway>

      <PrevNext
        prevTitle="Virtual Data Model (VDM)"
        prevHref="/tutorials/rap/cds-fundamentals/virtual-data-model"
        nextTitle="CDS View Entity"
        nextHref="/tutorials/rap/fundamentals/cds-view-entity"
      />
    </TutorialLayout>
  );
}
