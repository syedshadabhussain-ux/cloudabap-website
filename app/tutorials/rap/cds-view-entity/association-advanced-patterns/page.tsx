import ContentSection from "@/components/tutorials/ContentSection";
import TutorialLayout from "@/components/tutorials/TutorialLayout";
import ImageBlock from "@/components/tutorials/ImageBlock";
import CodeBlock from "@/components/tutorials/CodeBlock";
import ArchitectNote from "@/components/tutorials/ArchitectNote";
import ThinkLikeCompiler from "@/components/tutorials/ThinkLikeCompiler";
import CDSViewEntitySidebar from "@/components/tutorials/CDSViewEntitySidebar";
import RealWorldExample from "@/components/tutorials/RealWorldExample";
import BestPractice from "@/components/tutorials/BestPractice";
import CommonMistakes from "@/components/tutorials/CommonMistakes";
import InterviewQuestion from "@/components/tutorials/InterviewQuestion";
import KeyTakeaway from "@/components/tutorials/KeyTakeaway";
import PrevNext from "@/components/tutorials/PrevNext";

export default function Page() {
  return (
    <TutorialLayout
      title="Advanced Association Patterns in ABAP CDS View Entities"
      category="CDS View Entity"
      duration="80 min read"
      breadcrumbPath="/tutorials/rap/cds-view-entity"
      sidebar={<CDSViewEntitySidebar />}
    >
      <ImageBlock
        src="/images/rap/cds-view-entity/association/association-master.webp"
        alt="Advanced Associations"
        caption="Master multiple associations, nested navigation, reusable relationships and advanced compiler behavior used throughout SAP's Virtual Data Model."
      />

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Association Masterclass">
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="text-xl font-bold text-blue-900">
            Lesson 9 of 10 – Advanced Association Patterns
          </h3>

          <p className="mt-3 text-slate-700">
            By now you've learned almost every fundamental concept behind
            Associations.
          </p>

          <p className="mt-3 text-slate-700">
            This lesson focuses on how SAP actually builds the Virtual Data
            Model using Associations.
          </p>

          <blockquote className="mt-5 rounded-lg border-l-4 border-blue-600 bg-white px-6 py-4 text-lg italic text-slate-700">
            Real SAP Interface Views rarely contain one Association.
            <br />
            <br />
            Most contain dozens of interconnected Associations forming a large
            business object graph.
          </blockquote>
        </div>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Learning Objectives">
        <ul className="list-disc space-y-3 pl-6">
          <li>Create multiple Associations inside a CDS View.</li>

          <li>Navigate nested Associations.</li>

          <li>Understand Association reuse.</li>

          <li>Expose Associations for downstream CDS Views.</li>

          <li>Understand Association graphs used by SAP VDM.</li>
        </ul>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Introduction">
        <p>
          Most beginner examples show a CDS View containing only one
          Association.
        </p>

        <p>
          That is useful for learning the syntax, but it is not how SAP models
          business objects.
        </p>

        <p>
          Open almost any released Interface View and you'll find numerous
          Associations connecting Customers, Materials, Plants, Company Codes,
          Sales Organizations, Items, Texts, Addresses and many other business
          objects.
        </p>

        <p>
          Rather than thinking in terms of SQL tables, SAP models an entire
          business domain as a graph of reusable relationships.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ArchitectNote>
        A CDS View is not simply a SELECT statement.
        <br />
        <br />
        Think of it as a business object with relationships to other business
        objects.
        <br />
        <br />
        Those relationships are Associations.
        <br />
        <br />
        Together they form SAP's Virtual Data Model.
      </ArchitectNote>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="A CDS View with Multiple Associations">
        <CodeBlock
          title="Sales Order"
          language="ABAP CDS"
          code={`define view entity ZI_SalesOrder

  as select from I_SalesDocument

  association [0..1] to I_Customer as _Customer

    on $projection.SoldToParty = _Customer.Customer

  association [0..1] to I_Plant as _Plant

    on $projection.ShippingPoint = _Plant.Plant

  association [0..*] to I_SalesDocumentItem as _Item

    on $projection.SalesDocument = _Item.SalesDocument

{

    key SalesDocument,

    SalesOrganization,

    SoldToParty,

    ShippingPoint

}`}
        />

        <p>Three different business relationships have been defined.</p>

        <p>
          None of them retrieves data until a consumer navigates the required
          Association.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Visualizing the Business Object Graph">
        <CodeBlock
          title="Association Graph"
          language="Text"
          code={`Sales Order
     │
     ├── Customer
     │
     ├── Plant
     │
     └── Items`}
        />

        <p>The compiler stores these relationships as metadata.</p>

        <p>Every consumer may navigate a different branch of this graph.</p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ThinkLikeCompiler
        title="Building the Association Graph"
        thought="The compiler first discovers every Association before deciding which branches are required."
        steps={[
          "Read the root CDS View.",
          "Register every Association.",
          "Build the relationship graph.",
          "Wait for consumer navigation.",
          "Generate JOINs only for navigated branches.",
        ]}
        decision="Multiple Associations increase reusability without forcing unnecessary SQL JOINs."
        performanceTip="The number of Associations in a CDS View has little impact by itself. What matters is which Associations are actually navigated."
      />

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Nested Associations">
        <p>
          One of the biggest strengths of Associations is that they can be
          chained together to navigate across multiple business objects without
          writing additional JOIN statements.
        </p>

        <p>
          This is known as <strong>Nested Association Navigation</strong>.
        </p>

        <CodeBlock
          title="Nested Navigation"
          language="ABAP CDS"
          code={`_Item._Material._Plant.PlantName`}
        />

        <p>Read this expression from left to right.</p>

        <blockquote className="rounded-lg border-l-4 border-blue-500 bg-slate-50 px-6 py-4 italic text-slate-700">
          Sales Order → Item → Material → Plant → Plant Name
        </blockquote>

        <p>Every step navigates one Association.</p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Real SAP Example">
        <p>Imagine the following Interface Views.</p>

        <CodeBlock
          title="Relationships"
          language="Text"
          code={`I_SalesDocument

↓

I_SalesDocumentItem

↓

I_Product

↓

I_ProductText`}
        />

        <p>A consumer can navigate directly to the Product Description.</p>

        <CodeBlock
          title="Navigation"
          language="ABAP CDS"
          code={`_Item._Product._Text.ProductName`}
        />

        <p>
          Notice that the Sales Order CDS View never directly joins the Product
          Text.
        </p>

        <p>
          The compiler follows the Association chain one relationship at a time.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="How the CDS Compiler Traverses Nested Associations">
        <p>The compiler never jumps directly to the last business object.</p>

        <CodeBlock
          title="Association Graph"
          language="Text"
          code={`Sales Order

↓

Item

↓

Product

↓

Product Text`}
        />

        <p>Internally, the compiler resolves the graph sequentially.</p>

        <CodeBlock
          title="Compiler Traversal"
          language="Text"
          code={`Step 1

Sales Order

↓

Step 2

Resolve Item

↓

Step 3

Resolve Product

↓

Step 4

Resolve Product Text

↓

Generate SQL`}
        />

        <p>Each Association is validated before moving to the next one.</p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ThinkLikeCompiler
        title="Resolving Nested Associations"
        thought="Every path expression represents a traversal through the Association graph."
        steps={[
          "Start from the root CDS View.",
          "Resolve the first Association (_Item).",
          "Resolve the second Association (_Product).",
          "Resolve the third Association (_Text).",
          "Generate JOINs only for traversed Associations.",
        ]}
        decision="Nested Associations are resolved level by level. There is never a direct jump to the deepest business object."
        performanceTip="Each additional Association represents another potential JOIN. If a branch isn't navigated, the compiler removes it before SQL generation."
      />

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Association Reuse">
        <p>
          One of SAP's primary design goals was to avoid repeatedly writing the
          same JOIN logic across hundreds of CDS Views.
        </p>

        <p>
          Instead of defining Customer relationships everywhere, SAP defines the
          Association once and allows every consumer to reuse it.
        </p>

        <CodeBlock
          title="Interface View"
          language="ABAP CDS"
          code={`association [0..1] to I_Customer as _Customer

on $projection.SoldToParty = _Customer.Customer`}
        />

        <p>
          Any Projection View, Consumption View or RAP Business Object built on
          top of this Interface View can simply navigate the existing
          Association.
        </p>

        <p>
          The relationship is defined once and reused throughout the Virtual
          Data Model.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Exposing Associations">
        <p>Associations are not only meant for the current CDS View.</p>

        <p>
          They can also be exposed so that downstream CDS Views continue to use
          the same business relationship.
        </p>

        <CodeBlock
          title="Projection View"
          language="ABAP CDS"
          code={`define view entity ZC_SalesOrder

  as projection on ZI_SalesOrder

{

    key SalesDocument,

    SalesOrganization,

    _Customer,

    _Item

}`}
        />

        <p>
          Notice that the Projection View does not redefine the Associations.
        </p>

        <p>
          It simply exposes the existing relationships defined by the Interface
          View.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Why SAP Encourages Association Reuse">
        <table className="mt-6 w-full border-collapse overflow-hidden rounded-xl border">
          <thead className="bg-slate-100">
            <tr>
              <th className="border px-4 py-3 text-left">
                Without Associations
              </th>

              <th className="border px-4 py-3 text-left">With Associations</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border px-4 py-3">
                JOIN logic repeated in every CDS View.
              </td>

              <td className="border px-4 py-3">Relationship defined once.</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">Difficult maintenance.</td>

              <td className="border px-4 py-3">
                Centralized relationship management.
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-3">High duplication.</td>

              <td className="border px-4 py-3">Maximum reuse.</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">
                Every CDS owns its JOIN logic.
              </td>

              <td className="border px-4 py-3">
                Virtual Data Model shares relationships.
              </td>
            </tr>
          </tbody>
        </table>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ArchitectNote>
        <strong>Technical Architect Insight</strong>
        <br />
        <br />
        One of the biggest mistakes developers make is thinking Associations are
        created only for the current CDS View.
        <br />
        <br />
        In reality, SAP designs Interface Views so that dozens of downstream
        Projection Views, Consumption Views, Analytical Queries and RAP Business
        Objects can all reuse the same Associations.
        <br />
        <br />
        This reuse is one of the foundations of SAP's Virtual Data Model.
      </ArchitectNote>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Association Filters Using Path Expressions">
        <p>
          One of the most powerful features of Associations is the ability to
          filter data while navigating an Association instead of filtering the
          entire result set.
        </p>

        <p>
          This is known as a <strong>Path Expression Filter</strong>.
        </p>

        <CodeBlock
          title="Path Expression Filter"
          language="ABAP CDS"
          code={`_Item[SalesDocumentItem='000010'].Material`}
        />

        <p>
          Instead of navigating every Sales Order Item, the navigation itself is
          restricted to Item <strong>000010</strong>.
        </p>

        <p>
          This is fundamentally different from writing a global
          <strong> WHERE</strong> condition.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Path Expression Filter vs WHERE Clause">
        <table className="mt-6 w-full border-collapse overflow-hidden rounded-xl border">
          <thead className="bg-slate-100">
            <tr>
              <th className="border px-4 py-3 text-left">
                Path Expression Filter
              </th>

              <th className="border px-4 py-3 text-left">WHERE Clause</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border px-4 py-3">
                Filters the Association being navigated.
              </td>

              <td className="border px-4 py-3">
                Filters the final CDS result.
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-3">
                Acts only on one navigation path.
              </td>

              <td className="border px-4 py-3">
                Acts on every returned record.
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-3">
                Preserves the overall business graph.
              </td>

              <td className="border px-4 py-3">
                Reduces the final result set.
              </td>
            </tr>
          </tbody>
        </table>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Real Example Using Sales Orders">
        <p>Suppose a Sales Order contains four items.</p>

        <CodeBlock
          title="Sales Order"
          language="Text"
          code={`Sales Order

↓

Item 10

↓

Item 20

↓

Item 30

↓

Item 40`}
        />

        <p>Now navigate only Item 20.</p>

        <CodeBlock
          title="Navigation"
          language="ABAP CDS"
          code={`_Item[SalesDocumentItem='000020'].Material`}
        />

        <p>The Association itself remains TO MANY.</p>

        <p>Only this particular navigation path is filtered.</p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Consumer-Specific Navigation">
        <p>
          One of the major reasons SAP prefers Associations over explicit JOINs
          is that different consumers rarely require the same business data.
        </p>

        <p>Consider three applications consuming the same Interface View.</p>

        <table className="mt-6 w-full border-collapse overflow-hidden rounded-xl border">
          <thead className="bg-slate-100">
            <tr>
              <th className="border px-4 py-3 text-left">Consumer</th>

              <th className="border px-4 py-3 text-left">
                Required Navigation
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border px-4 py-3">Fiori List Report</td>

              <td className="border px-4 py-3">_Customer</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">RAP Service</td>

              <td className="border px-4 py-3">_Customer + _Item</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">Analytical Query</td>

              <td className="border px-4 py-3">_Customer + _Item + _Text</td>
            </tr>
          </tbody>
        </table>

        <p className="mt-6">
          Every consumer starts from exactly the same Interface View.
        </p>

        <p>The only difference is which Association branches are navigated.</p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="The Compiler Generates Different SQL for Different Consumers">
        <p>This is perhaps the biggest advantage of Associations.</p>

        <CodeBlock
          title="Consumer A"
          language="Text"
          code={`Sales Order

↓

Customer`}
        />

        <p>Only the Customer JOIN is generated.</p>

        <CodeBlock
          title="Consumer B"
          language="Text"
          code={`Sales Order

↓

Customer

↓

Items

↓

Product Text`}
        />

        <p>
          Additional JOINs are generated because more Associations are
          navigated.
        </p>

        <p>The CDS View remains exactly the same.</p>

        <p>Only the generated SQL changes.</p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ThinkLikeCompiler
        title="Consumer Driven SQL Generation"
        thought="Every consumer requests a different subset of the Association graph."
        steps={[
          "Read the Interface View.",
          "Determine the requested path expressions.",
          "Discard unused branches.",
          "Generate JOINs only for requested Associations.",
          "Optimize the final SQL statement.",
        ]}
        decision="The generated SQL depends on the consumer—not merely on the CDS definition."
        performanceTip="This is why one reusable Interface View can efficiently support Fiori apps, RAP services and analytical queries without modification."
      />

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Exposed Association vs Navigated Association">
        <p>
          Developers often confuse exposing an Association with navigating an
          Association.
        </p>

        <table className="mt-6 w-full border-collapse overflow-hidden rounded-xl border">
          <thead className="bg-slate-100">
            <tr>
              <th className="border px-4 py-3 text-left">
                Exposed Association
              </th>

              <th className="border px-4 py-3 text-left">
                Navigated Association
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border px-4 py-3">
                Makes the relationship available to downstream CDS Views.
              </td>

              <td className="border px-4 py-3">
                Retrieves data from the target business object.
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-3">No JOIN required.</td>

              <td className="border px-4 py-3">JOIN may be generated.</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">Metadata only.</td>

              <td className="border px-4 py-3">Runtime navigation.</td>
            </tr>
          </tbody>
        </table>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ArchitectNote>
        <strong>Technical Architect Insight</strong>
        <br />
        <br />
        One Interface View may be consumed by dozens of applications.
        <br />
        <br />
        Some consumers expose Associations for future reuse.
        <br />
        <br />
        Others immediately navigate those Associations.
        <br />
        <br />
        Understanding this distinction is essential when designing reusable CDS
        Views for RAP and SAP's Virtual Data Model.
      </ArchitectNote>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Putting Everything Together">
        <p>
          Throughout this masterclass we've explored Associations from multiple
          perspectives:
        </p>

        <ul className="mt-4 list-disc space-y-3 pl-6">
          <li>Business relationships</li>

          <li>Cardinality</li>

          <li>Navigation</li>

          <li>Lazy Loading</li>

          <li>Generated SQL</li>

          <li>Compiler optimization</li>

          <li>Nested Associations</li>

          <li>Association reuse</li>
        </ul>

        <p className="mt-6">These concepts are not independent.</p>

        <p>
          Together they form the foundation of SAP's Virtual Data Model (VDM),
          where business objects are connected through reusable Associations
          instead of repeatedly writing JOIN logic.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="A Typical SAP Virtual Data Model">
        <CodeBlock
          title="Business Object Graph"
          language="Text"
          code={`Sales Order
     │
     ├── Customer
     │
     ├── Company Code
     │
     ├── Sales Organization
     │
     ├── Items
     │      │
     │      ├── Product
     │      │      │
     │      │      └── Product Text
     │      │
     │      └── Plant
     │
     └── Billing Document`}
        />

        <p>
          This is much closer to what you'll find in SAP-delivered Interface
          Views.
        </p>

        <p>Every node represents a business object.</p>

        <p>Every connection represents an Association.</p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="How an Architect Thinks">
        <p>Junior developers often think:</p>

        <blockquote className="rounded-lg border-l-4 border-red-500 bg-red-50 px-6 py-4 italic text-slate-700">
          Which JOIN should I write?
        </blockquote>

        <p>Experienced ABAP Cloud developers think:</p>

        <blockquote className="rounded-lg border-l-4 border-green-500 bg-green-50 px-6 py-4 italic text-slate-700">
          Which business objects are related?
        </blockquote>

        <p>SAP Technical Architects go one step further.</p>

        <blockquote className="rounded-lg border-l-4 border-blue-500 bg-blue-50 px-6 py-4 italic text-slate-700">
          How can I model these relationships once so every application can
          reuse them?
        </blockquote>

        <p>
          That mindset is exactly what the SAP Virtual Data Model encourages.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ThinkLikeCompiler
        title="The Complete Compiler Journey"
        thought="The compiler transforms business relationships into executable SQL while removing everything that isn't needed."
        steps={[
          "Read the root CDS View.",
          "Register every Association.",
          "Validate Cardinality.",
          "Build the Association graph.",
          "Identify navigated path expressions.",
          "Discard unused branches.",
          "Generate optimized SQL.",
          "Send SQL to SAP HANA.",
        ]}
        decision="The final SQL depends on the consumer's navigation—not simply on the CDS definition."
        performanceTip="This architecture allows a single Interface View to support dozens of applications without duplicating JOIN logic."
      />

      {/* ------------------------------------------------------------ */}

      <RealWorldExample title="A Typical SAP S/4HANA Public Cloud Scenario">
        SAP delivers an Interface View such as
        <strong> I_SalesDocument</strong>.
        <br />
        <br />
        That single Interface View may be consumed by:
        <br />
        <br />
        • Fiori List Reports
        <br />
        • Object Pages
        <br />
        • RAP Business Objects
        <br />
        • OData Services
        <br />
        • Analytical CDS Queries
        <br />
        • Custom Projection Views
        <br />
        <br />
        None of these applications rewrite the JOIN logic.
        <br />
        <br />
        Instead, each application navigates the Associations it requires, while
        the CDS compiler generates optimized SQL specifically for that consumer.
      </RealWorldExample>

      {/* ------------------------------------------------------------ */}

      <ArchitectNote>
        <strong>Technical Architect Recommendation</strong>
        <br />
        <br />
        When designing Interface Views, don't think about today's requirement.
        <br />
        <br />
        Think about the next five applications that will consume your CDS View.
        <br />
        <br />
        If business relationships are modeled correctly using Associations,
        future Projection Views, RAP services and analytical models can reuse
        them without modifying the original Interface View.
        <br />
        <br />
        This is exactly how SAP designs its released Virtual Data Model.
      </ArchitectNote>

      {/* ------------------------------------------------------------ */}

      <BestPractice>
        Build Interface Views around business objects—not reports.
        <br />
        <br />
        Define reusable Associations once.
        <br />
        <br />
        Choose the correct Cardinality.
        <br />
        <br />
        Keep ON conditions limited to relationship logic.
        <br />
        <br />
        Allow downstream consumers to navigate only the Associations they
        require.
        <br />
        <br />
        Let the CDS compiler optimize SQL generation automatically.
      </BestPractice>

      {/* ------------------------------------------------------------ */}

      <CommonMistakes
        items={[
          "Thinking Associations are simply another syntax for SQL JOINs.",
          "Using explicit JOINs everywhere instead of reusable Associations.",
          "Choosing Cardinality without understanding the business relationship.",
          "Confusing exposed Associations with navigated Associations.",
          "Designing Interface Views for one application instead of multiple consumers.",
        ]}
      />

      {/* ------------------------------------------------------------ */}

      <InterviewQuestion
        level="Beginner"
        question="Why does SAP recommend Associations over repeatedly writing JOINs?"
        answer="Associations model reusable business relationships. Different consumers navigate only the Associations they need, allowing the CDS compiler to generate optimized SQL automatically."
      />

      <InterviewQuestion
        level="Experienced"
        question="What is the biggest architectural advantage of Associations?"
        answer="Associations separate business relationships from SQL implementation. This improves reuse, maintainability and allows the CDS compiler to perform optimizations such as lazy loading and join elimination."
      />

      <InterviewQuestion
        level="Architect"
        question="How would you design an Interface View intended to be reused across RAP, Fiori and analytical applications?"
        answer="Model the Interface View around the core business object, define reusable Associations with correct Cardinality, expose those Associations for downstream reuse, and allow each consumer to navigate only the business relationships it requires."
      />

      {/* ------------------------------------------------------------ */}

      <KeyTakeaway>
        <p>
          Associations are one of the most important innovations introduced by
          ABAP CDS.
        </p>

        <p>
          They replace repetitive JOIN logic with reusable business
          relationships, allowing SAP's Virtual Data Model to remain modular,
          extensible and consumer-driven.
        </p>

        <p>
          Once you begin thinking in terms of business objects and Association
          graphs instead of SQL tables and JOIN statements, you'll understand
          why almost every SAP-delivered Interface View is built around
          Associations.
        </p>
      </KeyTakeaway>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Congratulations!">
        <div className="rounded-xl border border-green-200 bg-green-50 p-6">
          <h3 className="text-xl font-bold text-green-800">
            🎉 You've Completed the Association Masterclass
          </h3>

          <p className="mt-4 text-slate-700">
            Across these lessons you've learned:
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>Why SAP introduced Associations</li>

            <li>Creating your first Association</li>

            <li>Navigation and Path Expressions</li>

            <li>Lazy Loading</li>

            <li>Cardinality</li>

            <li>TO ONE vs TO MANY</li>

            <li>Association vs SQL JOIN</li>

            <li>ON vs WHERE</li>

            <li>Advanced Association Patterns</li>
          </ul>

          <p className="mt-6 text-slate-700">
            You now have the knowledge required to understand, design and build
            reusable CDS Views following SAP's Virtual Data Model principles in
            S/4HANA Public Cloud.
          </p>
        </div>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <PrevNext
        prevTitle="Association vs JOIN"
        prevHref="/tutorials/rap/cds-view-entity/association-vs-join"
        nextTitle="Performance Best Practices"
        nextHref="/tutorials/rap/cds-view-entity/association-performance-best-practices"
      />
    </TutorialLayout>
  );
}
